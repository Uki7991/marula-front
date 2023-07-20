<template>
    <div class="bg-black text-white font-utility text-xs">
        <div class="container mx-auto py-8 px-14">
            <h2 class="uppercase text-2xl text-center">BOOK YOUR STAYing</h2>
            <form action="" class="mt-8 flex flex-col space-y-10 md:flex-wrap md:flex-row md:space-y-8 xl:flex-nowrap xl:space-y-0 xl:space-x-10">
                <div class="flex flex-col w-full md:space-x-10 md:flex-row space-y-10 md:space-y-0 lg:w-auto lg:flex-1">
                    <div class=" lg:w-1/3">
<!--                        <input id="hotel" type="text"-->
<!--                               class="text-xs focus:outline-0 focus:ring-0 focus:border-white/80 w-full bg-transparent border-0 border-b border-white/80">-->
                        <select class="text-xs focus:outline-0 focus:ring-0 focus:border-white/80 w-full bg-transparent border-0 border-b border-white/80">
                            <option class="bg-transparent text-black" selected>Marula Palace Lodge</option>
                            <option class="bg-transparent text-black">Marula Rhino Lodge</option>
                            <option class="bg-transparent text-black">Marula Second Lodge</option>
                        </select>
                    </div>

                    <div class="flex space-x-7 md:space-x-10 md:flex-1">
                        <div class="flex-1">
                            <input placeholder="ARRIVAL" id="arrival" type="date"
                                   class="text-xs focus:outline-0 focus:ring-0 focus:border-white/80 w-full bg-transparent border-0 border-b border-white/80">
                        </div>
                        <div class="flex-1">
                            <input id="departure" placeholder="DEPARTURE" type="date"
                                   class="text-xs focus:outline-0 focus:ring-0 focus:border-white/80 w-full bg-transparent border-0 border-b border-white/80 placeholder:text-white">
                        </div>
                    </div>
                </div>

                <div class="hidden md:block w-full xl:hidden"></div>

                <div class="flex flex-col space-y-10 w-full md:space-x-10 md:flex-row md:space-y-0 lg:w-auto lg:flex-1">
                    <div class="md:flex-1">
                        <input placeholder="Guest(s)" id="guests" type="number" max="100" min="1"
                               class="text-xs focus:outline-0 focus:ring-0 focus:border-white/80 w-full bg-transparent border-0 border-b border-white/80 placeholder:text-white">
                    </div>

                    <BookButton class="block mx-auto w-full py-5 md:w-auto md:m-0 md:flex-1">
                        Book staying
                    </BookButton>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>