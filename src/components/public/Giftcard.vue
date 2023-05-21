<template>
  <div>
    <GoBackLink />
    <header class="df-aic-jcc">
      <div class="giftcard__title bg-b-bs p10">
        Pour faire plaisir sans se tromper !
      </div>
    </header>
    <body>
      <div class="giftcard__container df-aic-jcc">
        <img
          src="@/components/giftcards/giftcard.webp"
          alt=""
          class="giftcard__img bg-b-bs"
          id="giftcard__img"
        />
        <div
          class="giftcard__description df-aic-jcc dfr bg-b-bs dfc"
          id="giftcard__description"
        >
          <div class="subformLayout">
            <label for="images">A l'attention de:</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="signupEmail"
            />
          </div>
          <div class="df-aic-jcc">
            <div
              @click="pickAmount"
              class="giftcard__choice df-aic-jcc p10 bg-b-bs bgcolor2 br10"
              title="5000"
            >
              5000 XPF
            </div>
            <div
              @click="pickAmount"
              class="giftcard__choice df-aic-jcc p10 bg-b-bs bgcolor2 br10"
              title="10000"
            >
              10 000 XPF
            </div>
            <div
              @click="pickAmount"
              class="giftcard__choice df-aic-jcc p10 bg-b-bs bgcolor2 br10"
              title="20000"
            >
              20 000 XPF
            </div>
          </div>
          <button
            @click="addToBasket"
            class="giftcard__btn bg-b-bs bgcolor2 br10"
            id="giftcard__btn"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import GoBackLink from "../../components/public/GoBackLink.vue";

export default {
  name: "Giftcard",

  data() {
    return {
      name: "",
      amount: "",
    };
  },

  methods: {
    pickAmount(e) {
      e.target.classList.toggle("active");
      this.amount = e.target.title;
      console.log(this.amount);
    },

    addToBasket(e) {
      if (!this.amount) {
        alert("Veuillez choisir un montant");
      } else {
        console.log(this.amount);
        console.log(this.name);
        /*return Axios.post(
          "/api/cart/item",
          {
            _id: this.getItem[0]._id,
            thumbnail: this.getItem[0].pictures.picture1,
            title: this.getItem[0].title,
            size: this.size,
            price: this.getItem[0].price,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          console.log(res.data);
          userService
            .getCart()
            .then((res) => {
              this.cart = res.data;
              this.changeCart(this.cart);
            })
            .catch((err) => console.log(err));
        });*/
      }
    },
  },
  components: {
    GoBackLink,
  },
};
</script>

<style>
.df-aic-jcc {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.dfc {
  flex-direction: column;
  gap: 40px;
}

.bg-b-bs {
  background-color: rgba(246, 234, 240, 0.7);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.p10 {
  padding: 10px;
}

header {
  margin: 50px;
}

label {
  color: #725243;
}

.giftcard__container {
  margin: 50px;
}

.giftcard__title {
  padding: 20px 30px;
  font-size: 2vw;
  border-radius: 20px;
  color: #725243;
}

.giftcard__description {
  width: 30vw;
  padding: 40px 30px;
}

.giftcard__img {
  width: 40vw;
  height: auto;
}

.form-control {
  width: 100%;
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

.bgcolor2 {
  background-color: rgba(209, 188, 177, 0.8);
}

.br10 {
  border-radius: 10px;
}

.giftcard__choice {
  opacity: 0.5;
  transform: transition 0.2s ease;
  font-size: 1vw;
}

.giftcard__choice:hover {
  cursor: pointer;
  transform: scale(1.05);
  opacity: 1;
}

.giftcard__choice.active {
  cursor: pointer;
  transform: scale(0.98);
  opacity: 1;
}

.giftcard__btn {
  transform: transition 0.2s ease;
  padding: 10px 30px;
  font-size: 1vw;
}

.giftcard__btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.giftcard__btn:active {
  cursor: pointer;
  transform: scale(0.98);
}
</style>
