import React, { createContext, useState } from "react";

export const Authcontext = createContext({
  loginActive: true,
  toggleLoginActive: () => {},
  openLogin: () => {},
  closeLogin: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [loginActive, setLoginActive] = useState(true);

  const toggleLoginActive = () => {
    setLoginActive((prevstate) => !prevstate);
  };

  const openLogin = () => {
    setLoginActive(true);
  };

  const closeLogin = () => {
    setLoginActive(false);
  };

  return (
    <Authcontext.Provider
      value={{ loginActive, toggleLoginActive, openLogin, closeLogin }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default AuthContextProvider;
