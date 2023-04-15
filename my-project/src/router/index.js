import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ChatUser from "../views/ChatUser"
import LoginUser from "../views/LoginUser"

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: '/ChatUser',
    name: 'ChatUser',

    component: ChatUser
  }
  ,
  {
    path: '/LoginUser',
    name: 'LoginUser',

    component: LoginUser
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
