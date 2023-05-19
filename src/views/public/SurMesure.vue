<template>
  <GoBackLink />
  <div>
    <header class="header">
      <img src="@/components/mesures/mesures-header.webp" alt="" />
      <p>
        Prennez vos mesures (en cm) et reportes-les dans les cases
        correspondantes
      </p>
      <img src="@/components/mesures/mesures-header.webp" alt="" />
    </header>
    <main class="bespoke-container" id="container">
      <img src="@/components/mesures/measurements-boy.jpeg" alt="" />
      <div id="mesuresCard">
        <form id="mesuresForm">
          <div class="subformLayout">
            <p>1</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>2</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>3</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>4</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>5</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>6</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>7</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>8</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>9</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>10</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <button class="formButton" type="submit" id="mesuresBtn">
            Envoyer
          </button>
        </form>
      </div>
      <div id="mesuresCard">
        <form id="mesuresForm">
          <div class="subformLayout">
            <p>1</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>2</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>3</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>4</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>5</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>6</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>7</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>8</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>9</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <div class="subformLayout">
            <p>10</p>
            <input type="text" id="" class="mesures-form-control" />
          </div>
          <button class="formButton" type="submit" id="mesuresBtn">
            Envoyer
          </button>
        </form>
      </div>
      <img src="@/components/mesures/measurements-girl.jpeg" alt="" />
    </main>
  </div>
</template>

<script>
import GoBackLink from "../../components/public/GoBackLink.vue";

export default {
  name: "SurMesure",

  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {},

  components: {
    GoBackLink,
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.header > img {
  width: 10%;
  height: auto;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.header > p {
  margin: 30px;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 2rem;
  box-shadow: var(--box-shadow);
  border: var(--border);
  background-color: var(--main-color);
}

.bespoke-container {
  display: flex;
  flex: 25% 10% 10% 25%;
  justify-content: center;
  gap: 60px;
  margin-bottom: 50px;
}

.bespoke-container > img {
  border-radius: 20px;
}

#mesuresCard {
  display: flex;
  flex-direction: column;
  width: 10%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: var(--box-shadow);
  border: var(--border);
  border-radius: 20px;
  background-color: var(--main-color);
}

#mesuresForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subformLayout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  width: 10%;
}

.mesures-form-control {
  font-size: 1rem;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid rgba(23, 25, 25, 0.2);
  background: none;
  outline: none;
  padding: 5px 50px;
  margin-bottom: 10px;
  width: 10%;
}

.mesures-form-control::placeholder {
  color: rgba(0, 0, 0, 0.7);
}

.formButton {
  font-family: "Indie Flower", cursive, sans-serif;
  font-size: 2em;
  background-color: var(--second-color);
  border: var(--border);
  padding: 10px 40px;
  border-radius: 50px;
  margin-top: 1rem;
  font-size: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
  justify-content: center;
}

.formButton:hover {
  transform: scale(1.02);
  box-shadow: var(--box-shadow);
}
</style>
