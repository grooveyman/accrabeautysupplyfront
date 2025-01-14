import React, { createContext, useState } from "react";

export const Authcontext = createContext({
  loginActive: true,
  toggleLoginActive: () => {},
  openLogin: () => {},
  closeLogin: () => {},
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [loginActive, setLoginActive] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    const keysToRemove = ['token', 'user', 'firstname', 'tokenExpiry'];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
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
        logoutHandler
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default AuthContextProvider;
