<template>
  <div>
    <GoBackLink />
    <div class="flx-jcc-aic">
      <div id="basket-container">
        <div class="basket-title">Mon panier</div>
        <div v-if="isCart" id="basket">
          <div v-for="item in getCart.cart.items" id="basket-item-container">
            <div id="basket-item--image">
              <img :src="item.thumbnail" width="60" height="80" />
            </div>
            <div id="basket-item--name">{{ item.title.toUpperCase() }}</div>
            <div id="basket-item--name">Taille {{ item.size }}</div>
            <div id="basket-item--price" class="itemprice">
              {{ (item.price * currconv).toFixed([0]) }}
              {{ currency }}
            </div>
            <div class="item-remove">
              <i
                v-if="oneitem"
                @click="removeItem(this.cartID, item.itemId)"
                class="fa-solid fa-xmark"
                :value="item.itemId"
              ></i>
            </div>
            <div class="item-pick">
              <a href="#articles"
                ><i
                  @click="seeItem(item.itemId)"
                  class="fa-solid fa-eye"
                  :name="item.title"
                ></i
              ></a>
            </div>
          </div>
          <div id="basketSum">
            Total du panier : {{ this.getCart.cart.bill }} {{ this.currency }}
          </div>
        </div>
        <div v-else class="noCart">Votre panier est vide ...</div>
        <div class="basket-btn">
          <div
            @click="eraseBasket(this.cartID)"
            v-if="isCart"
            id="erase-basket"
          >
            Vider mon panier
          </div>
          <div @click="validateBasket" v-if="isCart" id="validate-basket">
            Valider mon panier
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "@/_services/caller.service";

import { userService } from "@/_services";

import { mapGetters, mapMutations } from "vuex";

import GoBackLink from "../../components/public/GoBackLink.vue";

export default {
  name: "Cart",

  data() {
    return {
      currency: "",
      currconv: "",
      isCart: false,
      cartLength: "",
      oneitem: true,
      user: "",
      cartID: "",
      itemID: [],
      title: "",
      size: "",
      thumbnail: "",
      bill: "",
    };
  },

  computed: {
    ...mapGetters([
      "getCart",
      "getCurrency",
      "getCurrconv",
      "getProducts",
      "getUserSessionID",
    ]),
  },

  mounted() {
    if (this.getCart != null) {
      this.currency = this.getCurrency;
      this.currconv = this.getCurrconv;
      this.isCart = true;
      this.cartLength = this.getCart.cart.items.length;
      console.log(this.cartLength);
      this.user = this.getCart.cart.user;
      this.cartID = this.getCart.cart._id;
      this.bill = this.getCart.cart.bill;
    }
    if (this.cartLength == 1) {
      this.oneitem = false;
    }
  },

  methods: {
    ...mapMutations(["changeCart", "changeItem"]),

    removeItem(cartID, itemID) {
      console.log(this.cartID);
      console.log(itemID);
      Axios.delete("/api/cart/" + cartID + "/" + itemID).then((res) => {
        console.log(res.data);
        userService
          .getCart(this.user)
          .then((res) => {
            this.cart = res.data;
            this.changeCart(this.cart);
          })
          .catch((err) => console.log(err));
      });
    },

    eraseBasket(cartID) {
      Axios.delete("/api/cart/" + cartID).then((res) => {
        console.log(res.data);
        userService
          .getCart(this.user)
          .then((res) => {
            this.cart = res.data;
            this.changeCart(this.cart);
            this.isCart = false;
          })
          .catch((err) => console.log(err));
      });
    },

    seeItem(item) {
      let product = this.getProducts.filter((e) => {
        return e._id == item;
      });
      this.changeItem(product);
      this.$router.push({ path: "/slideshow" });
    },

    validateBasket() {
      if (this.getUserSessionID) {
        this.$router.push({ path: "/checkout" });
      } else {
        this.$router.push({ path: "/signup" });
      }
    },
  },

  components: {
    GoBackLink,
  },
};
</script>

