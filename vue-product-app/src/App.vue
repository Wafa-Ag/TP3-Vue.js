<template>
  <NavBarComponent
    :showPresentationPage="showPresentationPage"
    :showManagePage="showManagePage"
  />

  <div v-if="currentRoute === 'presentation'">
    <PresentationPage />
  </div>
  <div v-else-if="currentRoute === 'manage'">
    <ProductsPage
      :products="products"
      :GetAllProds="GetAllProds"
      :DeleteOneProduct="DeleteOneProduct"
      :UpdateProductFinal="UpdateProductFinal"
      :CreateProductFinal="CreateProductFinal"
      :prod_under_update="prod_under_update"
      :StartUpdate="StartUpdate"
    />
  </div>
</template>

<script>
import NavBarComponent from "./components/Navbar.vue";
// eslint-disable-next-line no-unused-vars
import {
  getAllProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} from "./services/ManageProducts";

import PresentationPage from "@/views/AboutPage.vue";
import ProductsPage from "@/views/ProductsPage.vue";

export default {
  name: "App",
  components: {
    NavBarComponent,
    PresentationPage,
    ProductsPage,
  },
  data() {
    return {
      currentRoute: "presentation",
      products: [],
      prod_under_update: null,
    };
  },
  methods: {
    showPresentationPage() {
      this.currentRoute = "presentation";
    },
    showManagePage() {
      this.currentRoute = "manage";
    },
    async CreateProductFinal(product) {
      await createProduct(product);
      this.products = await getAllProducts();
    },
    async StartUpdate(product) {
      this.prod_under_update = product;
    },
    async UpdateProductFinal(product) {
      await updateProduct(product);
      this.products = await getAllProducts();
      this.prod_under_update = null;
    },
    async GetAllProds() {
      this.products = await getAllProducts();
    },
    async DeleteOneProduct(id) {
      await deleteProduct(id);
      this.products = await getAllProducts();
    },
  },
};
</script>

<style></style>
