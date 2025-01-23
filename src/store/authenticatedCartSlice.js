import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = process.env.REACT_APP_API_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${apiKey}`);
      if (token) {
        headers.set("customer_token", token);
      }
      return headers;
    },
  }),
  tagTypes: ["userCart"],
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (customercode) => `/carts/${customercode}`,
      providesTags: ["userCart"],
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: true,
    }),

    addToCart: builder.mutation({
      query: ({ items, customercode }) => ({
        url: `/carts/${customercode}`,
        method: "POST",
        body: items,
      }),
      async onQueryStarted({ customercode }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(cartApi.util.invalidateTags(["userCart"]));
        } catch (error) {
          console.error("Failed to add item to cart:", error);
        }
      },
    }),

    removeFromCart: builder.mutation({
      query: ({ customercode, prodcode, prodvarcode }) => ({
        url: `/carts/${customercode}`,
        method: "DELETE",
        body: { prodcode, prodvarcode },
      }),
      async onQueryStarted({ customercode }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(cartApi.util.invalidateTags(["userCart"]));
        } catch (error) {
          console.error("Failed to remove item from cart:", error);
        }
      },
    }),

    updateCartItem: builder.mutation({
      query: ({ customercode, quantity, prodcode, prodvarcode, totalPrice }) => ({
        url: `/carts/${customercode}`,
        method: "PATCH",
        body: { quantity, prodcode, prodvarcode, totalPrice },
      }),
      async onQueryStarted({ customercode }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(cartApi.util.invalidateTags(["userCart"]));
        } catch (error) {
          console.error("Failed to update cart item:", error);
        }
      },
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartItemMutation,
} = cartApi;

export default cartApi;
