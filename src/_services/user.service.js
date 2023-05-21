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
let getCart = (id) => {
  return Axios.get("/api/cart/" + id);
};

//supprimer le panier d'un utilisateur
let deleteCart = (id) => {
  return Axios.delete("/api/cart/" + id);
};

//récupérer la wishlist d'un utilisateur
let getWishlist = (id) => {
  return Axios.get("/api/wishlist/" + id);
};

//supprimer la wishlist d'un utilisateur
let deleteWishlist = (id) => {
  return Axios.delete("/api/wishlist/" + id);
};

export const userService = {
  getAllUsers,
  findUser,
  deleteUser,
  getCart,
  deleteCart,
  getWishlist,
  deleteWishlist,
};
