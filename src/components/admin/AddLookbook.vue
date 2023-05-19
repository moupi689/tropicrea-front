<template>
  <div class="flx-jcc-aic m">
    <div class="display-card">
      <form
        @submit.prevent=""
        class="flx-jcc-aic column"
        enctype="multipart/form-data"
      >
        <div class="subformLayout">
          <label for="lookbook-image">Photo :</label>
          <input
            @change="addLookbookPicture($event)"
            id="lookbook-image"
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
  name: "LookBook",

  data() {
    return {
      lookbook: [],
    };
  },

  computed: {
    ...mapGetters(["getLookbook"]),
  },

  methods: {
    ...mapMutations(["changeLookbook"]),

    addLookbookPicture(event) {
      return Axios.post(
        "/api/lookbook",
        {
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
            .getLookbook()
            .then((res) => {
              this.lookbook = res.data;
              this.changeLookbook(this.lookbook);
            })
            .catch((err) => console.log(err));
        })
        .then(this.$router.push({ path: "./get" }));
    },
  },
};
</script>
