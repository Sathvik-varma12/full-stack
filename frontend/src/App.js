import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import CustomerDashboard from "./components/CustomerDashboard";
import "./App.css"; // ✅ Import the CSS file

function App() {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [showRegister, setShowRegister] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  };

  if (!user) {
    return (
      <div className="auth-container">
        {!showRegister ? (
          <div className="auth-box">
            <Login onLogin={setUser} />
            <p className="switch-text">
              Don't have an account?{" "}
              <span className="switch-link" onClick={() => setShowRegister(true)}>
                Register now
              </span>
            </p>
          </div>
        ) : (
          <div className="auth-box">
            <Register />
            <p className="switch-text">
              Already have an account?{" "}
              <span className="switch-link" onClick={() => setShowRegister(false)}>
                Login here
              </span>
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
      {user.role === "admin" ? <AdminDashboard /> : <CustomerDashboard />}
    </div>
  );
}

export default App;
