import React, { createContext } from "react";
import { useFetch } from "../hooks";
import { Endpoints } from "../services";

export const CategoriesContext = createContext({
  categoriesData: {},
  isLoading: false,
  isError: false,
});

const CategoriesCtxProvider = ({ children }) => {
  const { isLoading, isError, data } = useFetch(
    ["categories"],
    Endpoints.CATEGORIES
  );

  return (
    <CategoriesContext.Provider
      value={{ categoriesData: data, isLoading, isError }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesCtxProvider;
