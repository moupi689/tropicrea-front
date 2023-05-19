<template>
  <GoBackLink />
  <div class="sizeguide-container">
    <header class="header">
      <!--<img src="../src/images/mesures/mesures-header.webp" alt="" />-->
      <p>Guide des tailles</p>
      <!--<img src="../src/images/mesures/mesures-header.webp" alt="" />-->
    </header>
    <main>
      <div class="sizeguide-content-container">
        <div class="sizeguide-title">Taille S</div>
        <p class="sizeguide-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi
          commodi qui voluptatum, laudantium molestiae perspiciatis. Dolorem
          excepturi suscipit accusantium culpa repudiandae commodi, deserunt,
          eos, nobis nostrum vero cumque at?
        </p>
      </div>
      <div class="sizeguide-content-container">
        <div class="sizeguide-title">Taille M</div>
        <p class="sizeguide-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi
          commodi qui voluptatum, laudantium molestiae perspiciatis. Dolorem
          excepturi suscipit accusantium culpa repudiandae commodi, deserunt,
          eos, nobis nostrum vero cumque at?
        </p>
      </div>
      <div class="sizeguide-content-container">
        <div class="sizeguide-title">Taille L</div>
        <p class="sizeguide-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi
          commodi qui voluptatum, laudantium molestiae perspiciatis. Dolorem
          excepturi suscipit accusantium culpa repudiandae commodi, deserunt,
          eos, nobis nostrum vero cumque at?
        </p>
      </div>
      <div class="sizeguide-content-container">
        <div class="sizeguide-title">Taille XL</div>
        <p class="sizeguide-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi
          commodi qui voluptatum, laudantium molestiae perspiciatis. Dolorem
          excepturi suscipit accusantium culpa repudiandae commodi, deserunt,
          eos, nobis nostrum vero cumque at?
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import GoBackLink from "../../components/public/GoBackLink.vue";

export default {
  name: "GuideTailles",

  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {},

  components: {
    GoBackLink,
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.header > img {
  width: 10%;
  height: auto;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.header > p {
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 2rem;
  box-shadow: var(--box-shadow);
  border: var(--border);
  background-color: var(--main-color);
}

.sizeguide-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
}

.sizeguide-content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sizeguide-title {
  display: flex;
  justify-content: center;
  margin: 30px;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 2rem;
  box-shadow: var(--box-shadow);
  border: var(--border);
  background-color: var(--main-color);
}

.sizeguide-content {
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  text-align: justify;
}
</style>
