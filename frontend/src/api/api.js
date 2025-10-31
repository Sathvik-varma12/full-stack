const API_BASE = "http://localhost:5001";

export const api = {
  register: (data) =>
    fetch(`${API_BASE}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  login: (data) =>
    fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  getProducts: () => fetch(`${API_BASE}/api/products`),

  addProduct: (data, token) =>
    fetch(`${API_BASE}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }),

  deleteProduct: (id, token) =>
    fetch(`${API_BASE}/api/products/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }),

  placeOrder: (data, token) =>
    fetch(`${API_BASE}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }),

  getMyOrders: (token) =>
    fetch(`${API_BASE}/api/orders/my`, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  getAllOrders: (token) =>
    fetch(`${API_BASE}/api/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};
