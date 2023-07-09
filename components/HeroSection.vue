<template>
    <div class=" bg-[url('~/assets/images/bg.jpg')] bg-cover bg-no-repeat bg-center  text-white px-7 text-center font-light">
        <div class="container mx-auto flex flex-col space-y-6 items-center justify-center h-screen">
            <h1 class="font-title text-3xl md:text-6xl xl:text-7xl">Horse Riding</h1>
            <p class="font-title text-xl leading-6 xl:text-2xl"> A new level of recreationin Marula Conservation Park</p>
        </div>

        <Breadcrumbs />
    </div>
</template>
<script setup lang="ts">
import Breadcrumbs from "~/components/Breadcrumbs.vue";
</script>