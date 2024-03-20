<script setup lang="ts">
import { onMounted } from 'vue'
import anime from 'animejs';

onMounted(() => {
  const designWrapper = document.querySelector(".design-text");
  //@ts-ignore
  designWrapper.innerHTML = designWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".design-text .letter",
    translateY: [100, 0],
    delay: 400,
    easing: "easeOutExpo",
    duration: 1400,
  });
  const webWrapper = document.querySelector(".web-text");
  //@ts-ignore
  webWrapper.innerHTML = webWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".web-text .letter",
    translateY: [100, 0],
    delay: 500,
    easing: "easeOutExpo",
    duration: 1400,
  });
  const videoWrapper = document.querySelector(".video-text");
  //@ts-ignore
  videoWrapper.innerHTML = videoWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".video-text .letter",
    translateY: [100, 0],
    delay: 600,
    easing: "easeOutExpo",
    duration: 1400,
  });
  const photoWrapper = document.querySelector(".photo-text");
  //@ts-ignore
  photoWrapper.innerHTML = photoWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".photo-text .letter",
    translateY: [100, 0],
    delay: 700,
    easing: "easeOutExpo",
    duration: 1400,
  });
});
</script>

<template>
     <nav class="hero-works hidden lg:flex flex-col col-start-6 row-start-3 col-end-8 row-end-8 uppercase justify-evenly items-end text-xl z-10 pr-[3.125rem] leading-[85.214%] text-whitezero">
       <RouterLink to="/design" id="design" class="design-text">Design</RouterLink>
       <RouterLink to="/web" id="web" class="web-text">web</RouterLink>
       <RouterLink to="/video" id="video" class="video-text">video</RouterLink>
       <RouterLink to="/photo" id="photo" class="photo-text">photo</RouterLink>
      </nav>
</template>