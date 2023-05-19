<template>
  <div>
    <LogoLinks />
    <Mozaic />
    <Container />
  </div>
</template>

<script>
import LogoLinks from "../../components/public/LogoLinks.vue";
import Mozaic from "../../components/public/Mozaic.vue";
import Container from "../../components/public/Container.vue";

import { productsService, userService } from "@/_services";

import { mapMutations } from "vuex";

export default {
  name: "Home",

  data() {
    return {
      products: [],
      headers: [],
      newitems: [],
    };
  },

  mounted() {
    //////**** MISE A JOUR DU STATE***///////

    ///*** partie produits ***/

    //récupération des produits
    productsService
      .getItems()
      .then((res) => {
        this.products = res.data;
        this.updateProducts();
        this.newitems = this.products.filter((item) => {
          return item.isNewItem === true;
        });
        this.updateItems();
      })
      .catch((err) => console.log(err));

    //récupération des entêtes
    productsService
      .getHeaders()
      .then((res) => {
        this.headers = res.data;
        this.updateHeaders();
      })
      .catch((err) => console.log(err));

    //récupération des tissus
    productsService
      .getFabrics()
      .then((res) => {
        this.fabrics = res.data;
        this.updateFabrics();
      })
      .catch((err) => console.log(err));

    //récupération des liens
    productsService
      .getLinks()
      .then((res) => {
        this.links = res.data;
        this.updateLinks();
      })
      .catch((err) => console.log(err));

    //récupération du lookbook
    productsService
      .getLookbook()
      .then((res) => {
        this.lookbook = res.data;
        this.updateLookbook();
      })
      .catch((err) => console.log(err));

    //récupération du panier d'un utilisateur
    userService
      .getCart()
      .then((res) => {
        this.cart = res.data;
        this.updateCart();
      })
      .catch((err) => console.log(err));

    //récupération de la wishlist d'un utilisateur
    userService
      .getWishlist()
      .then((res) => {
        this.wishlist = res.data;
        this.updateWishlist();
      })
      .catch((err) => console.log(err));

    ///*** partie admin ***/

    //récupération des utilisateurs
    userService
      .getAllUsers()
      .then((res) => {
        this.users = res.data;
        this.updateUsers();
      })
      .catch((err) => console.log(err));
  },
  methods: {
    ...mapMutations([
      "changeProducts",
      "changeHeaders",
      "changeItems",
      "changeFabrics",
      "changeLinks",
      "changeLookbook",
      "changeUsers",
      "changeCart",
      "changeWishlist",
    ]),
    updateLinks() {
      this.changeLinks(this.links);
    },
    updateProducts() {
      this.changeProducts(this.products);
    },
    updateHeaders() {
      this.changeHeaders(this.headers);
    },
    updateFabrics() {
      this.changeFabrics(this.fabrics);
    },
    updateItems() {
      this.changeItems(this.newitems);
    },
    updateLookbook() {
      this.changeLookbook(this.lookbook);
    },
    updateUsers() {
      this.changeUsers(this.users);
    },
    updateCart() {
      this.changeCart(this.cart);
    },
    updateWishlist() {
      this.changeWishlist(this.wishlist);
    },
  },

  components: {
    LogoLinks,
    Mozaic,
    Container,
  },
};
</script>
