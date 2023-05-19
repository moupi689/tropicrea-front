<template>
  <div class="header__links">
    <router-link to="/signin"
      ><p class="connection-icon active" id="toConnect">
        Connexion
      </p></router-link
    >
    <p class="connection-icon" id="logout">Ia Orana !</p>

    <!--recherche d'un produit par son nom-->
    <div class="searchbar">
      <i class="fa-solid fa-magnifying-glass" id="search-icon"></i>
      <form id="searchProduct-form" @submit.prevent="">
        <a href="#articles" id="scrollanchor"></a>
        <input
          @change="this.updateItem"
          type="search"
          placeholder="nom de l'article"
          id="searchProduct-input"
        />
        <div v-if="notfound" id="searchProduct-error">article non trouvé !</div>
      </form>

      <!--lien vers la wishlist et le panier-->
    </div>
    <div class="postit-container">
      <i class="fa-regular fa-heart" id="toWishlist"></i>
      <div id="wishlist-postit"></div>
    </div>
    <div class="postit-container">
      <i class="fa-solid fa-cart-shopping" id="toBasket"></i>
      <div id="basket-postit"></div>
    </div>

    <!--choix de la devise-->
    <div class="curr-container">
      <i class="fa-solid fa-arrows-up-down"></i>
      <div
        @click="this.changeToEur"
        v-if="isXpf"
        class="curr active"
        id="curr-xpf"
      >
        EUR
      </div>
      <div @click="this.changeToXpf" v-else class="curr active" id="curr-xpf">
        XPF
      </div>
    </div>

    <!--lien vers la page en anglais-->
    <div class="flags-container">
      <img id="britflag" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HeaderBar",

  data() {
    return {
      isXpf: true,
      currency: "",
      currconv: "",
      item: [],
      itemname: "",
      notfound: false,
    };
  },

  computed: {
    ...mapGetters(["getProducts", "getCurrency", "getCurrconv"]),
  },

  mounted() {
    if (this.getCurrency == "eur") {
      this.isXpf = false;
    }
  },

  unmounted() {
    this.item = [];
    this.changeItem(this.item);
  },

  methods: {
    ...mapMutations(["changeItem", "changeCurrency", "changeCurrconv"]),

    changeToEur() {
      this.isXpf = false;
      this.currency = "eur";
      this.currconv = 0.0084;
      this.changeCurrency(this.currency);
      this.changeCurrconv(this.currconv);
    },
    changeToXpf() {
      this.isXpf = true;
      this.currency = "xpf";
      this.currconv = 1;
      this.changeCurrency(this.currency);
      this.changeCurrconv(this.currconv);
    },

    updateItem(e) {
      this.itemname = e.target.value;
      this.item = this.getProducts.filter((e) => {
        return e.title == this.itemname;
      });
      if (this.item.length == 0) {
        this.notfound = true;
        setTimeout(this.resetAlert, 1000);
      } else {
        this.changeItem(this.item);
        this.redirect();
      }
    },
    redirect() {
      this.$router.push({ path: "/slideshow" });
    },
    resetAlert() {
      this.notfound = false;
    },
  },
};
</script>

<style>
.header__links {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.5vw;
  background-color: rgba(246, 234, 240, 0.7);
}

.postit-container {
  display: flex;
  position: relative;
}
.postit-container > .fa-heart {
  transform: scale(1.5);
}
.connection-icon {
  font-size: calc(13px + 0.4vw);
  text-align: center;
  color: #725243;
  background-color: rgba(246, 234, 240, 0.7);
  padding: 2px 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: 0.2s ease;
}
.connection-icon:hover {
  transform: scale(1.01);
  cursor: pointer;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
.flags-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flags-container #frenchflag {
  width: 30px;
  height: auto;
  order: 2;
}
.flags-container #frenchflag:hover {
  cursor: pointer;
}
.flags-container #britflag {
  width: 30px;
  height: auto;
  order: 1;
}
.flags-container #britflag:hover {
  cursor: pointer;
}

.postit-container > i {
  margin: 10px;
  transform: scale(1.3);
}
.postit-container > i:hover {
  cursor: pointer;
}

#logout {
  display: none;
  background-color: rgba(209, 188, 177, 0.8);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

#logout:hover {
  cursor: pointer;
  transform: scale(1.02);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.curr-container {
  display: flex;
  align-items: center;
}

.curr-container > i {
  margin-right: 10px;
  transform: scale(0.8);
}

.curr {
  display: none;
}

.curr.active {
  display: block;
  font-weight: 800;
}

.curr:hover {
  cursor: pointer;
}

/*recheche d'un produit*/
.searchbar {
  display: flex;
  align-items: center;
}
.searchbar > #searchProduct-form {
  display: flex;
  position: relative;
  gap: 10px;
}
.searchbar > #searchProduct-form > #searchProduct-input {
  font-size: calc(13px + 0.4vw);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 10px;
}

#searchProduct-error {
  position: absolute;
  font-size: 1vw;
  left: 20px;
  top: 50px;
  color: red;
}

#basket-postit,
#wishlist-postit {
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(155, 46, 46, 0.9);
  position: absolute;
  font-weight: bolder;
  font-size: 0.8em;
  left: 80%;
  top: -3px;
  height: 20px;
  width: 20px;
  border: none;
  border-radius: 50%;
}
</style>
