/* import des modules */

import Axios from "./caller.service";

///***pour récupérer les datas***///

//articles
let getItems = () => {
  return Axios.get("/api/products");
};

//entêtes
let getHeaders = () => {
  return Axios.get("/api/headerpictures");
};

//tissus
let getFabrics = () => {
  return Axios.get("/api/products/fabrics");
};

//liens
let getLinks = () => {
  return Axios.get("/api/admin/links");
};

//lookbook
let getLookbook = () => {
  return Axios.get("/api/lookbook");
};

///*** pour modifier les datas ***///

//tissus
let deleteFabric = (id) => {
  return Axios.delete("/api/products/fabrics/" + id);
};

let addFabric = (formdata) => {
  return Axios.post("/api/products/fabrics/", {
    body: formdata,
  });
};

//entetes
let deleteHeader = (id) => {
  return Axios.delete("/api/headerpictures/" + id);
};

let addHeader = (formdata) => {
  return Axios.post("/api/headerpictures/", {
    body: formdata,
  });
};

//lookbook
let deleteLookbookPicture = (id) => {
  return Axios.delete("/api/lookbook/" + id);
};

let addLookbookPicture = (formdata) => {
  return Axios.post("/api/lookbook/", {
    body: formdata,
  });
};

//lookbook
let deleteProduct = (id) => {
  return Axios.delete("/api/products/" + id);
};

let updateProduct = (formdata) => {
  return Axios.post("/api/products/", {
    body: formdata,
  });
};

let addProduct = (formdata) => {
  return Axios.post("/api/products/", {
    body: formdata,
  });
};

export const productsService = {
  getItems,
  getHeaders,
  getFabrics,
  getLinks,
  getLookbook,
  deleteFabric,
  addFabric,
  deleteHeader,
  addHeader,
  deleteLookbookPicture,
  addLookbookPicture,
  deleteProduct,
  updateProduct,
  addProduct,
};
