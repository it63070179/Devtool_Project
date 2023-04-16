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
        <div v-for="(value, index) in datenote" :key="index">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {{ value.title }} &nbsp;<a href="#">#{{ value.warn }}</a>
              </p>
              <button class="card-header-icon" aria-label="m ore options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                {{ value.desc }}
                <br />

                <time datetime="2016-1-1"
                  >แจ้งเตือนเวลา : {{ value.date }}</time
                >
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Edit</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import axios from "axios";

export default {
  name: "NoteUser",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      datenote: "",
    };
  },
  components: {
    NavBar,
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        axios
          .get(
            `https://u4wv7mpzwk.execute-api.us-east-1.amazonaws.com/Takecare/getdatanote`
          )
          .then((response) => {
            this.datenote = response.data;
            console.log(this.datanote);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
</style>