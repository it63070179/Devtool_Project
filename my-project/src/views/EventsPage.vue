<template>
  <div>
    <NavBar />
    <br />
    <br />
    <section class="container">
      <div class="columns features">
        <div
          class="column is-4 mt-4"
          data-target="modal-card"
          v-for="(value, index) in datapost"
          :key="index"
        >
          <div
            class="card is-shady"
            style="height: 100%"
            @click="isActive[index] = true"
          >
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="value.image"
                  alt="Placeholder image"
                  class="modal-button"
                  data-target="modal-image2"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>{{ value.title }}</h4>
                <p>
                  {{ value.desc }}
                </p>
                <span
                  class="button is-link modal-button"
                  data-target="modal-image2"
                  >โพสเมื่อเวลา : {{ value.date }}</span
                >
              </div>
            </div>
          </div>
          <div
            id="modal-card"
            class="modal modal-fx-3dSlit"
            :class="{ 'is-active': isActive[index] }"
            @click="isActive[index] = false"
          >
            <div class="modal-background"></div>
            <div class="modal-content is-tiny">
              <!-- content -->
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img :src="value.image" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">{{ value.title }}</p>
                    </div>
                  </div>
                  <div class="content">
                    {{ value.desc }}
                    <br />
                    <time>โพสเมื่อเวลา : {{ value.date }}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  ===============
    HERE BE MODALS
    ===============  -->
    <!-- 3dFlipVertical card tiny -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar";
import "bulma-modal-fx/dist/css/modal-fx.min.css";
import "bulma-modal-fx/dist/js/modal-fx.min.js";

import "vue3-carousel/dist/carousel.css";
import axios from "axios";
export default defineComponent({
  name: "EventsContainer",
  components: {
    NavBar,
  },
  created() {
    this.fetchData(this.$route.params.event);
  },
  data() {
    return {
      isActive: [],
      datapost: [],
    };
  },
  methods: {
    async fetchData(event) {
      try {
        const response = await axios.get(
          `https://u4wv7mpzwk.execute-api.us-east-1.amazonaws.com/Takecare/getdata`
        );
        const data = Array.from(response.data); // แปลงข้อมูลที่ได้รับมาเป็นอาร์เรย์
        const datall = data.filter((item) => item.type === event);

        this.datapost = datall;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
