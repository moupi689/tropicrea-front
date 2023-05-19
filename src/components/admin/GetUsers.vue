<template>
  <div class="flx-jcc-aic m gap50 column">
    <div class="allUsers-display-header">
      Il y a {{ getUsers.length }} utilisateur(s) inscrit(s)
    </div>
    <div class="allUsers-display">
      <div>
        <table>
          <tr>
            <th>Email</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Téléphone</th>
            <th>Supprimer</th>
          </tr>
          <tr v-for="user in getUsers" :key="user._id">
            <td class="founduser-txt">{{ user.email }}</td>
            <td class="founduser-txt">{{ user.firstname }}</td>
            <td class="founduser-txt">{{ user.name }}</td>
            <td class="founduser-txt">{{ user.phone }}</td>
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
    </div>
  </div>
</template>

<script>
import { userService } from "@/_services";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "GetUsers",

  data() {
    return {
      id: [],
      users: [],
    };
  },

  computed: {
    ...mapGetters(["getUsers"]),
  },

  methods: {
    ...mapMutations(["changeUsers"]),

    deleteUser(id) {
      userService
        .deleteUser(id)
        .then((res) => {
          userService
            .getAllUsers()
            .then((res) => {
              this.users = res.data;
              this.changeUsers(this.users);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.allUsers-display-header {
  display: flex;
  padding: 10px 30px;
  background-color: var(--second-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  border: var(--border);
}

.allUsers-display {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  padding: 10px 30px;
  background-color: var(--second-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  border: var(--border);
}

#foundUser-display {
  gap: 50px;
  padding: 10px 30px;
  align-items: center;
  background-color: var(--second-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  border: var(--border);
}

table,
th,
td {
  text-align: center;
  padding: 10px 40px;
}

.user-btn {
  transition: transform 0.1s ease;
  font-size: 1.5em;
}

.user-btn:hover {
  transform: scale(1.2);
  cursor: pointer;
  color: brown;
}

.founduser-txt {
  width: 33%;
  font-size: 1em;
}
</style>
