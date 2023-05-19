/* import des modules */

import Axios from "./caller.service";

//récupérer tous les utilisateurs
let getAllUsers = () => {
  return Axios.get("/api/admin/users");
};

//récupérer un utilisateur par son email
let findUser = (id) => {
  return Axios.get("/api/admin/users/" + id);
};

//supprimer un utilisateur
let deleteUser = (id) => {
  return Axios.delete("/api/admin/users/" + id);
};

//récupérer le panier d'un utilisateur
let getCart = () => {
  return Axios.get("/api/cart");
};

//récupérer le panier d'un utilisateur
let getWishlist = () => {
  return Axios.get("/api/cart");
};

export const userService = {
  getAllUsers,
  findUser,
  deleteUser,
  getCart,
  getWishlist,
};
