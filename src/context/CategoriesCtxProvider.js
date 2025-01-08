import React, { createContext } from "react";
import { useFetch } from "../hooks";
import { Endpoints } from "../services";
import Spinner from "../components/Spinner";

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

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <CategoriesContext.Provider
      value={{ categoriesData: data, isLoading, isError }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesCtxProvider;
