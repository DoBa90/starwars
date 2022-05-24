import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import DetailPage from "../views/details.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true,
  },
  {
    path: "/details",
    name: "details",
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;