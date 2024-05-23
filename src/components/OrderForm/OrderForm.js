import React from "react";
import Logo from "../Logo/Logo";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import createOrder from "../../apis/OrderApis";
import { useState } from "react";

export default function OrderForm() {
  const { isLoggedIn, authUser } = useAuth();
  const { basketProducts, removeAllProductsFromBasket } = useBasket();

  const [orderForm, setOrderForm] = useState({
    numePrenume: "",
    address: "",
    phoneNumber: "",
    cardNumber: "",
    cardOwnerName: "",
    expireDate: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOrderForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const newOrder = {
      ...orderForm,
      ordered_products: basketProducts,
      creation_date: new Date().toISOString(),
    };
    console.log("NEW ORDER Ready to be delivered: ", newOrder);

    createOrder(newOrder, authUser, removeAllProductsFromBasket);
  }

  return (
    <div className="overlay">
      <div className="order-form">
        <Logo width={300} />
        <form onSubmit={handleSubmit}>
          {!isLoggedIn && (
            <input
              type="text"
              name="numePrenume"
              onChange={handleChange}
              placeholder="Nume Prenume"
              maxLength="150"
              required
            />
          )}
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="Adresa"
            maxLength="150"
            required
          />
          <input
            type="number"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Nr telefon"
            maxLength="10"
            required
          />
          <label> Card </label>
          <input
            type="number"
            name="cardNumber"
            onChange={handleChange}
            placeholder="Numar card"
            maxLength="19"
            required
          />
          <input
            type="number"
            name="cardOwnerName"
            onChange={handleChange}
            placeholder="Nume titular"
            maxLength="40"
            required
          />
          <input
            type="text"
            name="expireDate"
            onChange={handleChange}
            placeholder="Data expirare"
            maxLength="5"
            required
          />
          <input
            type="number"
            name="cvc"
            onChange={handleChange}
            placeholder="Cvc"
            maxLength="3"
            required
          />
          <button type="submit"> Submit </button>
          <button> Cancel </button>
        </form>
      </div>
    </div>
  );
}
