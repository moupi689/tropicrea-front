<template>
  <div>
    <GoBackLink />
    <div class="flx-jcc-aic m">
      <div class="wishlist-container flx-jcc-aic column">
        <div class="wishlist-title">Ma wishlist</div>
        <div v-if="isWishlist" id="wishlist">
          <div
            v-for="item in getWishlist.wish.items"
            class="displaypictures__container"
          >
            <div class="delete btn">
              <div @click="removeItem(this.wishID, item._id)" :value="item._id">
                supprimer
              </div>
            </div>
            <div @click="seeItem(item.itemId)" class="info btn">
              {{ item.title.toUpperCase() }}
            </div>
            <img class="displaypictures__img" :src="item.thumbnail" />
          </div>
        </div>
        <div v-else class="noCart">Pas d'envies pour le moment</div>
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
  name: "Wishlist",

  data() {
    return {
      isWishlist: false,
      id: [],
      item: [],
      name: [],
      wishID: [],
    };
  },

  computed: {
    ...mapGetters(["getWishlist", "getProducts"]),
  },

  mounted() {
    if (this.getWishlist != null) {
      this.isWishlist = true;

      this.wishID = this.getWishlist.wish._id;
      this.user = this.getWishlist.wish.user;
      console.log(this.getWishlist.wish);
    }
  },

  methods: {
    ...mapMutations(["changeItem", "changeWishlist"]),

    removeItem(wishID, itemID) {
      Axios.delete("/api/wishlist/" + wishID + "/" + itemID).then((res) => {
        console.log(res.data);
        userService
          .getWishlist(this.user)
          .then((res) => {
            this.wishlist = res.data;
            this.changeWishlist(this.wishlist);
          })
          .catch((err) => console.log(err));
      });
    },

    seeItem(item) {
      console.log(item);
      let product = this.getProducts.filter((e) => {
        return e._id == item;
      });
      console.log(product);
      this.changeItem(product);
      this.$router.push({ path: "/slideshow" });
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

.wishlist-container {
  width: 50vw;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;
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

.wishlist-btn,
.basket-btn {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  transition: 0.2s ease;
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
  justify-content: center;
  width: 50%;
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

.btn {
  display: block;
  position: absolute;
  font-size: 1rem;
  background-color: rgba(228, 211, 219, 0.9);
  border-radius: 10px;
  border: var(--border);
  z-index: 2;
}

.btn:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.delete {
  font-size: 0.8em;
  padding: 2px 5px;
  top: 10px;
  right: 15px;
}

.info {
  font-size: 1.2em;
  padding: 5px 20px;
  bottom: 20px;
  left: 10px;
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
