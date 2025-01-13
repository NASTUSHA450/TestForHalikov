import { createRouter, createMemoryHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: `/`,
  },
  { path: "/", component: Dashboard },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
