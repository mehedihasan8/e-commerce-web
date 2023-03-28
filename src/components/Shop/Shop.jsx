import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      " https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="shop-items">
        <h1>shop comming soon : {products.length}</h1>
      </div>
      <div className="order-summery">
        <h2>order</h2>
      </div>
    </div>
  );
};

export default Shop;
