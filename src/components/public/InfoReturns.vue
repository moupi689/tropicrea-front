<template>
  <div>
    <GoBackLink />

    <div class="info-container" id="returns">
      <div class="info-title">RETOURS</div>
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
  name: "InfoReturns",
  components: {
    GoBackLink,
  },
};
</script>
