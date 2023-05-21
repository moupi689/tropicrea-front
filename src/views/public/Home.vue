<template>
  <div>
    <LogoLinks />
    <Mozaic />
    <Container />
  </div>
</template>

<script>
import LogoLinks from "../../components/public/LogoLinks.vue";
import Mozaic from "../../components/public/Mozaic.vue";
import Container from "../../components/public/Container.vue";

export default {
  name: "Home",

  components: {
    LogoLinks,
    Mozaic,
    Container,
  },
};
</script>
