import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Authcontext } from "./AuthContextProvider";
import { useSelector } from "react-redux";
import { useGetCartQuery } from "../store/authenticatedCartSlice";

export const ModalContext = createContext({});

export const ModalToggleProvider = ({ children }) => {
  const { openLogin, isLoggedIn, stateUsercode } = useContext(Authcontext);
  const customercode = stateUsercode || localStorage.getItem("user");
  const { data: cart } = useGetCartQuery(customercode, {skip: !isLoggedIn});
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartStore = JSON.parse(localStorage.getItem("cartSupply"));
  const guesttotalQ = cartStore?.totalQuantity || totalQuantity;
  const registeredtotalQ = cart?.results?.[0]?.quantity;
  const totalQ = isLoggedIn ? registeredtotalQ : guesttotalQ;

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleCart = () => setCartOpen((prev) => !prev);
  const toggleAuth = () => setAuthOpen((prev) => !prev);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const openAuth = () => setAuthOpen(true);

  const closeAuth = () => {
    openLogin();
    setAuthOpen(false);
  };

  const openCart = () => setCartOpen(true);
  const closeCart = useCallback(() => {
    setCartOpen(false);
  }, [setCartOpen]);

  useEffect(() => {
    if (menuOpen || cartOpen || authOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, cartOpen, authOpen]);

  useEffect(() => {
    if (totalQ === 0) {
      closeCart();
    }
  }, [totalQ, closeCart]);

  return (
    <ModalContext.Provider
      value={{
        menuOpen,
        cartOpen,
        authOpen,
        toggleMenu,
        toggleCart,
        toggleAuth,
        openMenu,
        closeMenu,
        openCart,
        closeCart,
        openAuth,
        closeAuth,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
