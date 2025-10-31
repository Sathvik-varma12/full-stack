import React, { useState } from "react";
import ProductList from "./ProductList";
import  api  from "../api";

const CustomerDashboard = () => {
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");

  const handleAddToCart = (product) => setCart([...cart, product]);

  const placeOrder = async () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const res = await api.placeOrder({ items: cart.map(p => ({ productId: p._id, quantity: 1 })), shippingAddress: "Default Address", total }, token);
    if (res.ok) {
      alert("Order placed successfully!");
      setCart([]);
    } else alert("Order failed");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Customer Dashboard</h2>
      <ProductList onAddToCart={handleAddToCart} />
      <hr />
      <h3>Cart ({cart.length})</h3>
      <ul>
        {cart.map((c, i) => (
          <li key={i}>{c.title} - ₹{c.price}</li>
        ))}
      </ul>
      {cart.length > 0 && <button onClick={placeOrder}>Place Order</button>}
    </div>
  );
};

export default CustomerDashboard;
