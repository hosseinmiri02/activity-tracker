import { createRouter, createWebHistory } from "vue-router";
import ActivityTracker from "../views/ActivityTracker.vue";

const routes = [
  {
    path: "/",
    name: "activitytracker",
    component: ActivityTracker,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
