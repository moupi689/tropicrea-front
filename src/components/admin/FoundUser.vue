<template>
  <div>
    <div id="foundUser-display" class="toggledisplay">{{ user_email }}</div>
  </div>
</template>

<script>
export default {
  name: "founduser",
  props: ["user_email"],
};
</script>

<style>
#foundUser-display {
  gap: 50px;
  margin: 50px;
  padding: 10px 30px;
  align-items: center;
  background-color: var(--second-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  border: var(--border);
}
</style>
