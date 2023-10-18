<template>
  <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">Taimbres</h1>
        <p class="lead fw-normal text-white-50 mb-0">
          Manage All your Taimbres Here
        </p>
      </div>
    </div>
  </header>

  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <OneProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
          :DeleteOneProduct="DeleteOneProduct"
          :StartUpdate="StartUpdate"
        />
      </div>
    </div>
  </section>

  <div class="form">
    <FormProduct
      :validateForm="ChooseCreateOrUpdate"
      :prod_under_update="prod_under_update"
    />
  </div>
</template>

<script>
import FormProduct from "@/components/FormProduct.vue";
import OneProduct from "@/components/OneProduct.vue";

export default {
  name: "ProductsPage",
  props: {
    products: [],
    GetAllProds: Function,
    DeleteOneProduct: Function,
    UpdateProductFinal: Function,
    CreateProductFinal: Function,
    prod_under_update: Object,
    StartUpdate: Function,
  },
  components: {
    OneProduct,
    FormProduct,
  },
  async created() {
    await this.GetAllProds();
    console.log(this.products);
  },
  methods: {
    async ChooseCreateOrUpdate(prod) {
      if (this.prod_under_update) {
        await this.UpdateProductFinal({
          id: this.prod_under_update.id,
          ...prod,
        });
      } else {
        await this.CreateProductFinal(prod);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  width: 80%;
  margin: -50px auto 100px auto;
  padding: 30px;
  background-color: #212529;
}
</style>
