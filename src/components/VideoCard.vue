<script setup lang="ts">
import { pb } from '@/backend'
import { VideoID } from '@/backend';
import type { videoResponse } from '@/pocketbase-types';
import { onMounted } from 'vue'
import anime from 'animejs';



const props = defineProps<videoResponse>()

const videoInfo = await VideoID(props.id);

// @ts-ignore
const img = videoInfo.photo

const img0 = img ? pb.getFileUrl(props, img, { thumb: '100x250' }) : '/image-not-found.png'


onMounted(() => {
  const colorMattes = document.querySelectorAll('.image-card');

  colorMattes.forEach(colorMatte => {
    colorMatte.addEventListener('mouseover', function () {
      anime({
        targets: '.color-matte1',
        rotate: -2,
        easing: 'cubicBezier(.83,0,.29,.99)',
        duration: 600,
      })
      anime({
        targets: '.color-matte2',
        rotate: 4,
        easing: 'cubicBezier(.83,0,.29,.99)',
        duration: 600,
      })
    });
    colorMatte.addEventListener('mouseout', function () {
      anime({
        targets: '.color-matte1',
        rotate: 0,
        easing: 'cubicBezier(.83,0,.29,.99)',
        duration: 600,
      })
      anime({
        targets: '.color-matte2',
        rotate: 0,
        easing: 'cubicBezier(.83,0,.29,.99)',
        duration: 600,
      })
    });
  });
})
</script>

<template>
  <div v-bind:style='{ backgroundImage: "url(" + img0 + ")" }'
    class="image-card col-start-1 col-end-9 row-start-2 row-end-7 bg-cover bg-center lg:col-start-2 lg:col-end-6 lg:row-start-3 lg:row-end-8 rounded-3xl z-2">
  </div>
  <div v-bind:style='{ background: "#" + videoInfo.colormatte1 }'
    class="color-matte1 col-start-1 col-end-9 row-start-2 row-end-7 bg-cover bg-center lg:col-start-2 lg:col-end-6 lg:row-start-3 lg:row-end-8 rounded-3xl">
  </div>
  <div v-bind:style='{ background: "#" + videoInfo.colormatte2 }'
    class="color-matte2 col-start-1 col-end-9 row-start-2 row-end-7 bg-cover bg-center lg:col-start-2 lg:col-end-6 lg:row-start-3 lg:row-end-8 rounded-3xl">
  </div>
  <div
    class="col-start-1 col-end-9 row-start-7 row-end-9 flex flex-col justify-start items-end text-right lg:col-start-6 lg:col-end-8 lg:row-start-3 lg:row-end-5">
    <h2 class="leading-[85.2%] text-l lg:text-project-title font-condensed font-semibold uppercase">{{ videoInfo.name }}</h2>
    <h3 class="text-m font-normal font-regular">{{ videoInfo.year }}</h3>
  </div>
</template>