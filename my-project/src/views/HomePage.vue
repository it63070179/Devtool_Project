<template>
  <div class="carousel">
    <div class="carousel-container">
      <div class="carousel-item" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.caption" />
        <div class="carousel-caption">{{ slide.caption }}</div>
      </div>
    </div>
    <div class="carousel-navigation">
      <div class="carousel-nav-left" @click="prevSlide">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="carousel-nav-right" @click="nextSlide">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { onMounted, reactive } from "vue";
import bulmaCarousel from 'bulma-carousel';

export default defineComponent({
  name: "HomeView",
//   components: {
//     NavBar,
//     MyCarosel,
//   },
  props: {
    slides: {
      type: Array,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    autoplaySpeed: {
      type: Number,
      default: 4000,
    },
  },
  setup(props) {
    const state = reactive({
      carousel: null,
    });

    const prevSlide = () => {
      state.carousel.prev();
    };

    const nextSlide = () => {
      state.carousel.next();
    };

    onMounted(() => {
      state.carousel = bulmaCarousel.attach(".carousel", {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        autoplay: props.autoplay,
        autoplaySpeed: props.autoplaySpeed,
      })[0];
    });

    return {
      prevSlide,
      nextSlide,
    };
  },
});
</script>

<style scoped>
.carousel {
  position: relative;
  margin: 0 auto;
}

.carousel-item {
  position: relative;
  overflow: hidden;
}
img {
  display: block;
  width: 100%;
}
.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 18px;
  text-align: center;
}

.carousel-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 1;
}
.carousel-nav-left,
.carousel-nav-right {
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
}
.carousel-nav-left {
  left: 0;
}
.carousel-nav-right {
  right: 0;
}
</style>