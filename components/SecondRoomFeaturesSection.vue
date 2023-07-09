<template>
    <section class="bg-white py-6 dark:bg-dark transition-all duration-500 xl:py-14">
        <div class="container mx-auto px-4">
            <Splide :options="options">
                <SplideSlide v-for="item in Array(5).keys()">
                    <div class="flex flex-col gap-2">
                        <p class="text-sand text-xs font-utility uppercase leading-loose tracking-widest">Food and drinks</p>
                        <ul class="list-disc flex flex-col gap-2 list-inside">
                            <li v-for="feature in features" class="text-black text-lg font-description leading-normal dark:text-white transition-all duration-500">{{ feature }}</li>
                        </ul>
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

const features = ["Wine/Champagne", "Children's menu", "Special diet menus (on request)", "Bar, restaurant, hookah", "The price includes breakfast, lunch, dinner, non-alcoholic bottled drinks, wine, beer."];
</script>