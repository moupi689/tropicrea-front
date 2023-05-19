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
            v-model="user.login"
            class="form-control"
            placeholder="@adresse mail"
            id="signupEmail"
          />
          <input
            type="text"
            v-model="user.name"
            class="form-control"
            placeholder="@nom (facultatif) "
            id="signupName"
          />
          <input
            type="text"
            v-model="user.firstname"
            class="form-control"
            placeholder="@prénom (facultatif)"
            id="signupFirstname"
          />
          <input
            type="text"
            v-model="user.phone"
            class="form-control"
            placeholder="@téléphone (facultatif)"
            id="signupPhone"
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
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        login: "",
        name: "",
        firstname: "",
        phone: "",
      },
    };
  },
  methods: {
    signup() {
      console.log(this.user.login);
      console.log(this.user.name);
    },
  },
};
</script>
