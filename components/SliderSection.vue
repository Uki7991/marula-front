<template>
    <div class="bg-white dark:bg-dark transition-all duration-500">
        <div class="container mx-auto px-4 py-10 xl:items-center xl:px-10 xl:py-24 xl:flex" :class="{'xl:flex-row': direction === 'ltr', 'xl:flex-row-reverse': direction === 'rtl'}">
            <h3 class="font-utility text-black text-sm mb-8 tracking-wider xl:w-1/3 xl:text-2xl dark:text-white transition-all duration-500" :class="{'xl:text-right': direction === 'rtl'}">Relaxing</h3>
            <div class="relative overflow-hidden flex-1">
                <client-only>
                    <splide :options="options">
                        <splide-slide>
                            <div class="">
                                <img class="xl:h-[500px] object-cover" src="~/assets/images/bg.jpg" alt="">
                                <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-title font-light text-xl xl:text-3xl">
                                    SPA</p>
                            </div>
                        </splide-slide>
                        <splide-slide>
                            <div class="">
                                <img class="xl:h-[500px] object-cover" src="~/assets/images/bg.jpg" alt="">
                                <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-title font-light text-xl xl:text-3xl">
                                    SPA</p>
                            </div>
                        </splide-slide>
                        <splide-slide>
                            <div class="">
                                <img class="xl:h-[500px] object-cover" src="~/assets/images/bg.jpg" alt="">
                                <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-title font-light text-xl xl:text-3xl">
                                    SPA</p>
                            </div>
                        </splide-slide>
                    </splide>
                </client-only>
            </div>
        </div>
    </div>
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
            perPage: 1,
            padding: padding,
            direction: props.direction,
            height: 600
        }
    }
};

const idForDrag = Date.now().toString()

// onMounted(() => {
//     const drag = document.getElementById(idForDrag);
//
//     document.addEventListener('mousemove', function (e) {
//         setTimeout(() => {
//             const left = e.clientX - 500;
//             const top = e.clientY - 290;
//             drag.style.left = left + 'px';
//             drag.style.top = top + 'px';
//             if (left < 0 || (top < 0 && top > drag.parentElement.height)) {
//                 drag.classList.add('hidden');
//             } else {
//                 drag.classList.remove('hidden');
//             }
//         }, 100)
//     })
// })
</script>

<style scoped>

</style>