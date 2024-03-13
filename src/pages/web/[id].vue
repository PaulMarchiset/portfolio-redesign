<script setup lang="ts">
import { pb } from '@/backend'
import { WebID } from '@/backend';
import type { webResponse } from '@/pocketbase-types';
import VisitIcon from '@/components/icons/VisitIcon.vue'

const props = defineProps<webResponse>()

const webInfo = await WebID(props.id);


import { useHead } from '@unhead/vue'
useHead({
  title: `${webInfo.name} - Paul Marchiset`
})


const photo = webInfo.photo && pb.getFileUrl(webInfo, webInfo.photo, { thumb: '100x200' })
const imgMain = webInfo.image_main && pb.getFileUrl(webInfo, webInfo.image_main, { thumb: '100x200' })
const imgSec = webInfo.image_secondary && pb.getFileUrl(webInfo, webInfo.image_secondary, { thumb: '100x200' })

const altDescription = webInfo.name
const video = window.innerWidth > 850 ? webInfo.video_desktop : webInfo.video_mobile
const videoMain = video && pb.getFileUrl(webInfo, video, { thumb: '100x200' })

const link = webInfo.weblink

</script>

<template>
  <a v-if="link" :href=link target="_blank"
          class="fixed top-[3.125rem] right-[3.125rem] flex gap-2 justify-evenly uppercase font-body items-center p-3 text-black download text-[0.75rem] z-50">
          <VisitIcon /><span class="flex gap-1">Visit<span v-if="video === webInfo.video_desktop">{{ webInfo.name }}</span></span>
        </a>
  <div class="project-container">
    <div class="flex flex-col uppercase col-start-1 col-end-4 lg:col-end-3 row-start-2 row-end-5">
      <h1
        class=" leading-caps text-big-mobile lg:text-big-desktop font-semibold z-2">
        {{ webInfo.name }}</h1>
    </div>
    <div v-bind:style='{ backgroundImage: "url(" + photo + ")" }'
      class="bg-cover bg-center col-start-2 row-start-4 lg:col-start-3 col-end-5 lg:row-start-3 lg:row-end-6"></div>
    <h2 class="font-body leading-[100%] col-start-1 col-end-5 row-start-6 text-s lg:row-start-7 lg:row-end-9 lg:text-xxl">{{ webInfo.catchphrase }}</h2>
    <video playsinline autoplay muted loop
      class="bg-cover bg-center col-start-1 col-end-5 row-start-7 row-end-10 lg:row-start-10 lg:row-end-14 object-cover w-full h-full">
    <source :src=videoMain type="video/mp4"></video>
      <div class="col-start-1 col-end-5 row-start-11 lg:col-start-2 lg:col-end-4 lg:row-start-15 lg:row-end-17 flex flex-col">
      <h3 class="uppercase text-m lg:text-xl font-medium">about</h3>
      <p class="font-body" style="white-space: pre-wrap;">{{ webInfo.about }}</p>
    </div>
  </div>
  <div class="project-container-next">
    <div v-bind:style='{ backgroundImage: "url(" + imgMain + ")" }' class=" bg-cover bg-center row-start-1 row-end-3 lg:row-end-9 col-start-1 col-end-5 m-inline lg:m-big-inline"></div>
    <div v-bind:style='{ backgroundImage: "url(" + imgSec + ")" }' class=" bg-cover bg-center col-start-1 col-end-5 lg:col-end-3 row-start-4 row-end-6 lg:row-start-10 lg:row-end-15"></div>
    <div class="col-start-1 row-start-7 lg:col-start-3 col-end-5 lg:row-start-11 lg:row-end-15">
      <h3 class="uppercase text-m lg:text-xl font-medium">Credits</h3>
      <ul class="flex flex-col capitalize font-body  gap-5">
        <li class="grid grid-cols-2 gap-5">
          <p>client</p>
          <p>{{ webInfo.client }}</p>
        </li>
        <li class="grid grid-cols-2 gap-5">
          <p>skills</p>
          <p><span
            v-for="(skill, index) in webInfo.skills" :key="index">
            {{ skill }}
            <span v-if="index < webInfo.skills.length - 1">/ </span></span></p>
        </li>
        <li class="grid grid-cols-2 gap-5">
          <p>tools</p>
          <p><span
            v-for="(tool, index) in webInfo.tools" :key="index">
            {{ tool }}
            <span v-if="index < webInfo.tools.length - 1">/ </span></span></p>
        </li>
        <li v-if="webInfo.with" class="grid grid-cols-2 gap-5">
          <p>with</p>
          <p>{{ webInfo.with }}</p>
        </li>
        <li class="grid grid-cols-2 gap-5">
          <p>year</p>
          <p>{{ webInfo.year }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>