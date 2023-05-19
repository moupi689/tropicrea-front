<template>
  <div class="flx-jcc-aic m gap20 wrap">
    <div
      v-for="header in getHeaders"
      :key="header._id"
      id="displayHeaderpictures"
      class="display-card"
    >
      <div class="displaypictures__container">
        <div
          @click="deleteHeader(header._id)"
          class="delete-btn"
          :id="header._id"
        >
          supprimer
        </div>
        <div class="info-btn">{{ header.category }}</div>
        <img
          class="displaypictures__img--headerpicture"
          :src="header.picture"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { productsService } from "@/_services";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "GetHeaders",

  data() {
    return {
      id: [],
      picture: [],
      category: [],
      headers: [],
    };
  },

  computed: {
    ...mapGetters(["getHeaders"]),
  },

  methods: {
    ...mapMutations(["changeHeaders"]),

    deleteHeader(id) {
      productsService
        .deleteHeader(id)
        .then((res) => {
          productsService
            .getHeaders()
            .then((res) => {
              this.headers = res.data;
              this.changeHeaders(this.headers);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.displaypictures__container {
  transition: transform 0.2s ease;
  position: relative;
}

.displaypictures__img--headerpicture {
  width: 400px;
  height: 200px;
}
</style>
