<template>
  <div>
    <NavBar />

    <div style="height: 100vh">
      <PrettyChatWindow
        v-if="isLoggedIn"
        :projectId="projectId"
        :username="username"
        :secret="secret"
      />
      <div v-else>
        <h1>Please log in to access this page</h1>
        <router-link to="/LoginUser">Log in</router-link>
      </div>
    </div>
  </div>
</template>
<style>
.ce-new-chat-button {
  width: 32px;
  position: relative;
  bottom: 22px;
}
</style>
<script>
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { applyReactInVue } from "veaury";
import NavBar from "@/components/NavBar";

export default {
  name: "ChatUser",
  data() {
    return {
      projectId: "e2e1ff37-4134-4de1-928e-df09e9c3d648",
    };
  },

  components: {
    PrettyChatWindow: applyReactInVue(PrettyChatWindow),
    NavBar,
  },
  computed: {
    isLoggedIn() {
      const userData = JSON.parse(localStorage.getItem("user"));
      return userData !== null;
    },
    username() {
      const userData = JSON.parse(localStorage.getItem("user"));
      return userData ? userData.username : "";
    },
    secret() {
      const userData = JSON.parse(localStorage.getItem("user"));
      return userData ? userData.secret : "";
    },
  },
};
</script>