import React, { createContext, useState } from "react";

export const Authcontext = createContext({
  loginActive: true,
  toggleLoginActive: () => {},
  openLogin: () => {},
  closeLogin: () => {},
  isLoggedIn: false,
  loginHandler: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [loginActive, setLoginActive] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLoginActive = () => {
    setLoginActive((prevstate) => !prevstate);
  };

  const openLogin = () => {
    setLoginActive(true);
  };

  const closeLogin = () => {
    setLoginActive(false);
  };

  const loginHandler = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };

  return (
    <Authcontext.Provider
      value={{
        loginActive,
        toggleLoginActive,
        openLogin,
        closeLogin,
        isLoggedIn,
        loginHandler,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default AuthContextProvider;
