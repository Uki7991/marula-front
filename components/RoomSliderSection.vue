<template>
  <div class="bg-white dark:bg-dark py-4 transition-all duration-500">
      <Splide :options="options">
          <SplideSlide v-for="slide in Array(10).keys()">
              <img src="~/assets/images/bg.jpg" class="" alt="">
          </SplideSlide>
      </Splide>
  </div>
</template>

<script setup>
import {Splide, SplideSlide} from "@splidejs/vue-splide";

const options = {
    arrows: false,
    pagination: false,
    padding: {right: 80},
    gap: 16,
    mediaQuery: 'min',
    breakpoints: {
        768: {
            perPage: 2,
            padding: {right: 80, left: 80}
        },
        1280: {
            type: 'loop',
            focus: 'center',
            padding: {right: 0, left: 0},
        }
    }
};
</script>