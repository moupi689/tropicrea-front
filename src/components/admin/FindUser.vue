<template>
  <div>
    <div class="flx-jcc-aic m">
      <div class="allUsers-display">
        <form @submit.prevent="" class="flx-jcc-aic">
          <div class="subformOther">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              @change="this.findUser"
              v-model="user.email"
              type="text"
              class="form-control"
              id="findUser-input"
              placeholder="@email"
            />
          </div>
        </form>
      </div>
      <div v-if="noUser" class="noUser">Utilisateur non trouvé !</div>
      <table v-if="isUser" class="allUsers-display">
        <tr>
          <th>Email</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Téléphone</th>
          <th>Supprimer</th>
        </tr>
        <tr :key="user._id">
          <td class="founduser-txt">{{ this.user.email }}</td>
          <td class="founduser-txt">{{ this.user.firstname }}</td>
          <td class="founduser-txt">{{ this.user.name }}</td>
          <td class="founduser-txt">{{ this.user.phone }}</td>
          <td
            @click="deleteUser(user._id)"
            class="user-btn delete-user"
            :name="user._id"
          >
            X
          </td>
        </tr>
      </table>
    </div>

    <RouterView />
  </div>
</template>

<script>
import { userService } from "@/_services";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FindUser",

  data() {
    return {
      id: [],
      isUser: false,
      noUser: false,
      useremail: "",
      user: [],
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },

  methods: {
    ...mapMutations(["changeUsers"]),

    findUser(e) {
      this.useremail = e.target.value;
      userService
        .findUser(this.useremail)
        .then((res) => {
          if (res.data == null) {
            this.noUser = true;
          } else {
            this.user = res.data;
            this.isUser = true;
            this.noUser = false;
          }
        })
        .catch((err) => console.log(err));
    },

    deleteUser(id) {
      userService
        .deleteUser(id)
        .then((res) => {
          userService
            .getAllUsers()
            .then((res) => {
              this.users = res.data;
              this.changeUsers(this.users);
              this.isUser = false;
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.noUser {
  font-size: 1.2em;
  color: brown;
}
</style>
