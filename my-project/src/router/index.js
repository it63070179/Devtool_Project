import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ChatUser from "../views/ChatUser"
import LoginUser from "../views/LoginUser"
import EventsContainer from "../views/EventsPage.vue"
import PostUser from "../views/PostUser.vue";
import NoteUser from "../views/NoteUser.vue";

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
    path: '/Events/:event',
    name: 'Events',

    component: EventsContainer
  },
  {
    path: '/NoteUser',
    name: 'NoteUser',

    component: NoteUser
  },
  {
    path: '/PostUser',
    name: 'PostUser',

    component: PostUser
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
