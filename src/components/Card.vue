<!-- <script setup lang="ts">
import { pb } from '@/backend'
import { DesignID,  } from '@/backend';
import type { collectionResponse } from '@/pocketbase-types';


//generate if design or web or video defineProps in consequences
const props = defineProps<collectionResponse>()

const info = await CollectionID(props.id)

// @ts-ignore
const img0 = props.cover_image || props.main_image
const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'

</script>

<template>
  <div v-bind:style='{backgroundImage: "url("+urlImg0+")"}' class="col-start-1 col-end-9 row-start-2 row-end-7 bg-cover bg-center"></div>
  <div class="col-start-1 col-end-9 row-start-7 row-end-9 flex flex-col justify-start items-end text-right">
    <h2 class="leading-[85.2%] text-l font-condensed font-semibold uppercase">{{ info.name }}</h2>
    <h3 class="text-m font-normal font-regular">{{ info.date }}</h3>
  </div>
</template> -->