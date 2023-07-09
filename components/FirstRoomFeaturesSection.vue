<template>
    <section class="bg-white dark:bg-dark transition-all duration-500 flex">
        <div class="container mx-auto px-4 py-8 flex-col justify-start items-start inline-flex space-y-7 md:py-14 xl:flex-row xl:justify-between xl:items-center">
            <div class="xl:w-1/2">
                <p class="text-sand text-xs font-normal font-utility uppercase leading-loose tracking-widest">
                    EXTRAORDINARY INTERIOR
                </p>
                <p class="text-black text-2xl font-title font-light dark:text-white transition-all duration-500 mt-3 md:text-4xl xl:text-5xl">Marula Rhino Lodge
                    VIP Bungalov</p>
                <div class="text-black text-lg font-normal font-description leading-normal dark:text-white transition-all duration-500 mt-5 flex flex-col gap-3 xl:mt-10">
                    <p class="">Our
                        Superior King Room is the epitome of luxury and sophistication. Boasting two spacious rooms, this
                        room is perfect for those seeking a little extra space and privacy during their stay. The interior
                        is elegantly designed with high-end furnishings and lavish decor, creating an ambiance of opulence
                        and comfort.
                    </p>
                    <p>
                        Guests can step out onto their private balcony and take in the breathtaking views of the surrounding
                        area or enjoy a refreshing dip in the nearby pool, accessible directly from the room. The bedroom
                        features a plush king-size bed, while the separate living area is perfect for lounging and
                        entertaining guests.
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-7 xl:w-1/3">
                <div class="flex flex-col gap-2 md:flex-row md:max-w-[80%] md:gap-10 xl:max-w-none">
                    <ul class="list-disc list-inside flex flex-col gap-2 xl:list-outside">
                        <li v-for="feature in features"
                            class="text-black text-lg font-normal font-description leading-normal dark:text-white transition-all duration-500">
                            {{ feature }}
                        </li>
                    </ul>
                    <ul class="list-disc list-inside flex flex-col gap-2 xl:list-outside">
                        <li v-for="feature in features2"
                            class="text-black text-lg font-normal font-description leading-normal dark:text-white transition-all duration-500">
                            {{ feature }}
                        </li>
                    </ul>
                </div>

                <div>
                    <a href="#"
                       class="text-sand text-xs font-normal font-utility uppercase leading-loose tracking-widest">more</a>
                </div>
            </div>


        </div>
    </section>
</template>
<script setup lang="ts">

const features = ['Bed', 'Table', 'Shower', 'Toilet', 'Mosquito net, mosquito repellents', 'Wake-up service']
const features2 = ['Clothes hanger', 'Terrace, panoramic doors', 'Safe', 'Air conditioning, hair dryer, Wi-fi, table lamp', 'Unlimited mini bar in the room']

</script>