import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/passwords";

function passwordUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPasswords() {
  return http.get(apiEndpoint);
}

export function getPassword(passwordId) {
  return http.get(passwordUrl(passwordId));
}

// password : {"userId": 1, "title": "facebook", "password": "12345"}
export function savePassword(password) {
  if (password.id) {
    const body = { ...password };
    delete body.id;
    return http.put(passwordUrl(password.id), body);
  }
  return http.post(apiEndpoint, password);
}

export function viewPassword(passwordId) {
  return http.get(`${apiEndpoint}/view-password/${passwordId}`);
}
