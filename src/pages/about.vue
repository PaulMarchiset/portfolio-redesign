<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { allDesign, allVideo, allWeb } from '@/backend';
import { onMounted } from 'vue';
useHead({
  title: `About - Paul Marchiset`
})

const photo = '/img/paul-about.jpg'
const photo2 = '/img/photo-paul-perce.png'



</script>

<template>
  <div class="project-container">
    <div class="flex flex-col uppercase col-start-1 col-end-4 lg:col-end-3 row-start-2 row-end-5">
      <h1 class=" leading-caps text-big-mobile lg:text-big-desktop font-semibold z-2">
        Paul Marchiset</h1>
      <h4 class="font-regular leading-caps lg:text-m">Student in graphic design</h4>
    </div>
    <div v-bind:style='{ backgroundImage: "url(" + photo + ")" }'
      class="bg-cover bg-top lg:bg-top-4 col-start-2 row-start-4 lg:col-start-3 col-end-5 lg:row-start-3 lg:row-end-6"></div>
    <h2 class="font-body leading-[100%] col-start-1 col-end-5 row-start-6 text-s lg:row-start-7 lg:row-end-9 lg:text-xxl">Hi, I'm Paul, a graphic design student. I'm passionate about typography, photography and video.
      </h2>
    <div v-bind:style='{ backgroundImage: "url(" + photo2 + ")" }'
      class="bg-center bg-cover bg-no-repeat col-start-1 col-end-5 row-start-7 row-end-10 lg:row-start-10 lg:row-end-14"></div>
    <div
      class="col-start-1 col-end-5 row-start-11 lg:col-start-2 lg:col-end-4 lg:row-start-15 lg:row-end-17 flex flex-col">
      <h3 class="uppercase text-m lg:text-xl font-medium">about</h3>
      <p class="font-body">Hi! I'm Paul Marchiset, student in 2nd-year of MMI Montbéliard based in France. Passionnated by video, photography and typography, I find inspiration in the everyday things and in everything that I can see.
        During team projects, i stand out for taking on responsibilities and steer operations effectively</p>
    </div>
  </div>

</template>
