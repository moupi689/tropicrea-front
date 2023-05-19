<template>
  <div class="sidebar" id="sidebar">
    <div id="sidebar-toggle">
      <i class="fa-solid fa-arrow-right" id="togglearrow"></i>
    </div>
    <a
      title="nouveautes"
      class="sidebar-title-news sidebar-item items-link"
      id="nouveautes"
      @click="updateCategory"
      >NOUVEAUTES</a
    >
    <a title="" class="sidebar-title">WOMEN</a>
    <a
      title="robes"
      id="robes"
      @click="updateCategory"
      class="sidebar-item items-link"
      >ROBES</a
    >
    <a
      title="pantalons"
      id="pantalons"
      @click="updateCategory"
      class="sidebar-item items-link"
      >PANTALONS</a
    >
    <a
      title="shorts"
      id="shorts"
      @click="updateCategory"
      class="sidebar-item items-link"
      >SHORTS</a
    >
    <a
      title="combinaisons"
      id="combinaisons"
      @click="updateCategory"
      class="sidebar-item items-link"
      >COMBINAISONS</a
    >
    <a
      title="tops"
      id="tops"
      @click="updateCategory"
      class="sidebar-item items-link"
      >TOPS</a
    >
    <a
      title="jupes"
      id="jupes"
      @click="updateCategory"
      class="sidebar-item items-link"
      >JUPES</a
    >
    <a
      title="kimonos"
      id="kimonos"
      @click="updateCategory"
      class="sidebar-item items-link"
      >KIMONOS</a
    >
    <a
      title="accessoires"
      id="accessoires"
      @click="updateCategory"
      class="sidebar-item items-link"
      >ACCESSOIRES</a
    >
    <a title="" class="sidebar-title">MEN</a>
    <a
      title="chemises"
      id="chemises"
      @click="updateCategory"
      class="sidebar-item items-link"
      >CHEMISES</a
    >
    <a title="" class="sidebar-title">BIJOUX</a>
    <a
      title="chemises"
      id="chemises"
      @click="updateCategory"
      class="sidebar-item items-link"
      >BRACELETS</a
    >
    <a
      title="chemises"
      id="chemises"
      @click="updateCategory"
      class="sidebar-item items-link"
      >COLLIERS</a
    >
    <router-link
      to="/giftcard"
      class="sidebar-item items-link giftcard"
      id="giftcard"
      >CARTE-CADEAU</router-link
    >
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Sidebar",

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
      if (this.getCategory == "nouveautes") {
        this.items = this.getProducts.filter((item) => {
          return item.isNewItem === true;
        });
      } else {
        this.items = this.getProducts.filter((e) => {
          return e.category == this.getCategory;
        });
      }

      this.changeItems(this.items);
      this.changeHeaderPicture(this.picture[0].picture);
    },
  },
};
</script>

<style>
#sidebar-toggle {
  display: none;
}

.sidebar {
  margin: 30px;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  position: sticky;
  top: 20px;
  padding: 20px 15px;
  background-color: rgba(246, 234, 240, 0.7);
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
.sidebar > a {
  display: flex;
  padding: 7px;
  text-decoration: none;
}
.sidebar > .sidebar-title {
  font-size: 1.8rem;
  color: #725243;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
}
.sidebar > .sidebar-item {
  font-size: 1.2rem;
  transition: 0.2s ease;
  color: #a98574;
  margin-left: 15px;
}
.sidebar > .sidebar-item:hover {
  cursor: pointer;
  transform: translate(5%) scale(1.05);
  color: #725243;
}
.sidebar > #nouveautes {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: rgba(155, 46, 46, 0.9);
  border-bottom: 1px dashed rgba(155, 46, 46, 0.5);
  transition: 0.2s ease;
  text-shadow: 2px 2px 8px rgba(155, 46, 46, 0.5);
}
.sidebar > #nouveautes:hover {
  transform: scale(1.02);
  cursor: pointer;
}

.sidebar > .sidebar-item.giftcard {
  margin-top: 10px;
  font-size: 1.2rem;
  color: rgba(155, 46, 46, 0.9);
  transition: 0.2s ease;
  text-shadow: 2px 2px 8px rgba(155, 46, 46, 0.5);
}
</style>
