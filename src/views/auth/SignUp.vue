<template>
  <div>
    <div class="admin--header__links">
      <router-link to="/" class="connection-icon"
        ><p id="toDisconnect">Accueil</p></router-link
      >
    </div>
    <div class="login-card" id="signupcard">
      <div class="card-header">
        <router-link to="/signin" class="form-header"
          ><div id="forLogin">Se Connecter</div></router-link
        >

        <router-link to="/signup" class="form-header active"
          ><div>S'inscrire</div></router-link
        >
      </div>
      <div class="card-body">
        <form id="signupForm" @submit.prevent="signup">
          <input
            type="email"
            v-model="login"
            class="form-control"
            placeholder="@adresse mail"
          />
          <input
            type="text"
            v-model="name"
            class="form-control"
            placeholder="@nom (facultatif) "
          />
          <input
            type="text"
            v-model="firstname"
            class="form-control"
            placeholder="@prénom (facultatif)"
          />
          <input
            type="text"
            v-model="phone"
            class="form-control"
            placeholder="@téléphone (facultatif)"
          />
          <button class="formButton" type="submit" id="signupbtn">
            Inscription
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "@/_services/caller.service";

import { userService } from "@/_services";

import { mapMutations } from "vuex";

export default {
  name: "SignUp",
  data() {
    return {
      login: "",
      name: "",
      firstname: "",
      phone: "",
    };
  },
  methods: {
    ...mapMutations(["changeUsers"]),

    signup() {
      console.log(this.login);

      return Axios.post(
        "/api/users/signup",
        {
          email: this.login,
          name: this.name,
          firstname: this.firstname,
          phone: this.phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          const data = res.data;
          userService
            .getAllUsers()
            .then((res) => {
              this.users = res.data;
              console.log(this.users);
              localStorage.setItem("sessionId", data.sessionId);
              this.changeUsers(this.users);
            })
            .catch((err) => console.log(err));
        })
        .then(this.$router.push({ path: "/" }));
    },
  },
};
</script>
