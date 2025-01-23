import React, { useRef } from "react";
import Modal from "../../components/modal/Modal";
import { useContext } from "react";
import { Authcontext, ModalContext } from "../../context";
import XIcon from "../Header/components/XIcon";
import { Link } from "react-router-dom";
// import image2 from "../../assets/images/cosm.png";
// import image3 from "../../assets/images/hairagain.jpg";
// import image4 from "../../assets/images/darkxlovely.jpg";
// import image1 from "../../assets/images/art3.jpg";
import Incrementbtn from "../../components/Incrementbtn";
import Decrementbtn from "../../components/Decrementbtn";
import Trash from "../../components/Trash";
import { useDispatch, useSelector } from "react-redux";
import { backendURL } from "../../services";
import { cartActions } from "../../store/cartSlice";
import {
  useGetCartQuery,
  useRemoveFromCartMutation,
  useUpdateCartItemMutation,
} from "../../store/authenticatedCartSlice";
import {
  showErrorToast,
  showSuccessToast,
} from "../../helpers/Helperfunctions";
import CartModSkeleton from "../../components/Skeletons/CartModSkeleton";
// import Emptycart from "../../pages/Cart/components/Emptycart";

const Cartmodal = () => {
  const { stateUsercode, isLoggedIn } = useContext(Authcontext);
  const customercode = stateUsercode || localStorage.getItem("user");
  const { data: cart, isLoading } = useGetCartQuery(customercode, {
    skip: !isLoggedIn,
  });
  const { closeCart } = useContext(ModalContext);
  const inputref = useRef(null);
  const [updateCartItem, { isLoading: isPending }] =
    useUpdateCartItemMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  const dispatch = useDispatch();
  const cartStateItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartStore = JSON.parse(localStorage.getItem("cartSupply"));
  const guestcartItems = cartStore?.items || cartStateItems;
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

  // if (totalQ === 0) {
  //   return <Emptycart />;
  // }

  return (
    <Modal
      customstyle={`bg-gray-200 w-4/5 sm:w-6/12 lg:w-[35%] min-h-screen h-full fixed top-0 right-0 z-[1001] p-3 flex flex-col`}
      onClose={closeCart}
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between border-b border-gray-200 h-[8%]">
        <h3 className="text-2xl font-black text-gray-600 max-w-44">
          My Bag ({totalQ})
        </h3>
        <XIcon handleClick={closeCart} />
      </div>

      <div className="flex flex-col flex-1 h-[92%]">
        {!isLoading ? (
          <div className="overflow-y-auto border-b h-[66%] border-gray-300">
            {cartItems?.map((item) => (
              <div
                key={item.itemvariation.prodvarcode}
                className="flex gap-3 py-3 border-t border-gray-300"
              >
                <img
                  src={backendURL + item.previmage}
                  alt={item.prodname}
                  className="h-20 w-20 object-cover object-center rounded-md"
                />
                <div className="flex-1 flex justify-between lg:flex-row">
                  <div className="flex-1 flex flex-col gap-y-2 justify-between">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-sm font-semibold">
                          {item.prodname}
                        </h2>
                        <h4 className="text-xs text-gray-500">
                          {item.itemvariation.color}/{item.itemvariation.size}
                        </h4>
                      </div>
                      <Trash
                        className={"w-3 h-3 cursor-pointer"}
                        title={"remove"}
                        onPress={() =>
                          removeItem(
                            item.prodcode,
                            item.itemvariation.prodvarcode,
                            customercode
                          )
                        }
                      />
                    </div>
                    <div className="flex justify-between gap-x-1">
                      <div className="flex border border-gray-600 rounded-md">
                        <button
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
                          className="py-1 px-1"
                        >
                          <Decrementbtn className={"w-3 h-3"} />
                        </button>
                        <input
                          id="amount"
                          type="number"
                          min="1"
                          max="5"
                          step="1"
                          value={item.quantity}
                          ref={inputref}
                          className="text-black border-none outline-none appearance-none py-1 px-1 text-center text-xs"
                          readOnly
                        />
                        <button
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
                          className="py-1 px-1"
                        >
                          <Incrementbtn className={"w-3 h-3"} />
                        </button>
                      </div>
                      <p className="text-gray-800">${item.totalprice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CartModSkeleton />
        )}
        <div className="border-t border-gray-200 h-[34%]">
          <div className="flex justify-between text-base font-medium text-gray-900 mt-3">
            <p>Subtotal</p>
            <p>
              {isLoggedIn && isPending ? (
                <i className="fa fa-circle-o-notch fa-spin"></i>
              ) : (
                "$" + totalSum
              )}
            </p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-4">
            <Link className="flex items-center justify-center rounded-md border border-transparent bg-slate-950 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-900 mb-3">
              Checkout
            </Link>
            <div className="text-center">
              <Link
                className="font-medium text-slate-950 hover:text-slate-900"
                to={"/cart"}
                onClick={closeCart}
              >
                View Bag(full)
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cartmodal;
