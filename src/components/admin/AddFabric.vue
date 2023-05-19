<template>
  <div class="flx-jcc-aic m">
    <div class="display-card column">
      <!-- ajouter un tissu-->
      <p class="note">
        Choisir l'image déclenche l'envoi du formulaire. A faire en dernier.
      </p>
      <form @submit.prevent="" class="formLayout" enctype="multipart/form-data">
        <div class="subformLayout">
          <label for="fabricname">Matière :</label>
          <select v-model="fabricname" name="fabricname" id="fabricname">
            <option value="" selected>-</option>
            <option value="coton">Coton</option>
            <option value="fibranne">Fibranne</option>
          </select>
        </div>
        <div class="subformLayout">
          <label for="tissuename">Nom :</label>
          <select v-model="fabrictissu" name="tissuename" id="tissuename">
            <option value="" selected>-</option>
            <option value="tissu1">tissu1</option>
            <option value="tissu2">tissu2</option>
            <option value="tissu3">tissu3</option>
          </select>
        </div>
        <div class="subformLayout">
          <label for="tissuepicture">Image :</label>
          <input type="file" name="image" @change="addFabric($event)" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { productsService } from "@/_services";

import { mapGetters, mapMutations } from "vuex";

import Axios from "@/_services/caller.service";

export default {
  name: "AddFabric",

  data() {
    return {
      fabricname: "",
      fabrictissu: "",
      fabrics: [],
    };
  },

  computed: {
    ...mapGetters(["getFabrics"]),
  },

  methods: {
    ...mapMutations(["changeFabrics"]),

    addFabric(event) {
      return Axios.post(
        "/api/products/fabrics/",
        {
          fabricname: this.fabricname,
          tissuename: this.fabrictissu,
          image: event.target.files[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
        .then(() => {
          productsService
            .getFabrics()
            .then((res) => {
              this.fabrics = res.data;
              this.changeFabrics(this.fabrics);
            })
            .catch((err) => console.log(err));
        })
        .then(this.$router.push({ path: "./get" }));
    },
  },
};
</script>
