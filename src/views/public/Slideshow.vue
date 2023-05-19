<template>
  <div class="template-container">
    <GoBackLink />
    <div class="slideshow-container" id="slideshow-container">
      <!--slideshow-->
      <div class="item-slideshow" id="item-slideshow">
        <div class="item-slideshow-info" id="item__instock">
          {{ this.instock }}
        </div>
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
            <li class="pick-size" title="S" id="Ssize">S</li>
            <li class="pick-size" title="M" id="Msize">M</li>
            <li class="pick-size" title="L" id="Lsize">L</li>
            <li class="pick-size" title="XL" id="XLsize">XL</li>
          </ul>
          <div>
            <router-link to="/mesmesures"
              ><div
                class="item-size-guide"
                title="prendre mes mesures"
                id="surMesure"
              >
                <i class="fa-solid fa-ruler"></i>
                Sur-mesure
              </div></router-link
            >
            <router-link to="/infos/tailles"
              ><div class="item-size-guide" id="sizeguide">
                <i class="fa-solid fa-ruler"></i>
                Guide des tailles
              </div></router-link
            >
          </div>
        </div>
        <div id="addToBasket">Ajouter au panier</div>
        <div id="addToWishlist">Ajouter à la wishlist</div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBackLink from "../../components/public/GoBackLink.vue";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Slideshow",

  data() {
    return {
      itempictures: [],
      picture: "",
      fabrics: [],
      instock: "",
      curIndex: "0",
      timeout: "",
    };
  },

  computed: {
    ...mapGetters(["getItem", "getFabrics", "getCurrency", "getCurrconv"]),
  },

  mounted() {
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
    ...mapMutations(["changeItem"]),
    slideShow() {
      this.itempictures = Object.values(this.getItem[0].pictures);
      this.picture = this.itempictures[this.curIndex];
      this.curIndex++;
      if (this.curIndex == this.itempictures.length) {
        this.curIndex = 0;
      }
      this.timeout = setTimeout(this.slideShow, 2000);
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
  transform: scale(5);
}

.slideshow-container > .item-description {
  display: flex;
  flex-direction: column;
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

.item-size-guide {
  display: flex;
  justify-content: left;
  align-items: center;
  transition: 0.2s ease;
  margin-top: 10px;
}

.item-size-guide:hover {
  transform: scale(1.02);
  cursor: pointer;
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
