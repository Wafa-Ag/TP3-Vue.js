import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "Presentation",
    component: () => import("@/views/AboutPage.vue"),
  },
  {
    path: "/manage",
    name: "Manage",
    component: () => import("@/views/ProductsPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
