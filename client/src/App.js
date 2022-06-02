import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/login/Login";
import Logout from "./components/auth/Logout";
import Register from "./components/auth/register/Register";
import ResetPassword from "./components/auth/resetpassword/ResetPassword";
import NoPage from "./components/nopage/NoPage";
import Welcome from "./components/welcome/Welcome";
import PasswordManager from "./components/passwordmanager/PasswordManager";
import { AuthProvider, RequireAuth} from "./context/AuthProvider";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="register" element={<Register />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="passwordmanager" element={<RequireAuth><PasswordManager /></RequireAuth>} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    
  );
}

export default App;
