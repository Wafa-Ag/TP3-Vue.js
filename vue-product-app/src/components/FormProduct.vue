<template>
  <form @submit.prevent="submitForm">
    <h2>
      {{
        prod_under_update
          ? `Update Product : ${prod_under_update.name}`
          : "Create Product"
      }}
    </h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model="name"
        required
      />
    </div>
    <div class="form-group">
      <label for="price">Price:</label>
      <input
        type="number"
        class="form-control"
        id="price"
        v-model="price"
        required
      />
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <textarea
        class="form-control"
        id="description"
        v-model="description"
        required
      ></textarea>
    </div>
    <div class="form-group">
      <label for="category">Category:</label>
      <select class="form-control" id="category" v-model="category" required>
        <option value="Games">Games</option>
        <option value="Clothes">Clothes</option>
        <option value="Food">Food</option>
        <option value="Tech">Tech</option>
      </select>
    </div>
    <div class="form-group">
      <label for="image">Image:</label>
      <input
        type="text"
        class="form-control"
        id="image"
        v-model="image"
        placeholder="Put a link to an image"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary btn-sub">Submit</button>
  </form>
</template>

<script>
export default {
  name: "FormProduct",
  props: {
    validateForm: {
      type: Function,
      required: true,
    },
    prod_under_update: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      name: "",
      price: "",
      description: "",
      category: "",
      image: "",
    };
  },
  methods: {
    submitForm() {
      let prod = {
        name: this.name,
        price: this.price,
        description: this.description,
        category: this.category,
        image: this.image,
      };
      this.validateForm(prod);

      this.name = "";
      this.price = "";
      this.description = "";
      this.category = "";
      this.image = "";
    },
  },
  watch: {
    prod_under_update: {
      handler() {
        if (this.prod_under_update) {
          this.name = this.prod_under_update.name;
          this.price = this.prod_under_update.price;
          this.description = this.prod_under_update.description;
          this.category = this.prod_under_update.category;
          this.image = this.prod_under_update.image;
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
label,
h2 {
  color: white;
}
h2 {
  text-align: center;
}
.btn-sub {
  width: 200px;
  margin: 10px auto !important;
  display: block !important;
}
</style>
