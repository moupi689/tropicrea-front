<template>
  <div class="flx-jcc-aic m">
    <div class="display-card flx-jcc-aic column">
      <!-- ajouter une photo d'entete-->
      <p class="note">
        Choisir l'image déclenche l'envoi du formulaire. A faire en dernier.
      </p>
      <form @submit.prevent="" class="formLayout" enctype="multipart/form-data">
        <div class="subformLayout">
          <label for="headerpicture__category">Catégorie :</label>
          <select
            v-model="category"
            name="category"
            id="headerpicture__category"
          >
            <option value="" selected>-</option>
            <option value="nouveautes">Nouveautes</option>
            <option value="robes">Robes</option>
            <option value="pantalons">Pantalons</option>
            <option value="shorts">Shorts</option>
            <option value="combinaisons">Combinaisons</option>
            <option value="tops">Tops</option>
            <option value="kimonos">Kimonos</option>
            <option value="jupes">Jupes</option>
            <option value="chemises">Chemises</option>
            <option value="accessoires">Accessoires</option>
            <option value="bijoux">Bijoux</option>
          </select>
        </div>
        <div class="subformLayout">
          <label for="headerpicture__image">Image :</label>
          <input
            @change="addHeader($event)"
            id="headerpicture__image"
            type="file"
            name="image"
            class=""
          />
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
  name: "AddHeader",

  data() {
    return {
      category: "",
      headers: [],
    };
  },
  computed: {
    ...mapGetters(["getHeaders"]),
  },

  methods: {
    ...mapMutations(["changeHeaders"]),

    addHeader(event) {
      return Axios.post(
        "/api/headerpictures",
        {
          category: this.category,
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
            .getHeaders()
            .then((res) => {
              this.headers = res.data;
              this.changeHeaders(this.headers);
            })
            .catch((err) => console.log(err));
        })
        .then(this.$router.push({ path: "./get" }));
    },
  },
};
</script>
