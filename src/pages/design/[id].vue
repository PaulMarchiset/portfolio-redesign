<script setup lang="ts">
import { pb } from '@/backend'
import { DesignID } from '@/backend';
import type { designResponse } from '@/pocketbase-types';
import DownloadIcon from '@/components/icons/DownloadIcon.vue'

const props = defineProps<designResponse>()

const designInfo = await DesignID(props.id);


import { useHead } from '@unhead/vue'
useHead({
  title: `${designInfo.name} - Paul Marchiset`
})

const photo = designInfo.photo && pb.getFileUrl(designInfo, designInfo.photo, { thumb: '100x200' })
const imgMain = designInfo.image_main && pb.getFileUrl(designInfo, designInfo.image_main, { thumb: '100x200' })
const imgSec = designInfo.image_secondary && pb.getFileUrl(designInfo, designInfo.image_secondary, { thumb: '100x200' })
const video = designInfo.video
const gif = window.innerWidth > 850 ? designInfo.gif_desktop : designInfo.gif_mobile
const gifMain = gif && pb.getFileUrl(designInfo, gif, { thumb: '100x200' })

const download = designInfo.download && pb.getFileUrl(designInfo, designInfo.download, { download: true })

const getDownloadType = (category: string) => {
  if (category === 'typography') {
    return 'typeface'
  } else if (category === 'branding') {
    return 'brand guide'
  }
  else if (category === 'advertising') {
    return 'ad'
  }
}
</script>

<template>
  <a v-if="download" :href=download
    class="fixed top-[3.125rem] right-[3.125rem] flex gap-2 justify-evenly uppercase font-body items-center p-3 text-black download text-[0.75rem] z-50"
    download>
    <DownloadIcon /><span v-if="gif === designInfo.gif_desktop">Download {{ getDownloadType(designInfo.category) }}</span>
  </a>
  <div class="project-container">
    <div class="flex flex-col uppercase col-start-1 col-end-4 lg:col-end-3 row-start-2 row-end-5">
      <h1 class=" leading-caps text-big-mobile lg:text-big-desktop font-semibold z-2">
        {{ designInfo.name }}</h1>
      <h4 class="font-regular leading-caps lg:text-m">{{ designInfo.category }}</h4>
    </div>
    <div v-bind:style='{ backgroundImage: "url(" + photo + ")" }'
      class="bg-cover bg-center col-start-2 row-start-4 lg:col-start-3 col-end-5 lg:row-start-3 lg:row-end-6"></div>
    <h2 class="font-body leading-[100%] col-start-1 col-end-5 row-start-6 text-s lg:row-start-7 lg:row-end-9 lg:text-xxl">
      {{ designInfo.catchphrase }}</h2>
    <div v-if="gif" v-bind:style='{ backgroundImage: "url(" + gifMain + ")" }'
      class="bg-cover bg-center col-start-1 col-end-5 row-start-7 row-end-10 lg:row-start-10 lg:row-end-14"></div>
    <div v-if="video" class="col-start-1 col-end-5 row-start-7 row-end-10 lg:row-start-10 lg:row-end-14 w-full h-full">
      <iframe :src=video frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="w-full h-full"></iframe>
    </div>
    <div
      class="col-start-1 col-end-5 row-start-11 lg:col-start-2 lg:col-end-4 lg:row-start-15 lg:row-end-17 flex flex-col">
      <h3 class="uppercase text-m lg:text-xl font-medium">about</h3>
      <p class="font-body" style="white-space: pre-wrap;">{{ designInfo.about }}</p>
    </div>
  </div>
  <div class="project-container-next">
    <div v-bind:style='{ backgroundImage: "url(" + imgMain + ")" }'
      class=" bg-cover bg-center row-start-1 row-end-3 lg:row-end-9 col-start-1 col-end-5 m-inline lg:m-big-inline"></div>
    <div v-bind:style='{ backgroundImage: "url(" + imgSec + ")" }'
      class=" bg-cover bg-center col-start-1 col-end-5 lg:col-end-3 row-start-4 row-end-6 lg:row-start-10 lg:row-end-15">
    </div>
    <div class="col-start-1 row-start-7 lg:col-start-3 col-end-5 lg:row-start-11 lg:row-end-15">
      <h3 class="uppercase text-m lg:text-xl font-medium">Credits</h3>
      <ul class="flex flex-col capitalize font-body  gap-5">
        <li class="grid grid-cols-2 gap-5">
          <p>client</p>
          <p>{{ designInfo.client }}</p>
        </li>
        <li class="grid grid-cols-2 gap-5">
          <p>softwares</p>
          <p><span v-for="(software, index) in designInfo.softwares" :key="index">
              {{ software }}
              <span v-if="index < designInfo.softwares.length - 1">/ </span></span></p>
        </li>
        <li class="grid grid-cols-2 gap-5">
          <p>year</p>
          <p>{{ designInfo.year }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
