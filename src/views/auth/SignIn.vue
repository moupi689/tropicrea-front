<template>
  <div>
    <div class="admin--header__links">
      <router-link to="/" class="connection-icon"
        ><p id="toDisconnect">Accueil</p></router-link
      >
    </div>
    <div class="login-card" id="logincard">
      <div class="card-header">
        <router-link to="/signin" class="form-header active"
          ><div>Se Connecter</div></router-link
        >

        <router-link to="/signup" class="form-header"
          ><div id="forSignup">S'inscrire</div></router-link
        >
      </div>
      <div class="card-body">
        <form id="loginForm" @submit.prevent="login">
          <input
            @change="checkAdmin"
            type="email"
            class="form-control"
            id="loginId"
            v-model="user.email"
            placeholder="@adresse mail"
          />
          <input
            type="password"
            class="form-control toggle-input"
            id="loginPassword"
            v-model="user.password"
            placeholder="@mot de passe"
          />
          <button class="formButton" type="submit">Connexion</button>
          <div id="google-btn"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapMutations } from "vuex";

import { accountService } from "@/_services";

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  beforeUnmount() {
    this.getCart();
    this.getWishlist();
  },

  methods: {
    ...mapMutations(["changeUserSessionID"]),
    login() {
      if (this.user.email == "admin@admin") {
        //login admin
        accountService
          .loginAdmin(this.user)
          .then((res) => {
            const token = res.data.token;
            if (token != undefined) {
              accountService.saveToken(token);
              this.$router.push("/admin");
            } else {
              this.$router.push("/");
            }
          })
          .catch((err) => console.log(err));
      } else {
        //login utilisateur
        accountService
          .loginUser({ email: this.user.email })
          .then((res) => {
            const data = res.data;
            console.log(data);
            localStorage.setItem(
              "tropicrea_user_session",
              data.tropicrea_user_session
            );
            const id = data.tropicrea_user_session;
            this.changeUserSessionID(id);
            this.$router.push("/");
          })
          .catch((err) => console.log(err));
      }
    },
    checkAdmin() {
      let toggle = document.querySelector(".toggle-input");
      if (this.user.email === "admin@admin") {
        toggle.style.display = "flex";
      }
    },
    getCart() {
      console.log("test getcart");
    },
    getWishlist() {
      console.log("test getwishlist");
    },
  },
};
</script>

<style>
.admin--header__links {
  margin: 30px;
}

.toggle-input {
  display: none;
}

.login-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 50px;
  padding: 20px 40px;
  background-color: var(--main-color);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.login-card > .card-header {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 30px 0;
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 50px;
}
.card > .card-body {
  text-align: center;
  width: 80%;
}

.form-header {
  text-align: center;
  font-size: 1rem;
  color: #725243;
  flex: 50%;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 50px;
  cursor: pointer;
  background-color: rgba(209, 188, 177, 0.4);
}

.card-header .form-header.active {
  box-shadow: 2px 3px 8px;
  border-color: rgba(160, 156, 156, 0.8);
}

#loginForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#signupForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-control {
  width: 80%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid rgba(23, 25, 25, 0.3);
  background: none;
  outline: none;
  padding: 10px 5px;
  font-size: 1rem;
  margin-bottom: 20px;
  color: #725243;
}

.form-control::placeholder {
  color: #725243;
}

.formButton {
  font-family: "Montserrat", sans-serif;
  color: #725243;
  font-size: 1rem;
  background-color: rgba(209, 188, 177, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 40px;
  border-radius: 50px;
  margin-top: 1rem;
  font-size: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  justify-content: center;
  position: relative;
}
.formButton:hover {
  cursor: pointer;
  transform: scale(1.02);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.google-btnn {
  margin-top: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: rgba(209, 188, 177, 0.4);
}
.google-btnn:hover {
  cursor: pointer;
  transform: scale(1.02);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
