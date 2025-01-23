import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useGetCartQuery } from "../../../store/authenticatedCartSlice";
import { Authcontext } from "../../../context";

const formatNumber = (num) => {
  if (num > 999) return `${(num / 1000).toFixed(1)}K`; // e.g., 1.2K
  if (num > 99) return "99+";
  return num;
};

const Bubble = () => {
      const {stateUsercode, isLoggedIn} = useContext(Authcontext)
      const customercode = stateUsercode || localStorage.getItem("user");
      const { data: cart } = useGetCartQuery(customercode, {
        skip: !isLoggedIn,
      });
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartStore = JSON.parse(localStorage.getItem("cartSupply"));
  const guesttotalQ = cartStore?.totalQuantity || totalQuantity;
  const registeredtotalQ = cart?.results?.[0]?.quantity;
  const totalQ = isLoggedIn ? registeredtotalQ : guesttotalQ;

  return (
    <div className={`absolute -top-2 -right-3 bg-slate-950 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[1.5rem] ${totalQ > 0 ? "flex": "hidden"} items-center justify-center`}>
      {formatNumber(totalQ)}
    </div>
  );
};

export default Bubble;
