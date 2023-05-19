<template>
  <div>
    <div class="subCard-header">
      <router-link to="/admin/headers/get" class="router__link"
        ><div id="listHeaderpictures-btn" class="card-header-btn">
          Voir les en-têtes
        </div></router-link
      >
      <router-link to="/admin/headers/add" class="router__link"
        ><div id="addHeaderpicture-btn" class="card-header-btn">
          Ajouter des photos
        </div></router-link
      >
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "HeadersDashboard",
};
</script>

<style></style>
