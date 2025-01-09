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
  PRODUCTS: (limit, offset) => `/products?limit=${limit}&offset=${offset}`,
  PRODUCT: (productId) => `/products/${productId}`,
  CART: `/carts`,
  CATEGORIES: `/categories`,
  CUSTOMERS: `/customers`,
};
