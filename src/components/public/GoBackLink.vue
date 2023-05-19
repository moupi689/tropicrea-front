<template>
  <div class="goback-links">
    <router-link to="/" class="goback-link">RETOUR AUX ARTICLES</router-link>
  </div>
</template>

<script>
export default {
  name: "GoBackLink",
  methods: {},
};
</script>

<style>
.goback-links {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
}
.goback-link {
  color: #a98574;
  text-shadow: 2px 2px 5px rgba(155, 46, 46, 0.5);
  text-decoration: none;
  padding: 10px;
  font-size: 1.5rem;
  transition: 0.2s ease;
}

.goback-link:hover {
  transform: scale(1.05);
  color: #725243;
}
</style>
