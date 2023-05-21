<template>
  <div class="template-container">
    <GoBackLink />
    <div class="slideshow-container" id="slideshow-container">
      <!--slideshow-->
      <div class="item-slideshow" id="item-slideshow">
        <div class="item-slideshow-info">
          {{ this.instock }}
        </div>
        <i
          @click="addToWishlist"
          class="fa-regular fa-heart item-towishlist"
        ></i>
        <img :src="this.picture" alt="" id="slideshow-pic" />
      </div>

      <!--description de l'article-->
      <div class="item-description">
        <div class="item-header">
          <div id="item-name">{{ getItem[0].title.toUpperCase() }}</div>
          <div id="item-price">
            {{ (getItem[0].price * this.getCurrconv).toFixed([0]) }}
            {{ this.getCurrency }}
          </div>
        </div>
        <div id="item-description--text">{{ getItem[0].description }}</div>
        <p id="item-description--fabric">Matière : {{ getItem[0].fabric }}</p>
        <p>Autres coloris :</p>
        <div id="item-description--tissues">
          <div v-for="fabric in this.fabrics" class="displaytissues__container">
            <img
              class="displaytissues__img--tissue"
              :id="fabric._id"
              :src="fabric.tissuepicture"
            />
          </div>
        </div>
        <p>Tailles :</p>
        <div class="item-size">
          <ul>
            <li @click="pickSize" class="pick-size" title="S" id="Ssize">S</li>
            <li @click="pickSize" class="pick-size" title="M" id="Msize">M</li>
            <li @click="pickSize" class="pick-size" title="L" id="Lsize">L</li>
            <li @click="pickSize" class="pick-size" title="XL" id="XLsize">
              XL
            </li>
          </ul>
        </div>
        <div @click="addToBasket" id="addToBasket">Ajouter au panier</div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBackLink from "../../components/public/GoBackLink.vue";

import Axios from "@/_services/caller.service";

import { userService } from "@/_services";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Slideshow",

  data() {
    return {
      id: "",
      itempictures: [],
      picture: "",
      fabrics: [],
      instock: "",
      curIndex: "0",
      timeout: "",
      _id: "",
      thumbnail: "",
      title: "",
      size: "",
      price: "",
    };
  },

  computed: {
    ...mapGetters([
      "getItem",
      "getFabrics",
      "getCurrency",
      "getCurrconv",
      "getUserSessionID",
      "getVisitorSessionID",
    ]),
  },

  mounted() {
    if (this.getUserSessionID) {
      this.id = this.user_sessionID;
    } else {
      this.id = this.getVisitorSessionID;
    }
    console.log(this.id);

    this.slideShow();
    if (this.getItem[0].inStock) {
      this.instock = "en stock";
    } else {
      this.instock = "sur commande";
    }
    this.fabrics = this.getFabrics.filter((elt) => {
      return elt.fabricname == this.getItem[0].fabric;
    });
  },

  unmounted() {
    this.item = [];
    this.changeItem(this.item);
    clearTimeout(this.timeout);
  },

  methods: {
    ...mapMutations(["changeItem", "changeCart", "changeWishlist"]),
    slideShow() {
      this.itempictures = Object.values(this.getItem[0].pictures);
      this.picture = this.itempictures[this.curIndex];
      this.curIndex++;
      if (this.curIndex == this.itempictures.length) {
        this.curIndex = 0;
      }
      this.timeout = setTimeout(this.slideShow, 2000);
    },
    pickSize(e) {
      e.target.classList.toggle("active");
      this.size = e.target.title;
      console.log(this.size);
    },

    addToBasket(e) {
      if (!this.size) {
        alert("Veuillez choisir une taille");
      } else {
        return Axios.post(
          "/api/cart/item/" + this.id,
          {
            _id: this.getItem[0]._id,
            thumbnail: this.getItem[0].pictures.picture1,
            title: this.getItem[0].title,
            size: this.size,
            price: this.getItem[0].price,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          console.log(res.data);
          userService
            .getCart(this.id)
            .then((res) => {
              this.cart = res.data;
              this.changeCart(this.cart);
            })
            .catch((err) => console.log(err));
        });
      }
    },
    addToWishlist() {
      return Axios.post(
        "/api/wishlist/item/" + this.id,
        {
          _id: this.getItem[0]._id,
          thumbnail: this.getItem[0].pictures.picture1,
          title: this.getItem[0].title,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        console.log(res.data);
        userService
          .getWishlist(this.id)
          .then((res) => {
            this.wishlist = res.data;
            this.changeWishlist(this.wishlist);
          })
          .catch((err) => console.log(err));
      });
    },
  },
  components: {
    GoBackLink,
  },
};
</script>

