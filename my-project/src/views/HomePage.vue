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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import  NavBar  from "@/components/NavBar";

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
          image: require("../assets/logo.png"),
        },
        {
          image: require("../assets/logo.png"),
        },
      ],
    };
  },
});
</script>
