import React, { createContext, useState } from "react";

export const Authcontext = createContext({
  loginActive: true,
  toggleLoginActive: () => {},
  openLogin: () => {},
  closeLogin: () => {},
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
  stateName: "",
  stateToken: "",
  stateUsercode: ""
});

const AuthContextProvider = ({ children }) => {
  const [loginActive, setLoginActive] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stateToken, setStateToken] = useState("")
  const [stateName, setStateName] = useState("")
  const [stateUsercode, setStateUsercode] = useState("")

  const toggleLoginActive = () => {
    setLoginActive((prevstate) => !prevstate);
  };

  const openLogin = () => {
    setLoginActive(true);
  };

  const closeLogin = () => {
    setLoginActive(false);
  };

  const loginHandler = (token, name, usercode ) => {
    setIsLoggedIn(true);
    setStateToken(token)
    setStateName(name)
    setStateUsercode(usercode)
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    const keysToRemove = ['token', 'user', 'firstname', 'tokenExpiry'];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    setStateToken("")
    setStateName("")
    setStateUsercode("")
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
        logoutHandler,
        stateName,
        stateToken,
        stateUsercode
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default AuthContextProvider;
