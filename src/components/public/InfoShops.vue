<template>
  <div>
    <GoBackLink />

    <div class="info-container" id="shops">
      <div class="info-title">NOS POINTS DE VENTE</div>
      <p class="info-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi
        commodi qui voluptatum, laudantium molestiae perspiciatis. Dolorem
        excepturi suscipit accusantium culpa repudiandae commodi, deserunt, eos,
        nobis nostrum vero cumque at?
      </p>
    </div>
  </div>
</template>

<script>
import GoBackLink from "../../components/public/GoBackLink.vue";

export default {
  name: "InfoShops",
  components: {
    GoBackLink,
  },
};
</script>
