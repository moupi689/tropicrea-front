<template>
  <div>
    <div class="mozaic-container">
      <div class="mozaic__left">
        <img src="@/components/backgrounds/index__background2.jpeg" alt="" />
      </div>
      <div class="mozaic__middle">
        <div class="mozaic__text">CREATION TEXTILE, MADE IN TAHITI</div>
        <img src="@/components/backgrounds/index__background1.jpeg" alt="" />
      </div>
      <div class="mozaic__right">
        <img src="@/components/backgrounds/index__background3.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mozaic",
};
</script>

<style>
.mozaic-container {
  background-color: rgba(209, 188, 177, 0.4);
  box-shadow: 0px 8px 10px rgba(120, 118, 118, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  padding: 30px;
}
.mozaic-container > .mozaic__left > img {
  width: 30vw;
  height: auto;
  border-radius: 25% 25% 5% 5%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
.mozaic-container > .mozaic__middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
}
.mozaic-container > .mozaic__middle > .mozaic__text {
  width: 35vw;
  color: #725243;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  font-size: 4vw;
  text-align: center;
}
.mozaic-container > .mozaic__middle > img {
  border-radius: 5%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  width: 30vw;
  height: auto;
}
.mozaic-container > .mozaic__right > img {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  width: 30vw;
  height: auto;
  border-radius: 25% 25% 5% 5%;
}
</style>
