// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5001/api", // your backend base URL
//   withCredentials: false, // true if you are using cookies for auth
// });

// export default api;


import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/api",
});

// Define helper methods for cleaner usage
const api = {
  login: (data) => instance.post("/auth/login", data),
  register: (data) => instance.post("/auth/register", data),
  getProducts: () => instance.get("/products"),
  addProduct: (data, token) =>
    instance.post("/products", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  deleteProduct: (id, token) =>
    instance.delete(`/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  placeOrder: (data, token) =>
    instance.post("/orders", data, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  getOrders: (token) =>
    instance.get("/orders/my", {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export default api;
