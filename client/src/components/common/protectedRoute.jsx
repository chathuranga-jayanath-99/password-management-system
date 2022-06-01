import React, { Component } from "react";
import { Route, Navigate } from "react-router-dom";
import auth from "../../services/authService";

// const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
//     return (
//         // <Route
//         //   {...rest}
//         //   render={(props) => {
//         //     if (!auth.getCurrentUser()) return <Navigate to={{
//         //       pathname: '/login',
//         //       state: { from: props.location }
//         //     }} />;
//         //     return Component ? <Component {...props} /> : render(props);
//         //   }}
//         // />
//         <div>ProtectedRoute</div>
//       );
// }

const ProtectedRoute = ({ children }) => {
  if (!auth.getCurrentUser()) {
    return <Navigate to={{
      pathname: "/login",
      // state: { from: children.location }
    }} />;
  }
  return children;
};

export default ProtectedRoute;
