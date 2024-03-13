<script setup lang="ts">
import { pb } from '@/backend'
import { VideoID } from '@/backend';
import type { videoResponse } from '@/pocketbase-types';
import VisitIcon from '@/components/icons/VisitIcon.vue'

const props = defineProps<videoResponse>()

const videoInfo = await VideoID(props.id);


import { useHead } from '@unhead/vue'
useHead({
  title: `${videoInfo.name} - Paul Marchiset`
})


const photo = videoInfo.photo && pb.getFileUrl(videoInfo, videoInfo.photo, { thumb: '100x200' })
const imgMain = videoInfo.image_main && pb.getFileUrl(videoInfo, videoInfo.image_main, { thumb: '100x200' })

const video = videoInfo.videolink

const videoSoftware = videoInfo.softwares.length === 0 ? false : true


</script>

<template>
  <div class="project-container-video">
    <div class="flex flex-col uppercase col-start-1 col-end-4 lg:col-end-3 row-start-2 row-end-5">
      <h1 class=" leading-caps text-big-mobile lg:text-big-desktop font-semibold z-2">
        {{ videoInfo.name }}</h1>
      <h4 class="font-regular leading-caps lg:text-m">{{ videoInfo.genre }}</h4>
    </div>
    <div v-bind:style='{ backgroundImage: "url(" + photo + ")" }'
      class="bg-cover bg-center col-start-2 row-start-4 lg:col-start-3 col-end-5 lg:row-start-3 lg:row-end-6"></div>
    <h2 class="font-body leading-[100%] col-start-1 col-end-5 row-start-6 text-s lg:row-start-7 lg:row-end-9 lg:text-xxl">
      {{ videoInfo.catchphrase }}</h2>
    <div class="col-start-1 col-end-5 row-start-7 row-end-10 lg:row-start-10 lg:row-end-14 w-full h-full">
      <iframe :src=video frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="w-full h-full"></iframe>
    </div>
    <div
      class="col-start-1 col-end-5 row-start-11 lg:col-start-2 lg:col-end-4 lg:row-start-15 lg:row-end-17 flex flex-col">
      <h3 class="uppercase text-m lg:text-xl font-medium">about</h3>
      <p class="font-body" style="white-space: pre-wrap;">{{ videoInfo.about }}</p>
    </div>
  <div v-bind:style='{ backgroundImage: "url(" + imgMain + ")" }'
    class=" bg-cover bg-center col-start-1 col-end-5 lg:col-end-3 row-start-13 row-end-15 lg:row-start-18 lg:row-end-23">
  </div>
  <div class="col-start-1 row-start-16 lg:col-start-3 col-end-5 lg:row-start-19 lg:row-end-22">
    <h3 class="uppercase text-m lg:text-xl font-medium">Credits</h3>
    <ul class="flex flex-col capitalize font-body  gap-5">
      <li class="grid grid-cols-2 gap-5">
        <p>client</p>
        <p>{{ videoInfo.client }}</p>
      </li>
      <li class="grid grid-cols-2 gap-5">
        <p>roles</p>
        <p><span v-for="(roles, index) in videoInfo.role" :key="index">
            {{ roles }}
            <span v-if="index < videoInfo.role.length - 1">/ </span></span></p>
      </li>
      <li v-if="videoSoftware" class="grid grid-cols-2 gap-5">
        <p>software</p>
        <p><span v-for="(software, index) in videoInfo.softwares" :key="index">
            {{ software }}
            <span v-if="index < videoInfo.softwares.length - 1">/ </span></span></p>
      </li>
      <li v-if="videoInfo.with" class="grid grid-cols-2 gap-5">
        <p>with</p>
        <p>{{ videoInfo.with }}</p>
      </li>
      <li class="grid grid-cols-2 gap-5">
        <p>year</p>
        <p>{{ videoInfo.year }}</p>
      </li>
    </ul>
  </div>
  </div>
</template>