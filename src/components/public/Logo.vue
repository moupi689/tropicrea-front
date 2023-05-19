<template>
  <div>
    <router-link to="/"><h1 class="logo">TROPICREA</h1></router-link>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style>
.logo {
  background-color: rgba(246, 234, 240, 0.7);
  display: flex;
  justify-content: center;
  font-size: 8vw;
  padding-bottom: 50px;
  color: rgb(234, 174, 208);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  font-family: "Playfair Display", serif;
  text-decoration: none;
  box-shadow: 0px 5px 5px rgba(120, 118, 118, 0.2);
}

a {
  text-decoration: none;
}
</style>
