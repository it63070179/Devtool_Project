<template>
  <div>
    <NavBar />
    <div class="login-page">
      <div class="card">
        <form @submit.prevent="login">
          <div class="title">Login</div>
          <input placeholder="Username" type="text" v-model="username" />
          <br />
          <input placeholder="Password" type="password" v-model="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavBar from "@/components/NavBar";

const loginRest = async (username, secret) => {
  const response = await axios.get("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "e2e1ff37-4134-4de1-928e-df09e9c3d648",
      "User-Name": username,
      "User-Secret": secret,
    },
  });

  return response;
};

export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
    };
  },
  components: {
    NavBar,
  },
  methods: {
    login() {
      loginRest(this.username, this.password)
        .then((response) => {
          const userData = { ...response.data, secret: this.password };
          localStorage.setItem("user", JSON.stringify(userData));
          this.$emit("onAuth", userData);
          this.$router.push("/");
        })
        .catch((error) => console.log("Login error", error));
    },
  },
};
</script>