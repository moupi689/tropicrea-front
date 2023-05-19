import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

//elements, getters et mutations du state
const store = createStore({
  state: {
    lookbook: [],
    links: [],
    products: [],
    headers: [],
    fabrics: [],
    headerpicture: "./uploads/entetes/image-1669715738247-661147361.webp",
    itemsbycategory: [],
    item: [],
    category: "nouveautes",
    users: [],
  },
  getters: {
    getLookbook(state) {
      return state.lookbook;
    },
    getLinks(state) {
      return state.links;
    },
    getProducts(state) {
      return state.products;
    },
    getHeaders(state) {
      return state.headers;
    },
    getFabrics(state) {
      return state.fabrics;
    },
    getItemsByCategory(state) {
      return state.itemsbycategory;
    },
    getItem(state) {
      return state.item;
    },
    getHeaderPicture(state) {
      return state.headerpicture;
    },
    getCategory(state) {
      return state.category;
    },
    getLookbook(state) {
      return state.lookbook;
    },
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    changeLinks(state, value) {
      state.links = value;
    },
    changeCategory(state, value) {
      state.category = value;
    },
    changeProducts(state, value) {
      state.products = value;
    },
    changeItems(state, value) {
      state.itemsbycategory = value;
    },
    changeItem(state, value) {
      state.item = value;
    },
    changeHeaders(state, value) {
      state.headers = value;
    },
    changeFabrics(state, value) {
      state.fabrics = value;
    },
    changeHeaderPicture(state, value) {
      state.headerpicture = value;
    },
    changeLookbook(state, value) {
      state.lookbook = value;
    },
    changeUsers(state, value) {
      state.users = value;
    },
  },
});

app.use(router);
app.use(store);

app.mount("#app");
