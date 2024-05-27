import React, { useState, useContext, useEffect } from "react";

import { useAuth } from "./AuthContext";

import updateBasket from "../apis/BasketApis";

const BasketContext = React.createContext();

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider(props) {
  const [basketProducts, setBasketProducts] = useState([]);
  const { authUser, isLoggedIn } = useAuth();

  const setBasket = (newBasket) => {
    console.log(
      `BASKET UPDATE: Set new basket. Basket length ${newBasket.length}`
    );

    storeBasket(isLoggedIn, newBasket, authUser, setBasketProducts);
  };

  const addProductToBasket = (productId) => {
    console.log(
      `BASKET UPDATE: Adding new product with ID ${productId}. Basket length ${basketProducts.length}`
    );
    let newBasket = [...basketProducts, productId];

    storeBasket(isLoggedIn, newBasket, authUser, setBasketProducts);
  };

  const removeOneProductFromBasket = (productId) => {
    console.log(
      `BASKET UPDATE: Remove product with ID ${productId}. Basket length ${basketProducts.length}`
    );
    let newBasket = [...basketProducts];
    let indexToRemove = basketProducts.indexOf(productId);
    if (indexToRemove !== -1) {
      newBasket.splice(indexToRemove, 1);
    }

    storeBasket(isLoggedIn, newBasket, authUser, setBasketProducts);
  };

  const removeProductFromBasket = (productId) => {
    console.log(
      `BASKET UPDATE: Remove product with ID ${productId}. Basket length ${basketProducts.length}`
    );

    const newBasket = basketProducts.filter((product) => product !== productId);

    storeBasket(isLoggedIn, newBasket, authUser, setBasketProducts);
  };

  const removeAllProductsFromBasket = () => {
    console.log(`BASKET UPDATE: Remove all products!`);
    localStorage.setItem("BASKET", []);

    storeBasket(isLoggedIn, [], authUser, setBasketProducts);
  };

  const getNumberOfProducts = () => {
    return basketProducts.length;
  };

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const data = JSON.parse(localStorage.getItem("BASKET"));
        if (data === null) {
          setBasketProducts([]);
        } else {
          setBasketProducts(data);
        }
        console.log(data);
      } catch (error) {
        console.error(
          "Error fetching basket products from local storage:",
          error
        );
      }
    };

    fetchBasket();
  }, []);

  const value = {
    basketProducts,
    setBasket,
    addProductToBasket,
    removeProductFromBasket,
    getNumberOfProducts,
    removeAllProductsFromBasket,
    removeOneProductFromBasket,
  };

  return (
    <BasketContext.Provider value={value}>
      {props.children}
    </BasketContext.Provider>
  );
}

function storeBasket(isLoggedIn, newBasket, authUser, setBasketProducts) {
  if (isLoggedIn) {
    console.log(`Saving new basket to data base on user ${authUser.username}`);
    updateBasket(newBasket, authUser);
  } else {
    console.log("Saving new basket to local storage");
    localStorage.setItem("BASKET", JSON.stringify(newBasket));
    console.log("Successsfully saved new basked on local storage", newBasket);
  }
  setBasketProducts(newBasket);
}
