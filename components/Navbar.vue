<template>
    <header class="font-utility text-white fixed w-full bg-gradient-to-b from-black/70 via-black/20 to-transparent z-50">
        <div class="container mx-auto px-4 py-6 flex justify-between items-center static text-xs md:px-8 xl:px-10 relative min-h-[120px]">
            <nav>
                <img @click="isOpenMenu = !isOpenMenu" class="cursor-pointer xl:hidden" src="~/assets/icons/burger.svg" alt="">
                <ul class="space-x-10 hidden xl:flex">
                    <li class="">
                        <a class="hover:text-sand transition-all duration-300" href="#">
                            Philosophy
                        </a>
                    </li>
                    <li class="relative group">
                        <a class="group-hover:text-sand transition-all duration-300" href="#">
                            The Lodges
                        </a>
                        <ul class="hidden flex-col mt-4 min-w-max absolute top-0 pt-4 left-0 group-hover:flex transition-all duration-500">
                            <li class="">
                                <a class="py-2 px-4 bg-dark hover:bg-gray-500 block" href="#">room</a>
                            </li>
                            <li class="">
                                <a class="py-2 px-4 bg-dark hover:bg-gray-500 block" href="#">room</a>
                            </li>
                            <li class="">
                                <a class="py-2 px-4 bg-dark hover:bg-gray-500 block" href="#">room</a>
                            </li>
                            <li class="">
                                <a class="py-2 px-4 bg-dark hover:bg-gray-500 block" href="#">room</a>
                            </li>
                        </ul>
                    </li>
                    <li class="">
                        <a class="hover:text-sand transition-all duration-300" href="#">
                            Services
                        </a>
                    </li>
                    <li class="">
                        <a class="hover:text-sand transition-all duration-300" href="#">
                            Wild life
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="flex flex-col items-center justify-center space-y-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src="~/assets/logo.svg" alt="">
                <img src="~/assets/under-logo.svg" alt="">
            </div>
            <nav class="flex items-center space-x-4 md:space-x-11">
                <ul class="hidden xl:block">
                    <li>
                        <a href="#">
                            Contacts
                        </a>
                    </li>
                </ul>

                <div class="flex items-center space-x-1 cursor-pointer">
                    <span>EN</span>
                    <img src="~/assets/icons/arrow.svg" alt="">
                </div>
                <img class="cursor-pointer w-5 h-5" @click="toggleDarkMode()" :src="darkModeSrc" alt="">
                <BookButton class="hidden xl:block">
                    Book staying
                </BookButton>
            </nav>
        </div>
        <nav class="h-screen z-50 w-screen bg-black top-0 left-0 flex flex-col justify-around items-center transition-all transform -translate-x-full duration-500 fixed xl:hidden" :class="{'translate-x-0': isOpenMenu}">
            <img @click="isOpenMenu = !isOpenMenu" src="~/assets/icons/x.svg" class="w-7 h-7 absolute top-5 right-5 cursor-pointer" alt="">
            <ul class="mx-auto py-[20%] flex flex-col space-y-12 text-center">
                <li>
                    <a href="#">
                        Philosophy
                    </a>
                </li>
                <li>
                    <a href="#">
                        The Lodges
                    </a>
                </li>
                <li>
                    <a href="#">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#">
                        Wild life
                    </a>
                </li>
                <li>
                    <a href="#">
                        Contacts
                    </a>
                </li>
            </ul>

            <Socials />
        </nav>

        
    </header>
</template>

<script setup>
    import BookButton from "~/components/BookButton.vue";
    import Socials from "~/components/Socials.vue";
    import sun from '~/assets/icons/sun.svg';
    import moon from '~/assets/icons/moon.svg';

    const isOpenMenu = ref(false);
    const darkModeSrc = ref(sun);

    const toggleDarkMode = () => {
        if (document.documentElement.classList.contains('dark')) {
            darkModeSrc.value = moon;
            document.documentElement.classList.remove('dark')
        } else {
            darkModeSrc.value = sun;
            document.documentElement.classList.add('dark')
        }
    }
</script>