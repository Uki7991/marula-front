<template>
  <footer class="bg-black font-utility text-white text-xs">
      <div class="container mx-auto px-4 pt-8 pb-20 flex flex-col md:flex-row md:flex-wrap md:justify-around md:items-end xl:items-start">
          <div class="flex flex-col items-center justify-center order-first">
              <img src="~/assets/logo.svg" class="xl:w-20 xl:h-20" alt="">
              <img src="~/assets/under-logo.svg" class="xl:transform xl:scale-150 mt-3" alt="">
          </div>

          <BookButton class="mx-auto block mt-9 px-12 py-5 order-4 md:order-1 md:m-0 xl:order-4 xl:mt-8">
              Book staying
          </BookButton>

          <div class="w-full order-2 hidden md:block xl:hidden"></div>

          <nav class="mt-8 order-2">
              <a href="#" class="text-lg">The Lodges</a>
              <ul class="flex flex-col space-y-7 mt-7">
                  <li>
                      <a href="#">Marula Palace</a>
                  </li>
                  <li>
                      <a href="#">Marula Otjimukona Lodge</a>
                  </li>
                  <li>
                      <a href="#">Marula Giraf Lodge</a>
                  </li>
                  <li>
                      <a href="#">Marula Rhino Lodge</a>
                  </li>
              </ul>
          </nav>

          <nav class="mt-10 order-3 xl:mt-8">
              <ul class="flex flex-col space-y-7">
                  <li>
                      <a href="#">Wild</a>
                  </li>
                  <li>
                      <a href="#">Philosophy</a>
                  </li>
                  <li>
                      <a href="#">Contacts</a>
                  </li>
                  <li>
                      <a href="#">Services</a>
                  </li>
              </ul>
          </nav>

          <div class="w-full hidden xl:block order-last"></div>

          <Socials class="mt-20 justify-center order-last"/>
      </div>
  </footer>
</template>
<script setup lang="ts">
import Socials from "~/components/Socials.vue";
</script>