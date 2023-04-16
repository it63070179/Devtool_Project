<template>
  <div>
    <NavBar />
    <br />
    <br />
    <br />
    <div id="modal-card">
      <div class="modal-content is-tiny">
        <div class="card is-full">
          <div class="card-content">
            <div class="media">
              <form
                style="
                  text-align: center;
                  margin-left: auto;
                  margin-right: auto;
                  padding: auto;
                "
              >
                <div class="title">Create Note</div>

                <input
                  placeholder="title"
                  class="button is-rounded"
                  type="text"
                  style="margin-left: auto; margin-right: auto"
                />
                <div></div>
                <div
                  class="select is-rounded mt-5"
                  style="margin-left: auto; margin-right: auto"
                >
                  <select>
                    <option selected disabled>Types</option>
                    <option>General</option>
                    <option>Important</option>
                  </select>
                </div>
                <textarea
                  class="textarea mt-5"
                  placeholder="Description"
                  style="margin-left: auto; margin-right: auto"
                ></textarea>

                <div class="mt-5">
                  <button
                    class="button is-primary is-rounded is-medium is-fullwidth"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Component</p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.

              <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "NoteUser",
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
};
</script>
<style>
</style>