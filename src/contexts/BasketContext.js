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
    setBasketProducts([...basketProducts, product]);
    if (isLoggedIn) {
      updateBasketToDatabase(basketProducts, authUser);
    } else {
      localStorage.setItem("BASKET", JSON.stringify(basketProducts));
    }
  };

  const removeProductFromBasket = (index) => {
    const updateBasket = [...basketProducts];
    updateBasket.splice(index, 1);
    setBasketProducts(updateBasket);
    if (isLoggedIn) {
      updateBasketToDatabase(basketProducts, authUser);
    } else {
      localStorage.setItem("BASKET", JSON.stringify(basketProducts));
    }
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
  };

  return (
    <BasketContext.Provider value={value}>
      {props.children}
    </BasketContext.Provider>
  );
}

function updateBasketToDatabase(newBasket, authUser) {
  fetch(`http://localhost:4000/users/${authUser.id}`, {
    method: "PUT",
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
