<template>
  <div class="notfound-container">
    <GoBackLink />
    <div class="card">
      <p class="notfound-text">Oups ! Page non trouvée ! 404 Not found</p>
    </div>
  </div>
</template>

<script>
import GoBackLink from "../../components/public/GoBackLink.vue";

export default {
  name: "NotFound",
  components: {
    GoBackLink,
  },
};
</script>

<style>
.notfound-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.notfound-text {
  font-size: 2em;
}
</style>
