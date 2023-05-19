<template>
  <div>
    <div class="subCard-header" id="lookbookCard-header">
      <router-link to="/admin/lookbook/get" class="router__link"
        ><div id="listLookbook-btn" class="card-header-btn">
          Voir le Lookbook
        </div></router-link
      >

      <router-link to="/admin/lookbook/add" class="router__link"
        ><div id="addLookbook-btn" class="card-header-btn">
          Ajouter des photos
        </div></router-link
      >
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "LookbookDashboard",
};
</script>

<style></style>
