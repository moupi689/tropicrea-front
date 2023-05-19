<template>
  <div class="flx-jcc-aic m">
    <div class="display-card">
      <form @submit.prevent="" class="flx-jcc-aic column gap20">
        <div class="subformLayout">
          <i class="fa-brands fa-facebook"></i>

          <input
            type="url"
            id="fb-link"
            class="form-control"
            v-model="fblink"
          />
        </div>
        <div class="subformLayout">
          <i class="fa-brands fa-instagram"></i>
          <input
            type="url"
            id="insta-link"
            class="form-control"
            v-model="instalink"
          />
        </div>
        <div class="subformLayout">
          <i class="fa-solid fa-envelope"></i>
          <input
            type="mail"
            id="email-link"
            class="form-control"
            v-model="emaillink"
          />
        </div>
        <div class="subformLayout">
          <i class="fa-solid fa-phone"></i>
          <input
            type="text"
            id="phone-link"
            class="form-control"
            v-model="phonelink"
          />
        </div>
        <button
          @click="updateLinks()"
          class="formButton"
          type="submit"
          id="addLinksBtn"
        >
          Envoyer
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Axios from "@/_services/caller.service";

import { productsService } from "@/_services";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Links",

  data() {
    return {
      id: "",
      fblink: [],
      instalink: [],
      emaillink: [],
      phonelink: [],
      links: [],
    };
  },

  computed: {
    ...mapGetters(["getLinks"]),
  },

  mounted() {
    this.fblink = this.getLinks[0].facebook;
    this.instalink = this.getLinks[0].instagram;
    this.emaillink = this.getLinks[0].email;
    this.phonelink = this.getLinks[0].phone;
  },

  methods: {
    ...mapMutations(["changeLinks"]),

    updateLinks(event) {
      this.id = this.getLinks[0]._id;

      return Axios.put(
        "/api/admin/links/" + this.id,

        {
          facebook: this.fblink,
          instagram: this.instalink,
          email: this.emaillink,
          phone: this.phonelink,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then(() => {
          productsService
            .getLinks()
            .then((res) => {
              this.links = res.data;
              this.changeLinks(this.links);
            })
            .catch((err) => console.log(err));
        })
        .then(this.$router.push({ path: "./links" }));
    },
  },
};
</script>
