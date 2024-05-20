import React, { useState } from "react";
import "./Basket.css";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import { useBasket } from "../../contexts/BasketContext";
import OrderForm from "../../components/OrderForm/OrderForm";
export default function Basket() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const { basketProducts, removeAllProductsFromBasket } = useBasket();

  const handleOrderForm = () => {
    setShowOrderForm(true);
  };

  return (
    <>
      <div className="basket">
        <div className="basket-products">
          {basketProducts?.map((basketProduct) => {
            return <BasketProduct product={basketProduct} />;
          })}
        </div>

        <div className="basket-summary">
          <span>TOTAL:</span>
          <div className="basket-actions">
            <button onClick={removeAllProductsFromBasket}>
              STERGE TOATA COMANDA
            </button>
            <button onClick={handleOrderForm}>FINALIZEAZA COMANDA</button>
          </div>
        </div>
      </div>
      {showOrderForm && <OrderForm />}
    </>
  );
}
