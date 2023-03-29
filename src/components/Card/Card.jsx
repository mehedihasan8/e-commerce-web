import React from "react";
import "./Card.css";

const Card = (props) => {
  const card = props.card;
  console.log(card);

  let totalPrice = 0;
  let totalShiping = 0;

  for (const product of card) {
    totalPrice = totalPrice + product.price;
    totalShiping = totalShiping + product.shipping;
  }
  const tax = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + totalShiping + tax;
  return (
    <div className="card">
      <h2>Order Summary</h2>
      <h4>Select items : {card.length}</h4>
      <h4>Total Price : ${totalPrice} </h4>
      <h4>Shipping Charge : ${totalShiping} </h4>
      <h4>Tax : ${tax} </h4>
      <h3>Grand Total : ${grandTotal} </h3>
    </div>
  );
};

export default Card;
