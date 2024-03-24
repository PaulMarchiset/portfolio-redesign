<script setup lang="ts">
import { ref } from 'vue'
import IconLogoP from '@/components/icons/IconLogoP.vue'
import IconLogoM from '@/components/icons/IconLogoM.vue'
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import anime from 'animejs';

onMounted(() => {
  const iconLogo = document.querySelector(".icon-logo");
  const logoP = document.querySelector("#P");
  const logoP1 = document.querySelector("#P1");
  const logoP2 = document.querySelector("#P2");
  const logoM = document.querySelector("#M");
  const logoM1 = document.querySelector("#M1");
  const logoM2 = document.querySelector("#M2");
  const logoM3 = document.querySelector("#M3");
  

  iconLogo?.addEventListener("mouseover", () => {
   anime({
    targets: [logoP1, logoP2, logoM1, logoM2, logoM3],
    translateY: [0,100],
    duration: 600,
    easing: 'cubicBezier(.83,0,.29,.99)',
    delay: anime.stagger(100),
    opacity: 0,
   })
  
  setTimeout(() => {
    anime({
    targets: [logoP1, logoP2, logoM1, logoM2, logoM3],
    translateY: [-100,0], 
    duration: 600,
    easing: 'cubicBezier(.83,0,.29,.99)',
    delay: anime.stagger(100),
    opacity: 1,
   })
  }, 1000);
});

})

const menuIsOpen = ref(false)


</script>
<template>
  <header class="fixed top-[3.125rem] left-0 flex items-center justify-center z-50 w-full mix-blend-difference scale-90">
    <RouterLink to="/" @click="menuIsOpen = false" class="icon-logo grid">
      <IconLogoP class="grid-area logoP"/>
      <IconLogoM class="grid-area logoM"/>
    </RouterLink>
  </header>
</template>