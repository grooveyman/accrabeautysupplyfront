import React, { useContext } from "react";
import CustomSlider from "../../components/Slider";
import Decrementbtn from "../../components/Decrementbtn";
import Incrementbtn from "../../components/Incrementbtn";
import { useFetch } from "../../hooks";
import { backendURL, Endpoints } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
// import Spinner from "../../components/Spinner";
import Emptycart from "./components/Emptycart";
import {
  useGetCartQuery,
  useUpdateCartItemMutation,
  useRemoveFromCartMutation,
} from "../../store/authenticatedCartSlice";
import { Authcontext } from "../../context";
import {
  showErrorToast,
  showSuccessToast,
} from "../../helpers/Helperfunctions";
import SliderSkeleton from "../../components/Skeletons/SliderSkeleton";
import CartSkeleton from "../../components/Skeletons/CartSkeleton";

const ShoppingCart = () => {
  const { stateUsercode, isLoggedIn } = useContext(Authcontext);
  const customercode = stateUsercode || localStorage.getItem("user");
  const { data: cart, isLoading } = useGetCartQuery(customercode, {
    skip: !isLoggedIn,
  });
  const [updateCartItem, { isLoading: isPending }] =
    useUpdateCartItemMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  // console.log(cart?.results?.[0]?.cartitems)
  const dispatch = useDispatch();
  const cartStateItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartStore = JSON.parse(localStorage.getItem("cartSupply"));
  const guestcartItems = cartStore?.items || cartStateItems;
  // console.log(cartItems)
  const guesttotalQ = cartStore?.totalQuantity || totalQuantity;
  const registeredtotalQ = cart?.results?.[0]?.quantity;
  // const registeredtotalQ2 = cart?.results?.[0]?.cartitems.reduce((accumulator, currentItem) => {
  //   return accumulator + parseInt(currentItem.quantity);
  // }, 0);
  const cartItems = isLoggedIn ? cart?.results?.[0]?.cartitems : guestcartItems;
  const totalQ = isLoggedIn ? registeredtotalQ : guesttotalQ;
  const totalSum = cartItems?.reduce((accumulator, currentItem) => {
    return accumulator + parseInt(currentItem.totalprice);
  }, 0);
  // console.log(cart);

  const removeItem = async (prodcode, prodvarcode, customercode) => {
    if (!isLoggedIn) {
      dispatch(cartActions.removeFromCart({ prodcode, prodvarcode }));
      return;
    }

    try {
      await removeFromCart({ customercode, prodcode, prodvarcode }).unwrap();
      showSuccessToast("Item removed successfully");
    } catch (error) {
      showErrorToast("Failed to remove item from cart");
    }
  };

  const increaseAmt = async (
    prodcode,
    prodvarcode,
    quantity,
    price,
    customercode
  ) => {
    if (!isLoggedIn) {
      dispatch(cartActions.increaseCartItem({ prodcode, prodvarcode }));
      return;
    }

    const newQuantity = parseFloat(quantity) + 1;
    const newTotalPrice = parseFloat(price) * parseFloat(newQuantity);

    try {
      await updateCartItem({
        customercode,
        quantity: newQuantity,
        prodcode,
        prodvarcode,
        totalPrice: newTotalPrice,
      }).unwrap(); // Unwrap to get the API response

      // console.log("Cart updated successfully:", response);
    } catch (err) {
      showErrorToast("Failed to update cart item");
    }
  };

  const decreaseAmt = async (
    prodcode,
    prodvarcode,
    quantity,
    price,
    customercode
  ) => {
    if (parseFloat(quantity) === 1) {
      return;
    }

    if (!isLoggedIn) {
      dispatch(cartActions.decreaseCartItem({ prodcode, prodvarcode }));
      return;
    }

    const newQuantity = parseFloat(quantity) - 1;
    const newTotalPrice = parseFloat(price) * parseFloat(newQuantity);

    try {
      await updateCartItem({
        customercode,
        quantity: newQuantity,
        prodcode,
        prodvarcode,
        totalPrice: newTotalPrice,
      }).unwrap(); // Unwrap to get the API response

      // console.log("Cart updated successfully:", response);
    } catch (err) {
      showErrorToast("Failed to update cart item");
    }
  };

  const { data: recommendedData, isLoading: isFetching } = useFetch(
    ["recommendedcart"],
    Endpoints.PRODUCTS2(8, 0)
  );
  const recommended = recommendedData?.results;

  if (totalQ === 0) {
    return <Emptycart />;
  }

  return (
    <main>
      <section className="max-w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          {isLoggedIn && !isLoading && (
            <div>
              <h3 className="mt-6 mb-4 font-bold text-2xl text-slate-950">
                My Bag ({totalQ})
              </h3>
            </div>
          )}
          {isLoggedIn && isLoading ? (
            <CartSkeleton />
          ) : (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                {cartItems?.map((item) => (
                  <div
                    key={item.itemvariation.prodvarcode}
                    className="flex gap-4 py-4 md:py-8 border-y"
                  >
                    <img
                      src={backendURL + item.previmage}
                      alt={item.prodname}
                      className="h-20 w-20 md:w-44 md:h-44 object-cover rounded-md"
                    />
                    <div className="flex-1 flex flex-col justify-between lg:flex-row">
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold">
                          {item.prodname}
                        </h2>
                        <p className="text-sm text-gray-500">
                          {item.itemvariation.color}/{item.itemvariation.size}
                        </p>
                        <p className="text-gray-800">${item.totalprice}</p>
                      </div>
                      <div className="flex lg:justify-center mt-6 md:mt-0 space-x-4 lg:flex-1">
                        {/* Decrement Button */}
                        <button
                          className="flex items-center justify-center w-8 h-8 border rounded-full text-gray-600 hover:text-red-600 hover:bg-gray-100"
                          type="button"
                          title="decrease"
                          onClick={() =>
                            decreaseAmt(
                              item.prodcode,
                              item.itemvariation.prodvarcode,
                              item.quantity,
                              item.price,
                              customercode
                            )
                          }
                        >
                          <Decrementbtn className={"w-5 h-5 cursor-pointer"} />
                        </button>
                        <div className="text-xl font-medium text-gray-800">
                          {item.quantity}
                        </div>
                        {/* Increment Button */}
                        <button
                          className="flex items-center justify-center w-8 h-8 border rounded-full text-gray-600 hover:text-green-600 hover:bg-gray-100"
                          type="button"
                          title="increase"
                          onClick={() =>
                            increaseAmt(
                              item.prodcode,
                              item.itemvariation.prodvarcode,
                              item.quantity,
                              item.price,
                              customercode
                            )
                          }
                        >
                          <Incrementbtn className={"w-5 h-5 cursor-pointer"} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        className="text-gray-500 hover:text-red-600"
                        title="remove"
                        onClick={() =>
                          removeItem(
                            item.prodcode,
                            item.itemvariation.prodvarcode,
                            customercode
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full md:sticky top-24 md:w-5/12 lg:w-1/3 p-6 border rounded-lg bg-gray-50 max-h-[360px]">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between border-b mb-2 py-2">
                  <span className="text-base/7 text-gray-600">Subtotal</span>
                  <span>
                    {isLoggedIn && isPending ? (
                      <i className="fa fa-circle-o-notch fa-spin"></i>
                    ) : (
                      "$" + totalSum
                    )}
                  </span>
                </div>
                <div className="flex justify-between border-b mb-2 py-2">
                  <span className="text-base/7 text-gray-600">
                    Shipping estimate
                    {/* <span className="text-gray-500 cursor-pointer">?</span> */}
                  </span>
                  <span>-</span>
                </div>
                <div className="flex justify-between border-b mb-2 py-2">
                  <span className="text-base/7 text-gray-600">
                    Tax estimate
                    {/* <span className="text-gray-500 cursor-pointer">?</span> */}
                  </span>
                  <span>-</span>
                </div>
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Order total</span>
                  <span>
                    {isLoggedIn && isPending ? (
                      <i className="fa fa-circle-o-notch fa-spin"></i>
                    ) : (
                      "$" + totalSum
                    )}
                  </span>
                </div>
                <button className="w-full bg-slate-950 text-white py-3 rounded-lg hover:bg-slate-900 transition">
                  Checkout
                </button>
              </div>
            </div>
          )}
          {recommended?.length > 0 && (
            <div className="mb-4 mt-8">
              <h2 className="font-bold text-2xl md:text-3xl text-slate-950 text-center md:text-left">
                Recommended for you
              </h2>
            </div>
          )}

          {!isFetching && recommended?.length > 0 ? (
            <CustomSlider data={recommended} />
          ) : isFetching ? (
            <SliderSkeleton />
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
};

export default ShoppingCart;
