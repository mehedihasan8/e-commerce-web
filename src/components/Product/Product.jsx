import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const handelAddToCard = props.handelAddToCard;

  return (
    <div className="single-product">
      <img src={img} alt="" />
      <div className="single-product-item">
        <h3 className="product-name">{name}</h3>
        <h4 className="product-price">Price : ${price}</h4>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button
        onClick={() => handelAddToCard(props.product)}
        className="btn-card"
      >
        Add to Card <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
