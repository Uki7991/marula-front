<template>
  <section class="bg-white dark:bg-dark transition-all duration-500">
      <div class="container mx-auto py-6 md:py-14 px-4">
          <Splide :options="options">
              <SplideSlide v-for="item in Array(5).keys()">
                  <div class="flex flex-col gap-2">
                      <p class="text-sand text-xs font-utility uppercase leading-loose tracking-widest">Training</p>
                      <p class="text-black dark:text-white transition-all duration-500 font-description">
                          Before the start of riding, guests receive a short training that will help them master the basics of horse management and safety during the trip
                      </p>
                  </div>
              </SplideSlide>
          </Splide>
      </div>
  </section>
</template>

<script setup>
import {Splide, SplideSlide} from "@splidejs/vue-splide";

const options = {
    fixedWidth: 220,
    gap: 20,
    arrows: false,
    pagination: false,
    padding: {right: 80},
    mediaQuery: 'min',
    breakpoints: {
        1024: {
            gap: 95,
        }
    }
}
</script>
