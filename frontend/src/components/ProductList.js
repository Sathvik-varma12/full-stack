    import React, { useEffect, useState } from "react";
import  api  from "../api";

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts()
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Products</h3>
      {products.map((p) => (
        <div key={p._id} style={{ border: "1px solid #ccc", margin: "10px auto", width: 300, padding: 10 }}>
          <h4>{p.title}</h4>
          <p>₹{p.price}</p>
          <button onClick={() => onAddToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
