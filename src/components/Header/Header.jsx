import React from "react";
import "./Header.css";
import log from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={log} alt="" />
      <div className="header-items">
        <a href="/shop">Shop</a>
        <a href="/order-review">Order</a>
        <a href="/manage-inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
