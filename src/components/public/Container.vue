<template>
  <div class="mainContainer">
    <Sidebar />
    <ItemsGrid />
  </div>
</template>

<script>
import Sidebar from "../../components/public/Sidebar.vue";
import ItemsGrid from "../../components/public/ItemsGrid.vue";

export default {
  name: "Container",
  components: {
    Sidebar,
    ItemsGrid,
  },
};
</script>

<style>
.mainContainer {
  display: flex;
  margin: 20px;
}
</style>
