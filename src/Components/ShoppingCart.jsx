import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "bootstrap";
import "../CSS/ShoppingCart.css";
import StateContext from "../context/context";
import OrderModel from "./OrderModel";
import UILoader from "./UILoader";
import { useHistory } from "react-router-dom";
function ShoppingCart() {
  const { Products, handleProducts, handleTotalSum, totalSum } =
    useContext(StateContext);
  const history = useHistory();
  const [showLoader, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const totalSum = Products.reduce((sum, p) => sum + p.price * p.count, 0);
    handleTotalSum(totalSum);
  }, [Products]);

  //handleClicks
  var handleClickProducts = (value, id) => {
    var updatedProducts = [...Products].map((p) => {
      if (p.Id == id) {
        p.count = value;
        return p;
      } else return p;
    });
    handleProducts(updatedProducts);
  };
  var handleRemove = (id) => {
    var updatedProducts = [...Products].map((p) => {
      if (p.Id == id) {
        p.count = 0;
        return p;
      } else return p;
    });
    handleProducts(updatedProducts);
  };
  var handleOrder = () => {
    handleShow();
    setTimeout(() => {
      handleClose();
      alert("Order Successfull");
      history.push("/Home");
    }, 5000);
  };
  return !showLoader ? (
    <div>
      <h1>Shopping Cart</h1>
      {Products.filter((p) => p.count > 0).length > 0 ? (
        <div
          className="shopping-cart"
          style={{ marginTop: "10px", marginRight: "30px", marginLeft: "20px" }}
        >
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>
          <div>
            <ShoppingCartItems
              Products={Products}
              handleProducts={handleClickProducts}
              handleRemove={handleRemove}
            />
          </div>
          <BottomCart
            totalSum={totalSum}
            Tax={totalSum * 0.05}
            ShippingCharges={10}
          />
          <button className="checkout" onClick={handleOrder}>
            Order
          </button>
        </div>
      ) : (
        <h5>Your cart is Empty</h5>
      )}
    </div>
  ) : (
    <UILoader />
  );
}

var ShoppingCartItems = ({ Products, handleProducts, handleRemove }) => {
  return Products.filter((p) => p.count > 0).map((p) => (
    <div className="product" key={p.Id}>
      <div className="product-image">
        <img alt="pic" src={p.image} />
      </div>
      <div className="product-details">
        <div className="product-title">
          <strong>{p.title}</strong>
        </div>
        <p className="product-description">{p.Description}</p>
      </div>
      <div className="product-price">{p.price}</div>
      <div className="product-quantity">
        <input
          type="number"
          value={p.count}
          id={p.Id}
          min="1"
          onChange={(e) => handleProducts(e.target.value, e.target.id)}
        />
      </div>
      <div className="product-removal">
        <button
          className="remove-product"
          id={p.Id}
          onClick={(e) => handleRemove(e.target.id)}
        >
          Remove
        </button>
      </div>
      <div className="product-line-price">{getPrice(p.count * p.price)}</div>
    </div>
  ));
};

var BottomCart = ({ totalSum, Tax, ShippingCharges }) => {
  return (
    <div className="totals">
      <div className="totals-item">
        <label>Subtotal</label>
        {getPrice(totalSum)}
      </div>
      <div className="totals-item">
        <label>Tax (5%)</label>
        {getPrice(Tax)}
      </div>
      <div className="totals-item">
        <label>Shipping</label>
        {getPrice(ShippingCharges)}
      </div>

      <div className="totals-item ">
        <label>Grand Total</label>
        {getPrice(totalSum + Tax + ShippingCharges)}
      </div>
    </div>
  );
};
var getPrice = (price) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <span style={{ top: "-5rem", fontSize: "12px" }}>$</span>
      <h6> {price}</h6>
    </div>
  );
};
export default ShoppingCart;
