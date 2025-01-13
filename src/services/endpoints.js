import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_BASE_URL;

export const backendURL = process.env.REACT_APP_API_BACK_URL;

// Create instance
export const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

export const Endpoints = {
  CATEGORY_PRODUCTS: (categorycode) => `/productscat/${categorycode}`,
  PRODUCTS: (limit, offset, sort, order) => `/products?limit=${limit}&offset=${offset}&sort=${sort}&order=${order}`,
  PRODUCTS2: (limit, offset) => `/products?limit=${limit}&offset=${offset}`,
  PRODUCT: (productCode) => `/products/${productCode}`,
  CART: `/carts`,
  CATEGORIES: `/categories`,
  CUSTOMERS: `/customers`,
  RECOMMENDED: (categorycode, limit, offset) => `/productscat/${categorycode}?limit=${limit}&offset=${offset}`,
};
