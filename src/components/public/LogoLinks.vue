<template>
  <div class="logo__links">
    <router-link to="/lookbook" class="logo-link emph" id="giftcard"
      >LOOK BOOK</router-link
    >
    <a title="mode homme" class="logo-link" id="homme" @click="updateCategory"
      >HOMME</a
    >
    <a title="mode femme" class="logo-link" id="femme" @click="updateCategory"
      >FEMME</a
    >
    <a
      title="accessoires"
      class="logo-link"
      id="accessoires"
      @click="updateCategory"
      >ACCESSOIRES</a
    >
    <a
      title="bijoux et accessoires"
      class="logo-link"
      id="bijoux"
      @click="updateCategory"
      >BIJOUX</a
    >
    <router-link to="/giftcard" class="logo-link emph" id="giftcard"
      >CARTE-CADEAU</router-link
    >
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "LogoLinks",

  data() {
    return {
      picture: [],
      items: [],
    };
  },

  computed: {
    ...mapGetters(["getCategory", "getProducts", "getHeaders"]),
  },
  methods: {
    ...mapMutations(["changeCategory", "changeHeaderPicture", "changeItems"]),
    updateCategory(e) {
      this.changeCategory(e.target.id);
      this.picture = this.getHeaders.filter((e) => {
        return e.category == this.getCategory;
      });

      this.items = this.getProducts.filter((e) => {
        return e.gender == this.getCategory;
      });

      this.changeItems(this.items);
      this.changeHeaderPicture(this.picture[0].picture);
    },
  },
};
</script>

<style>
.logo__links {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
}
.logo__links > .logo-link {
  color: #a98574;
  text-decoration: none;
  padding: 10px;
  font-size: 1.5rem;
  transition: 0.2s ease;
}

.logo-link.emph {
  color: rgba(155, 46, 46, 0.9);
  text-shadow: 2px 2px 8px rgba(155, 46, 46, 0.5);
}

.logo-link.lookbook {
  color: rgb(219, 129, 180);
  text-shadow: 2px 2px 3px rgba(155, 46, 46, 0.5);
}

.logo__links > .logo-link:hover {
  cursor: pointer;
  transform: scale(1.05);
  color: #725243;
}
</style>
