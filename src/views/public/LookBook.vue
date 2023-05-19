<template>
  <GoBackLink />
  <div class="lookbook_body">
    <div class="lookbook-container" id="lookbook-container">
      <div class="carrousel__container" id="carrousel__container">
        <img class="photo" :src="this.picture" />
      </div>
    </div>
    <img
      v-if="showleft"
      @click="minusIndex"
      src="@/components/icons/lookbookarrow.png"
      class="button button--left"
      id="left-btn"
    />
    <img
      v-if="showright"
      @click="plusIndex"
      src="@/components/icons/lookbookarrow.png"
      class="button button--right"
      id="right-btn"
    />
  </div>
</template>

<script>
import GoBackLink from "../../components/public/GoBackLink.vue";

import { mapGetters } from "vuex";

export default {
  name: "LookBook",

  data() {
    return {
      picture: [],
      index: "",
      showleft: false,
      showright: true,
    };
  },

  computed: {
    ...mapGetters(["getLookbook"]),
  },

  mounted() {
    this.picture = this.getLookbook[0].picture;
  },

  methods: {
    plusIndex(e) {
      this.index++;
      if (this.index == this.getLookbook.length - 1) {
        this.showright = false;
      } else {
        this.showright = true;
      }
      this.showleft = true;

      this.picture = this.getLookbook[this.index].picture;
      console.log(this.index);
    },
    minusIndex(e) {
      this.index--;
      if (this.index == 0) {
        this.showleft = false;
      } else {
        this.showleft = true;
      }
      this.showright = true;
      this.picture = this.getLookbook[this.index].picture;
      console.log(this.index);
    },
  },

  components: {
    GoBackLink,
  },
};
</script>

<style>
.lookbook_body {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

body > .lookbook-container {
  margin: 50px;
  width: 600px;
  height: 800px;
  overflow: hidden;
}

body > .lookbook-container > .carrousel__container {
  display: flex;
  flex-wrap: nowrap;
}
body > .lookbook-container > .carrousel__container > img {
  margin: 0;
  width: 600px;
  height: auto;
}

.button {
  width: 30px;
  position: absolute;
  color: antiquewhite;
  top: 47%;
  transition: transform 0.2s;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
}
.button:active {
  transform: scale(0.9);
}
.button:hover {
  opacity: 0.8;
}
.button.button--right {
  transform: rotate(180deg);
  right: 30%;
}
.button.button--left {
  left: 30%;
}
.button + .button--right:active {
  transform: rotate(180deg) scale(0.9);
}
</style>
