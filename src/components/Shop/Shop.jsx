import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Card from "../Card/Card";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storadCard = getShoppingCart();
    const saveCard = [];
    // step 1 : get id
    for (const id in storadCard) {
      // step 2 : get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step 3 : get quantity of the product
        const quantity = storadCard[id];
        addedProduct.quantity = quantity;
        // step 4 : add the addedProduct to the save card
        saveCard.push(addedProduct);
      }
    }
    // step 5 : save the localStorage
    setCard(saveCard);
  }, [products]);

  const handelAddToCard = (product) => {
    const newCard = [...card, product];
    setCard(newCard);
    addToDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handelAddToCard={handelAddToCard}
          ></Product>
        ))}
      </div>
      <div className="card-container">
        <Card card={card}></Card>
      </div>
    </div>
  );
};

export default Shop;
