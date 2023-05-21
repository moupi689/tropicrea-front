/* import des modules */

import Axios from "./caller.service";

//services pour la connexion

let loginAdmin = (credentials) => {
  return Axios.post("/api/admin/login", credentials);
};

let loginUser = (credentials) => {
  return Axios.post("/api/users/login", credentials);
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token; //transforme un string en booleen. Si pas de token !!>false, sinon true
};

let logoutAdmin = () => {
  localStorage.removeItem("token");
};

let logoutUser = () => {
  localStorage.removeItem("tropicrea_user_session");
};

export const accountService = {
  loginAdmin,
  loginUser,
  saveToken,
  isLogged,
  logoutAdmin,
  logoutUser,
};
