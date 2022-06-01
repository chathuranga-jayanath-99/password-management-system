import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/auth/login/Login";
import Logout from "./components/auth/Logout";
import Register from "./components/auth/register/Register";
import ResetPassword from "./components/auth/resetpassword/ResetPassword";
import NoPage from "./components/nopage/NoPage";
import Welcome from "./components/welcome/Welcome";
import PasswordManager from "./components/passwordmanager/PasswordManager";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    console.log("user", user);
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <Router>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route
            path="passwordmanager"
            element={
              <ProtectedRoute user={user} >
                <PasswordManager user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
