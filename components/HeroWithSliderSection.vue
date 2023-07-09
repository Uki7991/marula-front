<template>
  <div class="relative">
      <Splide :options="options">
          <SplideSlide>
              <img src="~/assets/images/bg.jpg" class="w-full h-screen object-cover" alt="">
          </SplideSlide>
          <SplideSlide>
              <img src="~/assets/images/bg.jpg" class="w-full h-screen object-cover" alt="">
          </SplideSlide>
          <SplideSlide>
              <img src="~/assets/images/bg.jpg" class="w-full h-screen object-cover" alt="">
          </SplideSlide>
          <SplideSlide>
              <img src="~/assets/images/bg.jpg" class="w-full h-screen object-cover" alt="">
          </SplideSlide>
          <SplideSlide>
              <img src="~/assets/images/bg.jpg" class="w-full h-screen object-cover" alt="">
          </SplideSlide>
      </Splide>

      <Breadcrumbs class="text-white" />
  </div>
</template>

<script setup>
  import {Splide, SplideSlide} from "@splidejs/vue-splide";
  import Breadcrumbs from "~/components/Breadcrumbs.vue";

  const options = {
      mediaQuery: 'min',
      arrows: false,
      pagination: false,
      type: 'loop',
      breakpoints: {
          1280: {
              arrows: {
                  prev: '<img src="~/assets/icons/arrow-left.svg">',
                  next: '<img src="~/assets/icons/arrow-right.svg">',
              }
          }
      }
  }
</script>
