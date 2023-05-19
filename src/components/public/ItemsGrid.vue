<template>
  <div class="items__container" id="items-container">
    <a href="#articles"></a>
    <div class="items__container--header" id="items-container-header">
      <img :src="getHeaderPicture" id="items__container--header__image" />
      <div id="items__container--header__content">
        {{ getCategory.toUpperCase() }}
      </div>
    </div>
    <div id="items__container--content">
      <div
        v-for="item in getItemsByCategory"
        :key="item._id"
        class="items-container-content-item"
        id="item-container"
      >
        <router-link to="/slideshow"
          ><img
            :src="item.pictures.picture1"
            :id="item._id"
            class="item-image"
            @click="updateItem"
        /></router-link>
        <div id="items-container-content-item__description">
          {{ item.title.toUpperCase() }}
          <div id="items-container-content-item__price">
            {{ item.price.toFixed([0]) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ItemsGrid",

  data() {
    return {
      id: [],
      item: [],
    };
  },

  computed: {
    ...mapGetters(["getCategory", "getItemsByCategory", "getHeaderPicture"]),
  },
  methods: {
    ...mapMutations(["changeItem"]),
    updateItem(e) {
      this.id = e.target.id;
      this.item = this.getItemsByCategory.filter((e) => {
        return e._id == this.id;
      });
      this.changeItem(this.item);
    },
  },
};
</script>

<style>
.items__container {
  position: sticky;
  top: 20px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.items__container--header {
  display: flex;
  width: 60%;
  height: 10vh;
}
#items__container--header__image {
  width: 50%;
  border-radius: 5px 0px 0px 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
#items__container--header__content {
  width: 50%;
  font-size: 4rem;
  text-align: center;
  background-color: rgba(246, 234, 240, 0.7);
  border-radius: 0px 5px 5px 0px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

#items__container--content {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  width: 80vw;
}
.items-container-content-item {
  display: flex;
  padding: 10px;
  flex-direction: column;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(246, 234, 240, 0.7);
  transition: 0.2s ease;
}
.item-image {
  background-position: center;
  border-radius: 5px 5px 0 0;
  width: 30vw;
  height: auto;
  transition: 0.2s ease;
}
.item-image:hover {
  cursor: zoom-in;
  opacity: 0.7;
  transform: scale(0.995);
}
#items-container-content-item__description {
  background-color: rgba(246, 234, 240, 0.7);
  border-radius: 0 0 5px 5px;
  font-size: 2em;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#items-container-content-item__price {
  font-size: 1em;
}
</style>
