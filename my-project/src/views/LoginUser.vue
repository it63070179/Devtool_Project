<template>
  <div>
    <NavBar />
    <div id="modal-card" class="modal modal-fx-3dSlit is-active">
      <div class="modal-background"></div>
      <div class="modal-content is-tiny">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <form
                @submit.prevent="login"
                style="
                  text-align: center;
                  margin-left: auto;
                  margin-right: auto;
                  padding: auto;
                "
              >
                <div class="title">Login</div>
                <input
                  placeholder="Username"
                  class="button is-rounded"
                  type="text"
                  v-model="username"
                />

                <input
                  class="button is-rounded mt-2"
                  placeholder="Password"
                  type="password"
                  v-model="password"
                />
                <br />
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
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
<style>
#modal-card form {
  padding: 2rem;
  border-radius: 10px;
}
#modal-card button[type="submit"] {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}
</style>