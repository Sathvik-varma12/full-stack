import React, { useState } from "react";
import  api  from "../api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = async () => {
    const {user, email, password} = form
    if(!user || !email || !password){
      alert("Please enter the values properly dumboo")
      return
    }
    console.log(form)
    const res = await api.register(form);
    console.log(res)
    const data = await res.data;
    if (res.status === 200) alert("Registered successfully! Please login.");
    else alert(data.message);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} /><br /><br />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} /><br /><br />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} /><br /><br />
      <button type="submit" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
