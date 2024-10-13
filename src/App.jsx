// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage";
import AdminLogin from "./auth/AdminLogin";
import UserLogin from "./auth/UserLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin-login" element={<AdminLogin/>} />
          <Route path="/user-login" element={<UserLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
