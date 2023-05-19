<template>
  <div>
    <div class="subCard-header">
      <router-link to="/admin/fabrics/get" class="router__link"
        ><div id="listFabrics-btn" class="card-header-btn">
          Voir les tissus
        </div></router-link
      >
      <router-link to="/admin/fabrics/add" class="router__link"
        ><div id="addFabric-btn" class="card-header-btn">
          Ajouter des photos
        </div></router-link
      >
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "FabricsDashboard",
};
</script>

<style></style>
