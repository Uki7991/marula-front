<template>
    <section class="bg-white dark:bg-dark transition-all duration-500 py-16 px-4 flex flex-col xl:flex-row xl:items-center xl:p-0">
        <div class="flex flex-col justify-start items-start gap-6 md:gap-12 xl:px-10 xl:py-16">
            <div class="flex-col justify-start items-start gap-2 flex">
                <div class="text-sand text-xs font-utility uppercase leading-loose tracking-widest">untouched nature
                </div>
                <div class="font-title text-black text-2xl font-light dark:text-white transition-all duration-500 md:text-4xl xl:text-5xl">
                    Namibia is a unique country in South Africa
                </div>
            </div>
            <div class="dark:text-white text-lg font-description leading-normal text-black transition-all duration-500">
                On the territory of Namibia, you can find deserts, mountains, plateaus, savannas and forests. The
                climate in Namibia is very hot and dry, especially in desert areas.
            </div>
        </div>
        <div class="mt-6 xl:w-1/2 xl:mt-0">
            <div>
                <Splide :options="mainOptions" ref="main">
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                </Splide>
            </div>
            <div class="mt-4">
                <Splide :options="thumbsOptions" ref="thumbs">
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="~/assets/images/bg.jpg" alt="">
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </section>
</template>

<script setup>
import {Splide, SplideSlide} from "@splidejs/vue-splide";

const mainOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    arrows: false,
    pagination: false,
};
const thumbsOptions = {
    type: 'slide',
    rewind: true,
    gap: '1rem',
    pagination: false,
    arrows: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: 'left',
    isNavigation: true,
    updateOnMove: true,
};

const thumbs = ref();
const main = ref();

onMounted(() => {
    const thumbsSplide = thumbs.value?.splide;

    if (thumbsSplide) {
        main.value?.sync(thumbsSplide);
    }
})
</script>
