import React, { useState, useEffect } from "react";
import "./Basket.css";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import { useBasket } from "../../contexts/BasketContext";
import { useProduct } from "../../contexts/ProductContext";
import OrderForm from "../../components/OrderForm/OrderForm";

export default function Basket() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [mergedBasketProducts, setMergedBasketProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { basketProducts, removeAllProductsFromBasket, removeProductFromBasket, addProductToBasket, removeOneProductFromBasket } = useBasket();
  const { products } = useProduct();

  const handleOrderForm = () => {
    setShowOrderForm(true);
  };

  useEffect(() => {
    let countedBasketProducts = [];

    // Created counted array
    countedBasketProducts = basketProducts.map(product => {
      return {
        product: product,
        numberOfProducts: basketProducts.filter(id => product === id).length
      }
    })
    console.log("Basket after counting same products", countedBasketProducts);

    // Eliminating duplicate values
    for (let i = 0; i < countedBasketProducts.length; i++) {
      for (let y = i + 1; y < countedBasketProducts.length; y++) {
        if (countedBasketProducts[i].product === countedBasketProducts[y].product) {
          countedBasketProducts.splice(i, 1);
          i--;
          break;
        }
      }
    }
    console.log("Basket after eliminating reduntant objects", countedBasketProducts);

    // Merging product with basket
    let newBasket = [];
    for (let i = 0; i < countedBasketProducts.length; i++) {
      for (let y = 0; y < products.length; y++) {
        if (products[y].id === countedBasketProducts[i].product) {
          newBasket.push({
            ...products[y],
            numberOfProducts: countedBasketProducts[i].numberOfProducts
          });
          break;
        }
      }
    }
    console.log("Basket after merging basketProducts id with products", newBasket);

    setMergedBasketProducts(newBasket);

    let sum = 0;
    newBasket.forEach(product => {
      sum = sum + product.numberOfProducts * product.price;
    })
    setTotalPrice(sum.toFixed(2));

  }, [basketProducts, products])

  return (
    <>
      <div className="basket">
        <div className="basket-products">
          {mergedBasketProducts?.map((basketProduct, i) => {
            return <BasketProduct product={basketProduct}
              removeProductFromBasket={removeProductFromBasket}
              addProductToBasket={addProductToBasket}
              removeOneProductFromBasket={removeOneProductFromBasket}
              key={i} />;
          })}
        </div>

        <div className="basket-summary">
          <span>TOTAL: {totalPrice} Lei </span>
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