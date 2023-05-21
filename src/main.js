import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

//elements, getters et mutations du state
const store = createStore({
  state: {
    user_sessionID: "",
    visitor_sessionID: "",
    currency: "xpf",
    currconv: 1,
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
    cart: null,
    cartLength: "",
    wishlist: null,
    wishLength: "",
  },
  getters: {
    getUserSessionID(state) {
      return state.user_sessionID;
    },
    getVisitorSessionID(state) {
      return state.visitor_sessionID;
    },
    getCurrency(state) {
      return state.currency;
    },
    getCurrconv(state) {
      return state.currconv;
    },
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
    getCart(state) {
      return state.cart;
    },
    getCartLength(state) {
      return state.cartLength;
    },
    getWishlist(state) {
      return state.wishlist;
    },
    getWishLength(state) {
      return state.wishLength;
    },
  },
  mutations: {
    changeUserSessionID(state, value) {
      state.user_sessionID = value;
    },
    changeVisitorSessionID(state, value) {
      state.visitor_sessionID = value;
    },
    changeCurrconv(state, value) {
      state.currconv = value;
    },
    changeCurrency(state, value) {
      state.currency = value;
    },
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
    changeCart(state, value) {
      state.cart = value;
    },
    changeCartLength(state, value) {
      state.cartLength = value;
    },
    changeWishlist(state, value) {
      state.wishlist = value;
    },
    changeWishLength(state, value) {
      state.wishLength = value;
    },
  },
});

app.use(router);
app.use(store);

app.mount("#app");
