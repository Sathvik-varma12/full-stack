import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
// import AdminDashboard from "./components/AdminDashboard";
// import CustomerDashboard from "./components/CustomerDashboard";

function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));

  if (!user)
    return (
      <div>
        <Login onLogin={setUser} />
        <Register />
      </div>
    );

  return (
    <div>
      {/* <button onClick={() => { localStorage.clear(); setUser(null); }}>Logout</button>
      {user.role === "admin" ? <AdminDashboard /> : <CustomerDashboard />} */}
      <div>Helloo!!! Login successful</div>
    </div>
  );
}

export default App;
