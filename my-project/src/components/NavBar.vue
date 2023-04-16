<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" />
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleNavbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isNavbarActive }">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/" style="color: #f7f9fb"> Home </router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/ChatUser" style="color: #f7f9fb">
              chat</router-link
            >
          </a>
          <a class="navbar-item">
            <router-link to="/NoteUser" style="color: #f7f9fb">
              Note</router-link
            >
          </a>
          <a class="navbar-item">
            <router-link to="/PostUser" style="color: #f7f9fb">
              Post</router-link
            >
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link
                v-show="!isLoggedIn"
                to="/LoginUser"
                style="color: #f7f9fb"
              >
                <a class="button is-light">Log in</a>
              </router-link>
              <a
                class="button is-primary"
                v-show="isLoggedIn"
                href="#"
                @click="logout"
              >
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      name: "NavBar",
      isNavbarActive: false,
    };
  },
  computed: {
    isLoggedIn() {
      const userData = JSON.parse(localStorage.getItem("user"));
      return userData !== null;
    },
  },
  methods: {
    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive;
    },
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/LoginUser");
    },
  },
};
</script>

<style scoped>
/* เพิ่มระยะห่างบนของ Navbar ให้ไม่ขยับเมื่อเลื่อน Scroll */
.navbar.is-primary {
  margin-top: 0;
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
