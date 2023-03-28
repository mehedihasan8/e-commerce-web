import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, id, name, price, seller, ratings } = props.product;
  return (
    <div className="single-product">
      <img src={img} alt="" />
      <div className="single-product-item">
        <h3 className="product-name">{name}</h3>
        <h4 className="product-price">Price : ${price}</h4>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button className="btn-card">Add to Card</button>
    </div>
  );
};

export default Product;
