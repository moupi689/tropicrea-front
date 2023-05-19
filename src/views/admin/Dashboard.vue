<template>
  <div>
    <header>
      <!--bouton de deconnexion-->
      <div class="admin--header__links">
        <router-link to="/" class="connection-icon"
          ><p id="toDisconnect" @click="disconnect">
            {{ this.connect }}
          </p></router-link
        >
        <div class="timer" id="timer-display"></div>
        <div class="timer"></div>
      </div>
    </header>
    <!--header-->
    <div class="admin--index__background" id="form-background">
      <h1 class="admin--logo">TROPICRE Admin</h1>
    </div>
    <div class="card-header">
      <router-link to="/admin/products" class="router__link"
        ><div id="forProducts" class="card-header-btn">
          Articles en vente
        </div></router-link
      >
      <router-link to="/admin/links" class="router__link"
        ><div id="forLinks" class="card-header-btn">Liens</div></router-link
      >
      <router-link to="/admin/users" class="router__link"
        ><div id="forUsers" class="card-header-btn">
          Utilisateurs
        </div></router-link
      >
      <router-link to="/admin/lookbook" class="router__link"
        ><div id="forLookbook" class="card-header-btn">
          LookBook
        </div></router-link
      >

      <router-link to="/admin/headers" class="router__link"
        ><div id="forHeaderpictures" class="card-header-btn">
          En-têtes
        </div></router-link
      >

      <router-link to="/admin/fabrics" class="router__link"
        ><div id="forFabrics" class="card-header-btn">Tissus</div></router-link
      >
    </div>
    <RouterView />
  </div>
</template>

<script>
import router from "@/router";
import { accountService } from "@/_services";

/*let timer;

function startTimer(duration) {
  timer = duration;
  let minutes;
  let seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    this.display.textContent = `Fin de session dans ${minutes} : ${seconds}`;

    if (--timer < 0) {
      clearInterval();
      this.display.textContent = "Fin de session. Reconnexion nécessaire.";
    }
  }, 1000);
}

window.onload = function () {
  startTimer(1800);
};*/

export default {
  name: "Dashboard",

  data() {
    return {
      connect: "Déconnexion",
      isConnected: true,
      display: document.querySelector("#timer-display"),
    };
  },

  methods: {
    disconnect() {
      accountService.logout();
    },
  },
};
</script>

<style>
/*styles de la barre de liens du header*/

.admin--header__links {
  display: flex;
  flex-grow: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.timer {
  color: red;
}

#toReconnect {
  display: none;
}

.connection-icon {
  font-size: 1.5rem;
  transition: 0.3s ease;
  padding: 0px 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: 0.2s ease;
  background-color: rgb(209, 188, 177, 0.2);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.connection-icon:hover {
  transform: scale(1.05);
  cursor: pointer;
}

/*styles du logo*/

.admin--logo {
  display: flex;
  align-self: center;
  font-size: 5rem;
  margin-top: 40px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

/*styles de l'image du header*/

.admin--index__background {
  background: url("@/components/backgrounds/admin-background.jpeg");
  background-position: center;
  background-size: cover;
  height: 200px;
  box-shadow: 0px 8px 10px rgba(120, 118, 118, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.card-header-btn.active {
  box-shadow: var(--box-shadow);
  border-color: rgb(160, 156, 156, 0.8);
  transition: border-color 0.2s, boxshadow 0.2s;
}

/*condition affichage élement*/

.flx-jcc-aic {
  display: flex;
  justify-content: center;
  align-items: center;
}
.m {
  margin: 50px;
}

.gap50 {
  gap: 50px;
}

.gap20 {
  gap: 20px;
}

.wrap {
  flex-wrap: wrap;
}

.display-card {
  padding: 20px;
  background-color: var(--second-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  border: var(--border);
}

.column {
  flex-direction: column;
}

.container {
  width: 80%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 10px;
  background-color: var(--main-color);
  border-radius: 10px;
  border: 1px solid rgb(160, 156, 156, 0.5);
  box-shadow: 2px 3px 8px;
}

.card-header {
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 20px 0;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 50px;
}

.router__link {
  text-align: center;
  text-decoration: none;
  color: black;
  width: 100%;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 50px;
  user-select: none;
  cursor: pointer;
  background-color: var(--second-color);
  transition: border-color 0.2s, boxshadow 0.2s;
}

.router__link:hover {
  box-shadow: var(--box-shadow);
  border-color: rgb(160, 156, 156, 0.8);
}

.subformLayout {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 5px;
  margin-top: 20px;
}

.subformOther {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
}

.subformLayout > i {
  transform: scale(1.2);
}

.subformLayout > textarea {
  height: 100px;
  width: 200px;
  background-color: var(--second-color);
}

.subformLayout > select {
  width: 200px;
  background-color: var(--second-color);
}

.adminCard {
  width: 80%;
  background-color: var(--main-color);
  padding: 20px;
  margin: 50px;
}

.form-control {
  font-size: 1rem;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid rgba(23, 25, 25, 0.2);
  background: none;
  outline: none;
  padding: 5px 30px;
  margin-bottom: 10px;
}

.form-control::placeholder {
  color: rgba(0, 0, 0, 0.7);
}

.formButton {
  background-color: var(--second-color);
  border: var(--border);
  padding: 5px 20px;
  border-radius: 50px;
  margin-top: 30px;
  font-size: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.formButton:hover {
  transform: scale(1.02);
  box-shadow: var(--box-shadow);
}

.formButton:active {
  transform: scale(0.95);
}

.displaypictures__container {
  transition: transform 0.2s ease;
  position: relative;
}

.info-btn {
  display: block;
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 1.5rem;
  padding: 2px 10px;
  background-color: rgb(209, 188, 177, 0.95);
  border-radius: 10px;
  border: var(--border);
  z-index: 2;
}

.delete-btn {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1rem;
  padding: 2px;
  background-color: rgba(228, 211, 219, 0.95);
  border-radius: 10px;
  border: var(--border);
  z-index: 2;
}

.delete-btn:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.note {
  margin: 10px;
  font-size: smaller;
}
</style>
