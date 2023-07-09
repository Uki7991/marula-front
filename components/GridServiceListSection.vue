<template>
    <section class="bg-white dark:bg-dark transition-all duration-500">
        <div class="container mx-auto py-20 px-4 md:px-0">
            <h3 class="xl:text-center text-dark text-sm xl:text-2xl uppercase tracking-wider font-description dark:text-white transition-all duration-500">Activity</h3>

            <div class="hidden xl:grid grid-cols-2 gap-8 mt-8">
                <a href="#" class=" relative group text-white h-[250px] overflow-hidden xl:h-[400px]">
                    <div class="bg-[url('~/assets/images/lodge2.jpg')] bg-cover bg-no-repeat absolute top-0 left-0 w-full h-full transition-all duration-300 transform group-hover:scale-125"></div>
                    <div class="absolute top-0 left-0 w-full h-full bg-black/75"></div>
                    <div class="z-20 relative h-full flex justify-center items-center">
                        <h3 class="font-title font-light text-2xl max-w-[280px] uppercase text-center md:text-3xl md:max-w-[350px] xl:text-5xl xl:max-w-[560px]">MARULA GIRAFFE LODGE</h3>
                        <div class="w-10 h-10 bg-sand flex justify-center items-center absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 xl:w-16 xl:h-16">
                            >
                        </div>
                    </div>
                </a>
                <a href="#" class=" relative group text-white h-[250px] overflow-hidden xl:h-[400px]">
                    <div class="bg-[url('~/assets/images/lodge2.jpg')] bg-cover bg-no-repeat absolute top-0 left-0 w-full h-full transition-all duration-300 transform group-hover:scale-125"></div>
                    <div class="absolute top-0 left-0 w-full h-full bg-black/75"></div>
                    <div class="z-20 relative h-full flex justify-center items-center">
                        <h3 class="font-title font-light text-2xl max-w-[280px] uppercase text-center md:text-3xl md:max-w-[350px] xl:text-5xl xl:max-w-[560px]">MARULA GIRAFFE LODGE</h3>
                        <div class="w-10 h-10 bg-sand flex justify-center items-center absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 xl:w-16 xl:h-16">
                            >
                        </div>
                    </div>
                </a>
                <a href="#" class=" relative group text-white h-[250px] overflow-hidden xl:h-[400px]">
                    <div class="bg-[url('~/assets/images/lodge2.jpg')] bg-cover bg-no-repeat absolute top-0 left-0 w-full h-full transition-all duration-300 transform group-hover:scale-125"></div>
                    <div class="absolute top-0 left-0 w-full h-full bg-black/75"></div>
                    <div class="z-20 relative h-full flex justify-center items-center">
                        <h3 class="font-title font-light text-2xl max-w-[280px] uppercase text-center md:text-3xl md:max-w-[350px] xl:text-5xl xl:max-w-[560px]">MARULA GIRAFFE LODGE</h3>
                        <div class="w-10 h-10 bg-sand flex justify-center items-center absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 xl:w-16 xl:h-16">
                            >
                        </div>
                    </div>
                </a>
            </div>

            <div class="mt-8 xl:hidden">
                <Splide :options="options">
                    <SplideSlide>
                        <div class="">
                            <img class="xl:h-[500px] object-cover" src="~/assets/images/bg.jpg" alt="">
                            <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-title font-light text-xl xl:text-3xl">
                                SPA</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="">
                            <img class="xl:h-[500px] object-cover" src="~/assets/images/bg.jpg" alt="">
                            <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-title font-light text-xl xl:text-3xl">
                                SPA</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="">
                            <img class="xl:h-[500px] object-cover" src="~/assets/images/bg.jpg" alt="">
                            <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-title font-light text-xl xl:text-3xl">
                                SPA</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="">
                            <img class="xl:h-[500px] object-cover" src="~/assets/images/bg.jpg" alt="">
                            <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-title font-light text-xl xl:text-3xl">
                                SPA</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="">
                            <img class="xl:h-[500px] object-cover" src="~/assets/images/bg.jpg" alt="">
                            <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-title font-light text-xl xl:text-3xl">
                                SPA</p>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </section>
</template>

<script setup>
import {Splide, SplideSlide} from "@splidejs/vue-splide";

const props = defineProps(['direction'])

const padding = props.direction === 'ltr' ? {right: 80, left: 40} : {left: 80, right: 40}

const options = {
    rewind: false,
    perPage: 1,
    arrows: false,
    pagination: false,
    gap: '1rem',
    direction: 'ltr',
    padding: {right: 80},
    mediaQuery: 'min',
    breakpoints: {
        768: {
            perPage: 2,
        },
        1280: {
            destroy: true
        }
    }
};
</script>
