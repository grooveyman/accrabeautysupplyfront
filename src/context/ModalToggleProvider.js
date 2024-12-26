import React, { createContext, useContext, useState } from "react";
import { Authcontext } from "./AuthContextProvider";

export const ModalContext = createContext({});

export const ModalToggleProvider = ({ children }) => {
  const {openLogin} = useContext(Authcontext)
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
    setAuthOpen(false)
  };

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

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

