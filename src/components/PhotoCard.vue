<script setup lang="ts">
import { pb } from '@/backend'
import { PhotoID } from '@/backend';
import type { photoResponse } from '@/pocketbase-types';

const props = defineProps<photoResponse>()

const photoInfo = await PhotoID(props.id);


const img0 = props.image
const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'

//Generate alt description with the photoInfo.name

const alt = photoInfo.name

</script>

<template>
  <img :src=urlImg0 class="lg:h-[45vh]" :alt="alt"/>
</template>