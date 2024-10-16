import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin";
import UserTypeSelection from "./UserTypeSelection";
import CreateAdmin from "./CreateAdmin";
import CreateUser from "./CreateUser";
import ForgotUserPassword from "./ForgotUserPassword";
import ForgotAdminPassword from "./ForgotAdminPassword";
import ResetAdminPassword from "./ResetAdminPassword";
import ResetUserPassword from "./ResetUserPassword";

const Auth = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserTypeSelection />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/forgot-user-password" element={<ForgotUserPassword />} />
        <Route
          path="/forgot-admin-password"
          element={<ForgotAdminPassword />}
        />
        <Route path="reset-admin-password" element={<ResetAdminPassword />} />
        <Route path="reset-user-password" element={<ResetUserPassword />} />
      </Routes>
    </div>
  );
};

export default Auth;
