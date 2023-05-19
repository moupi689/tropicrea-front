<template>
  <div>
    <HeaderLinks />
    <Logo />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import HeaderLinks from "../../components/public/HeaderLinks.vue";
import Logo from "../../components/public/Logo.vue";
import Footer from "../../components/public/Footer.vue";

export default {
  name: "PublicLayout",
  components: {
    HeaderLinks,
    Logo,
    Footer,
  },
};
</script>
