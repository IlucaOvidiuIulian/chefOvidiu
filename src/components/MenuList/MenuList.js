import React from "react";
import Product from "../Product/Product";
import "./MenuList.css";

export default function MenuList({ products }) {
  return (
    <div className="menu-list">
      {products.map((product, id) => {
        return <Product product={product} key={id} />;
      })}
    </div>
  );
}
