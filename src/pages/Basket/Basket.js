import React, { useState } from "react";
import "./Basket.css";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import Logo from "../../components/Logo/Logo";
import { useBasket } from "../../contexts/BasketContext";
export default function Basket() {
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleOrderForm = () => {
    setShowOrderForm(true);
  };
  return (
    <>
      <div className="basket">
        <div className="basket-products">
          <BasketProduct />
        </div>

        <div className="basket-summary">
          <span>TOTAL:</span>
          <div className="basket-actions">
            <button>STERGE TOATA COMANDA</button>
            <button onClick={handleOrderForm}>FINALIZEAZA COMANDA</button>
          </div>
        </div>
      </div>
      {showOrderForm && (
        <div className="overlay">
          <div className="order-form">
            <Logo width={300} />
            <form>
              <input type="text" placeholder="Nume Prenume" value="" required />
              <input type="text" placeholder="Adresa" required />
              <input
                type="number"
                placeholder="Nr telefon"
                maxLength="10"
                required
              />
              <input
                type="text"
                placeholder="Nr card"
                maxLength="19"
                required
              />

              <input type="number" placeholder="cvv" required />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
