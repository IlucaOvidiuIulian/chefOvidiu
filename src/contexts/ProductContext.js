import React, { createContext, useState, useContext } from "react";
import fetchProducts from "../apis/ProductsApis";

import { useEffect } from "react";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  const value = {
    products,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
