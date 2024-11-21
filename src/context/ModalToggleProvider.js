import React, { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalToggleProvider = ({children}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => {
    setToggleMenu((prevstate) => !prevstate);
  };

  const openMenu = () => setToggleMenu(true);
  const closeMenu = () => setToggleMenu(false);

  return (
    <ModalContext.Provider value={{ toggleMenu, toggle, openMenu, closeMenu }}>
      {children}
    </ModalContext.Provider>
  );
};
