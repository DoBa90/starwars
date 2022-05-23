import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";
// import DetailPage from "../views/details.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
//   {
//     path: "/details",
//     name: "details",
//     component: DetailPage,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;