<style>
.template-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.slideshow-container {
  display: flex;
  transition: 0.2s ease;
  gap: 20px;
  margin: 30px;
}

.slideshow-container > #item-slideshow > img {
  width: 35vw;
  height: auto;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.slideshow-container > #item-slideshow {
  position: relative;
}

.item-slideshow-info {
  display: flex;
  position: absolute;
  right: 20px;
  top: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 2px;
  background-color: rgba(246, 234, 240, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.item-wishlist-info {
  display: flex;
  position: absolute;
  right: 20px;
  top: 130px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 2px;
  background-color: rgba(246, 234, 240, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.item-towishlist {
  display: flex;
  position: absolute;
  transform: scale(2);
  right: 45px;
  top: 80px;
}

.item-towishlist:hover {
  cursor: pointer;
  transform: scale(2.2);
}

.item-towishlist:active {
  cursor: pointer;
  transform: scale(1.8);
}

#item-description--tissues {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
}

.displaytissues__container {
  display: flex;
  flex-wrap: nowrap;
}

.displaytissues__img--tissue {
  width: 80px;
  height: 80px;
  border-radius: 5px;
  transition: 0.3s ease;
}

.displaytissues__img--tissue:hover {
  cursor: pointer;
  transform: scale(4);
}

.slideshow-container > .item-description {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 28vw;
  padding: 20px;
  background-color: rgba(246, 234, 240, 0.7);
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
.slideshow-container > .item-description > .item-header {
  background-color: rgba(209, 188, 177, 0.4);
  display: flex;
  padding: 2% 0;
  justify-content: space-around;
  margin-bottom: 10%;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
.slideshow-container > .item-description > .item-header > #item-name {
  font-size: 2vw;
}
.slideshow-container > .item-description > .item-header > #item-price {
  font-size: 1.5vw;
}
.slideshow-container > .item-description > #item-description--text {
  margin: 2% 5% 10% 5%;
  font-size: 1vw;
  height: 10vh;
  padding: 10px;
}

.slideshow-container > .item-description > p {
  margin: 0 0 2% 8%;
  font-size: 1vw;
}
.slideshow-container > .item-description > .item-size {
  display: flex;
  flex-direction: column;
}

.slideshow-container > .item-description > .item-size > ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-bottom: 10px;
}
.pick-size {
  font-size: 0.8vw;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  transition: 0.2s ease;
  padding: 5px 15px;
  margin-right: 2%;
  background-color: rgba(255, 247, 221, 0.3);
}
.pick-size:hover {
  border: 1px solid rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
  cursor: pointer;
  background-color: rgba(209, 188, 177, 0.4);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.pick-size.active {
  transform: scale(0.95);
  background-color: rgba(209, 188, 177, 0.4);
}

#addToBasket,
#addToWishlist {
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin-top: 20px;
  background-color: rgba(209, 188, 177, 0.4);
  font-size: 1.2vw;
  transition: 0.2s ease;
  text-align: center;
}

#addToBasket:hover,
#addToWishlist:hover {
  border: 1px solid rgba(0, 0, 0, 0.6);
  cursor: pointer;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

#addToBasket:active,
#addToWishlist:active {
  transform: scale(0.95);
}
</style>
