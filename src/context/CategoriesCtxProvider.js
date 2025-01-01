import React, { createContext, useState } from "react";

export const CategoriesContext = createContext([]);

const CategoriesCtxProvider = ({ children }) => {
  const [categories] = useState([]);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesCtxProvider;
