import React, { useState } from "react";
import  api  from "../api";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if(!email || !password){
      alert("enter email id and password")
      return
    }
    const res = await api.login({ email, password });
    console.log(res)
    const data = await res.data;
    if (res.status === 200) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      onLogin(data.user);
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
