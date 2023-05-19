<template>
  <div class="flx-jcc-aic m gap50 wrap">
    <div v-for="image in getLookbook" :key="image._id" class="display-card">
      <div class="displaypictures__container">
        <div
          @click="deleteLookbookPicture(image._id)"
          class="delete-btn"
          :id="image._id"
        >
          supprimer
        </div>
        <img class="displaypictures__img" :src="image.picture" />
      </div>
    </div>
  </div>
</template>

<script>
import { productsService } from "@/_services";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "GetLookbook",

  data() {
    return {
      id: [],
      image: [],
    };
  },

  computed: {
    ...mapGetters(["getLookbook"]),
  },

  methods: {
    ...mapMutations(["changeLookbook"]),

    deleteLookbookPicture(id) {
      productsService
        .deleteLookbookPicture(id)
        .then((res) => {
          productsService
            .getLookbook()
            .then((res) => {
              this.lookbook = res.data;
              this.changeLookbook(this.lookbook);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.displaypictures__img {
  width: 300px;
  height: 400px;
}
</style>
