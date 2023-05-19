<template>
  <div class="flx-jcc-aic m wrap gap20">
    <div v-for="fabric in getFabrics" :key="fabric._id" class="display-card">
      <div class="displaypictures__container">
        <div
          @click="deleteFabric(fabric._id)"
          class="delete-btn"
          :id="fabric._id"
        >
          supprimer
        </div>
        <div class="info-btn">{{ fabric.fabricname }}</div>
        <img class="fabric__tissue--img" :src="fabric.tissuepicture" />
      </div>
    </div>
  </div>
</template>

<script>
import { productsService } from "@/_services";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "GetFabrics",
  data() {
    return {
      id: [],
      fabrics: [],
      fabricname: [],
      tissuepicture: [],
    };
  },

  computed: {
    ...mapGetters(["getFabrics"]),
  },

  methods: {
    ...mapMutations(["changeFabrics"]),

    deleteFabric(id) {
      productsService
        .deleteFabric(id)
        .then((res) => {
          productsService
            .getFabrics()
            .then((res) => {
              this.fabrics = res.data;
              this.changeFabrics(this.fabrics);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.fabric__tissue--img {
  width: 300px;
  height: 300px;
}
</style>
