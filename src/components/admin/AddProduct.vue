<template>
  <div class="flx-jcc-aic m">
    <div class="display-card">
      <form
        @submit.prevent=""
        class="addProductForm"
        id="addProductForm"
        enctype="multipart/form-data"
      >
        <div class="subformLayout">
          <label for="category">Catégorie :</label>
          <select v-model="category" name="category" id="category">
            <option value="" selected>-</option>
            <option value="robes">Robes</option>
            <option value="pantalons">Pantalons</option>
            <option value="shorts">Shorts</option>
            <option value="combinaisons">Combinaisons</option>
            <option value="tops">Tops</option>
            <option value="kimonos">Kimonos</option>
            <option value="jupes">Jupes</option>
            <option value="chemises">Chemises</option>
            <option value="accessoires">Accessoires</option>
            <option value="bijoux">Bijoux</option>
          </select>
        </div>
        <div class="subformLayout">
          <label for="gender">Genre :</label>
          <select v-model="gender" name="gender" id="gender">
            <option value="" selected>-</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
        </div>
        <div class="subformLayout">
          <label for="fabric">Matière :</label>
          <select v-model="fabric" name="fabric" id="fabric">
            <option value="" selected>-</option>
            <option value="coton">Coton</option>
            <option value="fibranne">Fibranne</option>
          </select>
        </div>
        <div class="subformLayout">
          <label for="tissue">Tissu :</label>
          <select v-model="tissue" name="tissue" id="tissue">
            <option value="" selected>-</option>
            <option value="tissu1">tissu 1</option>
            <option value="tissu2">tissu 2</option>
            <option value="tissu2">tissu 3</option>
          </select>
        </div>
        <div class="subformLayout">
          <label for="title">Nom :</label>
          <input
            v-model="title"
            id="title"
            type="text"
            name="title"
            class="form-control"
            placeholder="@en minuscules"
          />
        </div>
        <div class="subformLayout">
          <label for="description">Description :</label>
          <textarea
            v-model="description"
            id="description"
            type="text"
            name="description"
            class=""
          ></textarea>
        </div>
        <div class="subformLayout">
          <label for="price">Prix (xpf) :</label>
          <input
            v-model="price"
            id="price"
            type="text"
            name="price"
            class="form-control"
          />
        </div>
        <div class="subformOther">
          <label for="inStock">En stock :</label>
          <input
            v-model="inStock"
            id="inStock"
            type="checkbox"
            name="inStock"
            checked
            class=""
          />
        </div>
        <div class="subformOther">
          <label for="isNewItem">Nouveauté :</label>
          <input
            v-model="isNewItem"
            id="isNewItem"
            type="checkbox"
            name="isNewItem"
            class=""
          />
        </div>
        <div class="subformLayout">
          <label for="images">Photos (maximum 4):</label>
          <input @change="" id="images" type="file" multiple name="image" />
        </div>
        <button
          v-if="toUpdate"
          @click="updateProduct()"
          type="submit"
          class="formButton"
          id="addProduct-submit"
        >
          Modifier
        </button>
        <button
          @click="addProduct()"
          v-else
          type="submit"
          class="formButton"
          id="addProduct-submit"
        >
          Envoyer
        </button>
        <div id="submit-btn--info"></div>
      </form>
    </div>
  </div>
</template>

<script>
import Axios from "@/_services/caller.service";

import { productsService } from "@/_services";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Addproduct",

  data() {
    return {
      toUpdate: false,
      items: [],
      id: [],
      category: [],
      gender: [],
      fabric: [],
      tissue: [],
      title: [],
      description: [],
      price: [],
      inStock: false,
      isNewItem: false,
      i: [],
      images: [],
    };
  },

  computed: {
    ...mapGetters(["getItem", "getProducts"]),
  },

  mounted() {
    if (this.getItem[0]) {
      this.toUpdate = true;
      this.id = this.getItem[0]._id;
      this.category = this.getItem[0].category;
      this.gender = this.getItem[0].gender;
      this.fabric = this.getItem[0].fabric;
      this.tissue = this.getItem[0].tissue;
      this.title = this.getItem[0].title;
      this.description = this.getItem[0].description;
      this.price = this.getItem[0].price;
      this.inStock = this.getItem[0].inStock;
      this.isNewItem = this.getItem[0].isNewItem;
    }
  },

  unmounted() {
    this.item = [];
    this.changeItem(this.item);
  },

  methods: {
    ...mapMutations(["changeItem", "changeProducts"]),

    addProduct(event) {
      const formData = new FormData();

      formData.append("category", this.category);
      formData.append("gender", this.gender);
      formData.append("fabric", this.fabric);
      formData.append("tissue", this.tissue);
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("price", this.price);
      formData.append("inStock", this.inStock);
      formData.append("isNewItem", this.isNewItem);

      const images = document.getElementById("images");
      console.log(images.files);

      for (let i = 0; i < images.files.length; i++) {
        formData.append("image", images.files[i]);
      }

      return Axios.post("/api/products/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(() => {
          productsService
            .getItems()
            .then((res) => {
              this.items = res.data;
              this.changeProducts(this.items);
            })
            .catch((err) => console.log(err));
        })
        .then(this.$router.push({ path: "./get" }));
    },
  },
};
</script>

<style>
.addProductForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

#submit-btn--info {
  color: red;
}
</style>
