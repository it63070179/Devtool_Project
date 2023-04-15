<template>
  <div>
    <NavBar />
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel__item">
          <img :src="slide.image" />
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <br />
    <br />
    <section class="container">
      <div
        class="columns features"
        style="display: flex; justify-content: center; align-items: center"
      >
        <div class="column is-4">
          <router-link to="/Events">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="../assets/schedule.jpg"
                    class="modal-button"
                    data-target="modal-image4"
                  />
                </figure>
              </div>
              <div
                class="card-content modal-button"
                data-target="modal-card2"
                @click="toggleModal"
              >
                <div class="content">
                  <h3 style="text-align: center; font-weight: bold">
                    Schedule
                  </h3>
                  <h4>
                    ตารางเรียนในแต่ละวิชาของเด็กๆ
                    ผู้ปกครองสามารถคลิกเข้ามาดูรายละเอียดตารางเรียนแต่ละวิชาของเด็กๆได้ที่นี่
                  </h4>
                  <br />
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="column is-4" data-target="modal-card">
          <router-link to="/Events">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="../assets/baby.jpg"
                    alt="Placeholder image"
                    class="modal-button"
                    data-target="modal-image2"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 style="text-align: center; font-weight: bold">
                    Class Study
                  </h3>
                  <h4>
                    รูปภาพบรรยากาศเด็กๆ ที่เรียนหนังสือภายในห้องเรียน
                    และนอกสถานที่ ให้ผู้ปกครองได้ดูในแต่ละวันเด็กๆ
                    ได้ศึกษาอะไรบ้าง
                  </h4>
                  <br />
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="column is-4">
          <router-link to="/Events">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="../assets/activity.png"
                    class="modal-button"
                    data-target="modal-image4"
                  />
                </figure>
              </div>
              <div
                class="card-content modal-button"
                data-target="modal-card2"
                @click="toggleModal"
              >
                <div class="content">
                  <h3 style="text-align: center; font-weight: bold">
                    Activity
                  </h3>
                  <h4>
                    รูปภาพเกี่ยวกับกิจกรรมของเด็กๆ
                    ให้ผู้ปกครองได้ดูกิจกรรมในแต่ละวันที่เด็กๆทำ
                    ซึ่งกิจกรรมเหล่านั้นช่วยเสริมสร้างสุขภาพ
                    ความรู้ด้านต่างๆให้กับเด็กๆ
                  </h4>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="column is-4">
          <router-link to="/Events">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="../assets/warn.png"
                    class="modal-button"
                    data-target="modal-image4"
                  />
                </figure>
              </div>
              <div
                class="card-content modal-button"
                data-target="modal-card2"
                @click="toggleModal"
              >
                <div class="content">
                  <h3 style="text-align: center; font-weight: bold">
                    Other events
                  </h3>
                  <h4>
                    กิจกรรมอื่นๆ หรือ เหตุการณ์อื่นๆที่เกิดขึ้นกับเด็กๆ
                    จะแจ้งเหตุให้กับผู้ปกครองได้ทราบ <br /><br /><br />
                  </h4>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import NavBar from "@/components/NavBar";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "HomePage",
  components: {
    Carousel,
    Slide,
    Pagination,
    NavBar,
  },
  data() {
    return {
      slides: [
        {
          image: require("../assets/test.jpeg"),
        },
        {
          image: require("../assets/logo.png"),
        },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      const userData = JSON.parse(localStorage.getItem("user"));
      return userData !== null;
    },
  },
});
</script>
