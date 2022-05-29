import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/auth";
const tokenKey = "token";

export async function loginUser(email, password) {
  const { data: jwt } = await http.post(apiEndpoint + "/user", {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
}

export function loginUserWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logoutUser() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  loginUser,
  loginUserWithJwt,
  logoutUser,
  getCurrentUser,
};
