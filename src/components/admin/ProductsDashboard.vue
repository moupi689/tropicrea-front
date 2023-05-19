<template>
  <div>
    <div class="subCard-header">
      <router-link to="/admin/products/add" class="router__link"
        ><div id="addProduct-btn" class="card-header-btn">
          Ajouter un article
        </div></router-link
      >

      <router-link to="/admin/products/find" class="router__link">
        <div id="findProduct-btn" class="card-header-btn">
          Modifier un article
        </div></router-link
      >

      <router-link to="/admin/products/get" class="router__link"
        ><div id="listProducts-btn" class="card-header-btn">
          Lister les articles
        </div></router-link
      >
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "ProductsDashboard",
};
</script>

<style>
.card {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: var(--main-color);
  padding: 20px;
  margin: 40px;
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  border: var(--border);
}

.subCard-header {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  height: 50px;
}
</style>
