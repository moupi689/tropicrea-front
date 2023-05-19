<template>
  <div class="flx-jcc-aic m gap50">
    <div class="flx-jcc-aic wrap gap20 display-card">
      <div
        v-for="product in getProducts"
        :key="product._id"
        class="displaypictures__container"
      >
        <div class="info-btn">{{ product.title.toUpperCase() }}</div>
        <div
          class="delete-btn"
          :id="product._id"
          @click="deleteProduct(product._id)"
        >
          supprimer
        </div>
        <img class="displaypictures__img" :src="product.pictures.picture1" />
      </div>
    </div>
  </div>
</template>

<script>
import { productsService } from "@/_services";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "GetProducts",

  data() {
    return {
      id: [],
      title: [],
      picture: [],
    };
  },

  computed: {
    ...mapGetters(["getProducts"]),
  },

  methods: {
    ...mapMutations(["changeProducts"]),

    deleteProduct(id) {
      productsService
        .deleteProduct(id)
        .then((res) => {
          productsService
            .getItems()
            .then((res) => {
              this.products = res.data;
              console.log(res.data);
              this.changeProducts(this.products);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
#foundProduct-display {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  gap: 30px;
  padding: 30px;
  align-items: center;
  background-color: var(--second-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  border: var(--border);
}
</style>
