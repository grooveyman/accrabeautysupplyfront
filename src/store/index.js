import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"; // Guest cart logic
import cartApi from "./authenticatedCartSlice"; // RTK Query API for registered customers

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // Guest cart stored in localStorage
    [cartApi.reducerPath]: cartApi.reducer, // RTK Query API for registered users
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware), // Include RTK Query middleware
});

export default store;
