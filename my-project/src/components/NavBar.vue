<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
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
          <a class="navbar-item" href="#"> Home </a>
          <a class="navbar-item" href="#"> About </a>
          <a class="navbar-item" href="#"> Contact </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light" href="#"> Log in </a>
              <a class="button is-primary" href="#"> Sign up </a>
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
  methods: {
    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive;
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
