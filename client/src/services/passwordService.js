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

export function savePassword(password) {
  console.log(password);
  if (password._id) {
    const body = { ...password };
    delete body._id;
    return http.put(passwordUrl(password._id), body);
  }
  return http.post(apiEndpoint, password);
}
