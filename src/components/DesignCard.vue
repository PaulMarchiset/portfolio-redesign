<script setup lang="ts">
import { pb } from '@/backend'
import { DesignID } from '@/backend';
import type { designResponse } from '@/pocketbase-types';
import { onMounted} from 'vue'
import anime from 'animejs';

const props = defineProps<designResponse>()

const designInfo = await DesignID(props.id);


const img0 = props.cover_image
const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'

onMounted(() => {
  const colorMattes = document.querySelectorAll('.image-card');

  colorMattes.forEach(colorMatte => {
    colorMatte.addEventListener('mouseover', function () {
      anime({
        targets: '.color-matte1',
        translateX: 10,
        translateY: 10,
        easing: 'cubicBezier(.83,0,.29,.99)',
        duration: 600,
      })
      anime({
        targets: '.color-matte2',
        translateX: -10,
        translateY: -10,
        easing: 'cubicBezier(.83,0,.29,.99)',
        duration: 600,
      })
    });
    colorMatte.addEventListener('mouseout', function () {
      anime({
        targets: '.color-matte1',
        translateX: 0,
        translateY: 0,
        easing: 'cubicBezier(.83,0,.29,.99)',
        duration: 600,
      })
      anime({
        targets: '.color-matte2',
        translateX: 0,
        translateY: 0,
        easing: 'cubicBezier(.83,0,.29,.99)',
        duration: 600,
      })
    });
  });
})
</script>

<template>
  <div v-bind:style='{backgroundImage: "url("+urlImg0+")"}' class="image-card col-start-1 col-end-9 row-start-2 row-end-7 bg-cover bg-center lg:col-start-2 lg:col-end-5 lg:row-end-9 z-2"></div>
  <div class="bg-slate-300 color-matte1 col-start-1 col-end-9 row-start-2 row-end-7 bg-cover bg-center lg:col-start-2 lg:col-end-5 lg:row-end-9"></div>
  <div class="bg-slate-700 color-matte2 col-start-1 col-end-9 row-start-2 row-end-7 bg-cover bg-center lg:col-start-2 lg:col-end-5 lg:row-end-9"></div>
  <div class="col-start-1 col-end-9 row-start-7 row-end-9 flex flex-col justify-start items-end text-right lg:col-start-6 lg:col-end-8 lg:row-start-3 lg:row-end-5">
    <h2 class="leading-[85.2%] text-l font-condensed font-semibold uppercase">{{ designInfo.name }}</h2>
    <h3 class="text-m font-normal font-regular">{{ designInfo.year }}</h3>
  </div>
</template>
