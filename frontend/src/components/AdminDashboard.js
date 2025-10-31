import React, { useEffect, useState } from "react";
import  api  from "../api";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", price: "" });
  const token = localStorage.getItem("token");

  useEffect(() => {
    api.getProducts().then(res => res.json()).then(setProducts);
    api.getAllOrders(token).then(res => res.json()).then(setOrders);
  }, [token]);

  const addProduct = async () => {
    await api.addProduct(newProduct, token);
    const refreshed = await api.getProducts();
    setProducts(await refreshed.json());
  };

  const deleteProduct = async (id) => {
    await api.deleteProduct(id, token);
    setProducts(products.filter(p => p._id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 30 }}>
      <h2>Admin Dashboard</h2>

      <h3>Add Product</h3>
      <input placeholder="Title" onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} />
      <input placeholder="Price" type="number" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
      <button onClick={addProduct}>Add</button>

      <h3>Product List</h3>
      {products.map((p) => (
        <div key={p._id}>
          {p.title} - ₹{p.price} <button onClick={() => deleteProduct(p._id)}>Delete</button>
        </div>
      ))}

      <h3>Orders</h3>
      {orders.map((o) => (
        <div key={o._id}>
          <strong>{o.userId.name}</strong> — ₹{o.total} ({o.status})
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
