<template>
  <div>
    <GoBackLink />

    <div class="info-container" id="lamarque">
      <div class="info-title">SHOWROOMS EN COURS</div>
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
  name: "InfoShowrooms",
  components: {
    GoBackLink,
  },
};
</script>

<style>
.info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px;
}

.info-title {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 2rem;
  box-shadow: var(--box-shadow);
  border: var(--border);
  background-color: var(--main-color);
}

.info-content {
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: center;
  text-align: justify;
}
</style>
