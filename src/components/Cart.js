// src/components/Cart.js

import React from 'react';
import './Cart.css'; // Add custom styles here

const Cart = ({ cartItems, removeFromCart, placeOrder }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button className="remove" onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total-amount">
        <span>Total Amount:</span>
        <span>{cartItems.reduce((total, item) => total + item.price, 0)}</span>
      </div>
      <button className="place-order-button" onClick={() => placeOrder(cartItems)}>Place Order</button>
    </div>
  );
};

export default Cart;
