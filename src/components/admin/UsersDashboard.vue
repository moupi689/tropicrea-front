<template>
  <div>
    <div class="subCard-header">
      <router-link to="/admin/users/getusers" class="router__link"
        ><div id="listUsers-btn">Liste des utilisateurs</div></router-link
      >
      <router-link to="/admin/users/finduser" class="router__link"
        ><div id="findUser-btn">Trouver un utilisateur</div></router-link
      >
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "UsersDashboard",
};
</script>

<style>
#usersCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.usersCard-header {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  height: 50px;
  width: 60%;
}
</style>
