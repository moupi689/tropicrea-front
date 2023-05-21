<template>
  <div>
    <HeaderLinks />
    <Logo />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import HeaderLinks from "../../components/public/HeaderLinks.vue";
import Logo from "../../components/public/Logo.vue";
import Footer from "../../components/public/Footer.vue";
import { productsService, userService, cookieService } from "@/_services";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "PublicLayout",

  data() {
    return {
      user_id: "",
      visitor_id: "",
      cartLength: "0",
      wishLength: "0",
      visitor_sessionID: "",
      id: "",
      products: [],
      headers: [],
      newitems: [],
      cookieName: "tropicrea_session",
    };
  },

  computed: {
    ...mapGetters([
      "getUserSessionID",
      "getVisitorSessionID",
      "getCart",
      "getWishlist",
    ]),
  },

  mounted() {
    //////**** RECUPERATION DU COOKIE DE SESSION***///////

    cookieService.getCookie(this.cookieName);

    //////**** MISE A JOUR DU STATE***///////

    ///*** partie sessionID ***/
    this.visitor_sessionID = localStorage.getItem("tropicrea_visitor_session");
    this.changeVisitorSessionID(this.visitor_sessionID);

    ///*** partie produits ***/

    //récupération des produits
    productsService
      .getItems()
      .then((res) => {
        this.products = res.data;
        this.changeProducts(this.products);
        this.newitems = this.products.filter((item) => {
          return item.isNewItem === true;
        });
        this.changeItems(this.newitems);
      })
      .catch((err) => console.log(err));

    //récupération des entêtes
    productsService
      .getHeaders()
      .then((res) => {
        this.headers = res.data;
        this.changeHeaders(this.headers);
      })
      .catch((err) => console.log(err));

    //récupération des tissus
    productsService
      .getFabrics()
      .then((res) => {
        this.fabrics = res.data;
        this.changeFabrics(this.fabrics);
      })
      .catch((err) => console.log(err));

    //récupération des liens
    productsService
      .getLinks()
      .then((res) => {
        this.links = res.data;
        this.changeLinks(this.links);
      })
      .catch((err) => console.log(err));

    //récupération du lookbook
    productsService
      .getLookbook()
      .then((res) => {
        this.lookbook = res.data;
        this.changeLookbook(this.lookbook);
      })
      .catch((err) => console.log(err));

    ///*** partie admin ***/

    //récupération des utilisateurs
    userService
      .getAllUsers()
      .then((res) => {
        this.users = res.data;
        this.changeUsers(this.users);
      })
      .catch((err) => console.log(err));

    //récupération du panier et de la wishlist du visiteur si existe
    // récupérartion des id
    this.visitor_id = this.getVisitorSessionID;
    console.log(this.visitor);
    this.user_id = this.getUserSessionID;
    console.log(this.user_id);

    //si utilisateur enregistré, on récupère son panier/wishlist. Sinon, on récupère celui du visiteur.
    if (this.user_id) {
      this.id = this.user_id;
    } else {
      this.id = this.visitor_id;
    }

    console.log(this.id);
    //récupération panier et wishlist
    userService
      .getCart(this.id)
      .then((res) => {
        this.cart = res.data;
        console.log(res.data);
        this.changeCart(this.cart);
        if (this.cart != null) {
          this.cartLength = this.getCart.cart.items.length;
          this.changeCartLength(this.cartLength);
        } else {
          this.wishlistLength = 0;
        }
      })
      .catch((err) => console.log(err));

    userService
      .getWishlist(this.id)
      .then((res) => {
        this.wishlist = res.data;
        console.log(res.data);
        this.changeWishlist(this.wishlist);
        if (this.wishlist != null) {
          this.wishLength = this.getWishlist.wish.items.length;
          this.changeWishLength(this.wishLength);
        } else {
          this.wishLength = 0;
        }
      })
      .catch((err) => console.log(err));
  },

  methods: {
    ...mapMutations([
      "changeVisitorSessionID",
      "changeProducts",
      "changeHeaders",
      "changeItems",
      "changeFabrics",
      "changeLinks",
      "changeLookbook",
      "changeUsers",
      "changeCart",
      "changeCartLength",
      "changeWishlist",
      "changeWishLength",
    ]),
  },

  components: {
    HeaderLinks,
    Logo,
    Footer,
  },
};
</script>
