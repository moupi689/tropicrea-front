<template>
  <div>
    <GoBackLink />
    <div class="flx-jcc-aic m">
      <div class="checkout-container flx-jcc-aic column">
        <div class="wishlist-title">Mes articles</div>
        <div v-for="item in getCart.cart.items" id="basket-item-container">
          <div id="basket-item--image">
            <img :src="item.thumbnail" width="120" height="160" />
          </div>
          <div class="flx-jcc-aic column m gap20">
            <div id="basket-item--name">{{ item.title.toUpperCase() }}</div>
            <div id="basket-item--name">Taille {{ item.size }}</div>
            <div id="basket-item--price" class="itemprice">
              {{ (item.price * currconv).toFixed([0]) }}
              {{ currency }}
            </div>
          </div>
        </div>
        <div id="basketSum">
          Total de la commande : {{ this.getCart.cart.bill }}
          {{ this.currency }}
        </div>
        <div class="wishlist-title">Mes coordonnées</div>
        <form id="contactForm">
          <label for="contactName">Nom :</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="contactName"
          />
          <label for="contactFirstname">Prénom :</label>
          <input
            v-model="firstname"
            type="text"
            class="form-control"
            id="contactFirstname"
          />
          <label for="contactEmail">Adresse mail :</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="contactEmail"
          />
          <label for="contactPhone">Téléphone :</label>
          <input
            v-model="phone"
            type="email"
            class="form-control"
            id="contactEmail"
          />
        </form>
        <div class="wishlist-title">Mon moyen de paiement</div>
        <form action="">
          <input
            v-model="payment"
            type="radio"
            id="cash"
            name="payment"
            value="cash"
          />
          <label for="cash">Espèces (paiement sur place)</label><br />
          <input
            v-model="payment"
            type="radio"
            id="check"
            name="payment"
            value="check"
          />
          <label for="check"
            >Chèque (paiement sur place ou par correspondance)</label
          ><br />
          <input
            v-model="payment"
            type="radio"
            id="card"
            name="payment"
            value="paypal"
          />
          <label for="card">Carte Bancaire (partenaire Paypal)</label>
        </form>

        <div class="checkout-btn flx-jcc-aic">
          <div id="validate-basket">Finaliser ma commande</div>
          <div id="smart-button-container">
            <div id="paypal-button-container"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from "@/_services";

import { mapGetters, mapMutations } from "vuex";

import GoBackLink from "../../components/public/GoBackLink.vue";

export default {
  name: "Checkout",

  data() {
    return {
      currency: "",
      currconv: "",
      user: "",
      name: "",
      firstname: "",
      email: "",
      phone: "",
      payment: "",
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
      "getUserSessionID",
      "getUsers",
    ]),
  },

  mounted() {
    this.getUser();
    this.name = this.user[0].name;
    this.firstname = this.user[0].firstname;
    this.email = this.user[0].email;
    this.phone = this.user[0].phone;
    this.currency = this.getCurrency;
    this.currconv = this.getCurrconv;
    this.user = this.getCart.cart.user;
    this.cartID = this.getCart.cart._id;
    this.bill = this.getCart.cart.bill;
  },

  methods: {
    getUser() {
      console.log(this.getUserSessionID);
      this.user = this.getUsers.filter((e) => {
        return e._id == this.getUserSessionID;
      });
      console.log(this.user);
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

.checkout-container {
  gap: 50px;
  width: 30vw;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 50px;
  background-color: rgba(228, 211, 219, 0.9);
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

.checkout-btn {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  transition: 0.2s ease;
}

#basketSum {
  display: flex;
  padding: 10px;
  justify-content: right;
  font-size: calc(18px + 0.4vw);
}

#continue-visit,
#transfert-basket,
#validate-basket,
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

#continue-visit:hover,
#transfert-basket:hover,
#validate-basket:hover,
#continue-shopping:hover,
#validate-contact:hover {
  border: 1px solid rgba(160, 156, 156, 0.9);
  background-color: rgba(209, 188, 177, 0.4);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

#continue-visit:active,
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
  width: 50%;
}

#contactForm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
