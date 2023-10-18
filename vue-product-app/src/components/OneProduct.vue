<template>
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Sale badge-->
      <div
        class="badge bg-dark text-white position-absolute"
        style="top: 0.5rem; right: 0.5rem"
      >
        {{ product.category }}
      </div>
      <!-- Product image-->
      <img class="card-img-top" :src="product.image" alt="..." />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">{{ product.name }}</h5>
          <!-- Product price-->
          {{ product.price }}$
          <p>
            {{ product.description }}
          </p>
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <button
            class="btn btn-outline-dark mt-auto m-1"
            href="#"
            @click="ActualStartUpdate"
          >
            Edit
          </button>
          <button
            class="btn btn-outline-dark mt-auto m-1"
            href="#"
            @click="ActualDelete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneProduct",
  props: {
    product: {
      category: "",
      description: "",
      id: 0,
      image: "",
      name: "",
      price: 0,
    },
    StartUpdate: Function,
    DeleteOneProduct: Function,
  },
  methods: {
    ActualDelete() {
      this.DeleteOneProduct(this.product.id);
    },
    ActualStartUpdate() {
      this.StartUpdate(this.product);
    },
  },
};
</script>

<style></style>
