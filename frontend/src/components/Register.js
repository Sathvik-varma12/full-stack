import React, { useState } from "react";
import api from "../api";

const Register = ({ onSwitch }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = async () => {
    const { name, email, password } = form;
    if (!name || !email || !password) {
      alert("Please enter all details");
      return;
    }

    try {
      const res = await api.register(form);
      if (res.status === 200) {
        alert("Registered successfully! Please login.");
        onSwitch(); // Switch back to login screen
      }
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} /><br /><br />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} /><br /><br />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} /><br /><br />
      <button onClick={handleRegister}>Register</button>
      <br /><br />
      <p>
        Already have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={onSwitch}
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
