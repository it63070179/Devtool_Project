<template>
  <div>
    <NavBar />
    <div id="modal-card" class="modal modal-fx-3dSlit is-active">
      <div class="modal-background"></div>
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
                <div class="title">Create Post</div>

                <input
                  placeholder="title"
                  class="button is-rounded"
                  type="text"
                  style="margin-left: auto; margin-right: auto"
                />

                <textarea
                  class="textarea mt-5"
                  placeholder="Description"
                  style="margin-left: auto; margin-right: auto"
                ></textarea>

                <div class="file is-centered mt-5">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume" />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label"> Choose a file… </span>
                    </span>
                  </label>
                </div>

                <div
                  class="select is-rounded mt-5"
                  style="margin-left: auto; margin-right: auto"
                >
                  <select>
                    <option selected disabled>Types</option>
                    <option>Schedule</option>
                    <option>Class Study</option>
                    <option>Activity</option>
                    <option>Other Events</option>
                  </select>
                </div>
                <div class="mt-5">
                  <button class="button is-primary is-rounded is-medium is-fullwidth">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "PostUser",
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