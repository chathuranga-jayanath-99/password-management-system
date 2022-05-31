import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import ResetPassword from "./components/auth/resetpassword/ResetPassword";
import NoPage from "./components/nopage/NoPage";
import Welcome from "./components/welcome/Welcome";
import PasswordManager from "./components/passwordmanager/PasswordManager";
import { AuthProvider, RequireAuth} from "./context/AuthProvider";

function App() {
  return (
    
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="passwordmanager" element={<RequireAuth><PasswordManager /></RequireAuth>} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    
  );
}

export default App;
