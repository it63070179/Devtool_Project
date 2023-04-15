import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ChatUser from "../views/ChatUser"
import LoginUser from "../views/LoginUser"
import EventsContainer from "../views/EventsPage.vue"

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
  },
  {
    path: '/Events',
    name: 'Events',

    component: EventsContainer
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
