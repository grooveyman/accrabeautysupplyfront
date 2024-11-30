import React, { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalToggleProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleCart = () => setCartOpen((prev) => !prev);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <ModalContext.Provider
      value={{
        menuOpen,
        cartOpen,
        toggleMenu,
        toggleCart,
        openMenu,
        closeMenu,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