<style>
/*styles de la wishlist*/

#basket-item-container,
#wishlist-item-container {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  align-items: center;
  border-radius: 5px;
  justify-content: space-around;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

#wishlist > p,
#basket > p {
  text-align: center;
  font-size: calc(18px + 0.4vw);
  margin: 50px 0;
}

#wishlist-item--image,
#basket-item--image {
  padding-top: 5px;
}

#wishlist-item--name,
#basket-item--name {
  font-size: calc(15px + 0.4vw);
}

#wishlist-item--price,
#basket-item--price {
  font-size: calc(15px + 0.4vw);
}

#basket-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;
  background-color: rgba(228, 211, 219, 0.9);
  margin-bottom: 50px;
}

.wishlist-title,
.basket-title {
  background-color: rgba(209, 188, 177, 0.4);
  font-size: calc(18px + 0.4vw);
  align-self: center;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  width: 80%;
  padding: 5px;
  margin-bottom: 40px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.wishlist-btn,
.basket-btn {
  margin-top: 20px;
  display: flex;
  gap: 50px;
  justify-content: center;
  transition: 0.2s ease;
}

#basketSum {
  display: flex;
  padding: 10px;
  justify-content: right;
  font-size: calc(18px + 0.4vw);
}

#transfert-basket,
#validate-basket,
#erase-basket,
#continue-shopping,
#validate-contact {
  background-color: rgba(209, 188, 177, 0.4);
  font-size: calc(15px + 0.4vw);
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  width: 50%;
  padding: 5px;
  transition: 0.2s ease;
  justify-content: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

#transfert-basket:hover,
#validate-basket:hover,
#erase-basket:hover,
#continue-shopping:hover,
#validate-contact:hover {
  transform: scale(1.02);
  border: 1px solid rgba(160, 156, 156, 0.9);
  background-color: rgba(209, 188, 177, 0.4);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

#transfert-basket:active,
#validate-basket:active,
#continue-shopping:active,
#validate-contact:active {
  transform: scale(0.95);
}

.item-remove,
.item-pick {
  text-decoration: none;
}

.item-remove:hover,
.item-pick:hover {
  cursor: pointer;
}

.noCart {
  font-size: 1.5em;
}

/*#cashout{
        display: flex;
        justify-content: center;    
        align-items: center;
        background-color: $second-color;
        font-size: calc(15px + 0.4vw);
        font-weight: bold;
        align-self: center;
        text-align: center;
        border: 1px solid rgb(160, 156, 156, 0.5);
        border-radius: 25px;
        width: 50%;
        padding: 5px;
        @include transition;
        @include box-shadow;
        &:hover{
            @include border;
            @include box-shadow;
            cursor: pointer;
        }
        &:active{
            transform:  scale(0.95)
        }
        > p{
            margin-right: 10px;
        }
    }*/
#paypal-button-container {
  text-align: center;
}

.card-body {
  justify-content: center;
  width: 50%;
}

#contactForm {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8rem;
}

#contactForm > input {
  font-size: 0.8rem;
}

#basket {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}

#wishlist {
  display: flex;
  margin: 30px;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: var(--second-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  border: var(--border);
}

.displaypictures__container {
  transition: transform 0.2s ease;
  position: relative;
}

.displaypictures__img {
  width: 225px;
  height: 300px;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
}

.info-btn {
  display: block;
  position: absolute;
  bottom: 20px;
  left: 10px;
  font-size: 1rem;
  padding: 5px 20px;
  background-color: rgba(228, 211, 219, 0.9);
  border-radius: 10px;
  border: var(--border);
  z-index: 2;
}

.delete-btn {
  transform: scale(1.2);
  display: block;
  position: absolute;
  top: 10px;
  right: 14px;
  z-index: 2;
}

.check-btn {
  display: block;
  position: absolute;
  top: 40px;
  right: 10px;
  z-index: 2;
}

.delete-btn:hover {
  transform: scale(1.3);
  cursor: pointer;
}

.check-btn:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
