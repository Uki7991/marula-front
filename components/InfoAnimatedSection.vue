<template>
    <div class="bg-white py-12 px-4 xl:p-0 dark:bg-dark transition-all duration-500">
        <div class="container mx-auto xl:flex xl:flex-row xl:w-full xl:max-w-none xl:items-center xl:h-screen">
            <div class="text-black xl:w-1/2 xl:px-8 dark:text-white transition-all duration-500">
                <div class="md:w-2/3 xl:w-auto xl:px-16">
                    <p class="text-sand text-xs text-utility">Experience</p>
                    <h3 class="font-title text-2xl font-light mt-4 md:text-4xl">Experience the Thrill of Nature and Wildlife of Namibia</h3>

                    <div class="text-base mt-5 font-description">
                        <p>
                            Looking for a truly unique and unforgettable experience? Look no further than our premium lodge
                            in Namibia, where you can immerse yourself in the stunning natural beauty and incredible wildlife
                            of this remarkable country.
                        </p>
                        <p>
                            With comfortable and luxurious accommodations nestled in the heart of a pristine national park, our
                            lodge is the perfect destination for anyone seeking an adventure unlike any other.
                        </p>
                    </div>
                </div>
            </div>
            <img src="~/assets/images/elephant.jpg" alt="" class="mt-6 w-full xl:h-screen xl:object-cover xl:object-top xl:m-0 xl:w-1/2 transition-all duration-500 delay-100">
        </div>
    </div>
</template>

<script setup lang="ts">
    const options = {
        anchors: ['page1', 'page2'],
        sectionsColor: ['#41b883', '#ff5f45'],
        onLeave: function (from, destination, direction) {
            console.log(from, destination, direction)
        }
    }
</script>