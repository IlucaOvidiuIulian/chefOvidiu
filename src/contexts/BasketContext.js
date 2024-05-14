import React, { useState, useContext, useEffect } from "react";

import { useAuth } from "./AuthContext";

const BasketContext = React.createContext();

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider(props) {
  const [basketProducts, setBasketProducts] = useState([]);
  const { authUser, isLoggedIn } = useAuth();

  const addProductToBasket = (product) => {
    console.log(
      `Adding product with id ${product} and the name ${product} to basket`
    );
    setBasketProducts([...basketProducts, product]);
    let basketProductsToSaveInDataBase = basketProducts;
    basketProductsToSaveInDataBase.push(product);

    if (isLoggedIn) {
      updateBasketToDatabase(basketProductsToSaveInDataBase, authUser);
    } else {
      localStorage.setItem(
        "BASKET",
        JSON.stringify(basketProductsToSaveInDataBase)
      );
    }
  };

  const removeProductFromBasket = (index) => {
    const updateBasket = [...basketProducts];
    updateBasket.splice(index, 1);
    setBasketProducts(updateBasket);
    let basketProductsToSaveInDataBase = basketProducts;
    basketProductsToSaveInDataBase.splice(index);

    if (isLoggedIn) {
      updateBasketToDatabase(basketProductsToSaveInDataBase, authUser);
    } else {
      localStorage.setItem(
        "BASKET",
        JSON.stringify(basketProductsToSaveInDataBase)
      );
    }
  };
  const removeAllProductsFromBasket = () => {
    setBasketProducts([]);
    localStorage.setItem("BASKET", []);
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
    addProductToBasket,
    removeProductFromBasket,
    getNumberOfProducts,
    removeAllProductsFromBasket,
  };

  return (
    <BasketContext.Provider value={value}>
      {props.children}
    </BasketContext.Provider>
  );
}

function updateBasketToDatabase(newBasket, authUser) {
  fetch(`http://localhost:4000/users/${authUser.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify({ basket: newBasket }),
  })
    .then((res) => {
      if (!res.ok) {
        // error coming back from server
        throw Error("could not update the data for that resource");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data, "Update basket successfully");
      return data;
    });
}
