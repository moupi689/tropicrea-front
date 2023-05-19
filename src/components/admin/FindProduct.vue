<template>
  <div class="flx-jcc-aic m">
    <div class="display-card column">
      <form class="flex-jcc-aic column" @submit.prevent="">
        <div class="subformOther">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            @change="this.findProduct"
            type="text"
            class="form-control"
            id="findProduct-input"
            placeholder="@nom de l'article"
          />
        </div>
        <div v-if="notfound" class="findProduct-error">
          article non trouvé !
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FindProduct",

  data() {
    return {
      item: [],
      itemname: "",
      notfound: false,
    };
  },

  computed: {
    ...mapGetters(["getProducts"]),
  },

  methods: {
    ...mapMutations(["changeItem"]),
    findProduct(e) {
      this.itemname = e.target.value;
      this.item = this.getProducts.filter((e) => {
        return e.title == this.itemname;
      });
      if (this.item.length == 0) {
        this.notfound = true;
        setTimeout(this.resetAlert, 1000);
      } else {
        this.changeItem(this.item);

        this.redirect();
      }
    },
    redirect() {
      this.$router.push({ path: "./add" });
    },
    resetAlert() {
      this.notfound = false;
    },
  },
};
</script>

<style>
.findProduct-error {
  color: red;
  font-size: 1.2em;
}
</style>
