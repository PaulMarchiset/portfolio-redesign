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
    delay: 0,
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
    delay: 100,
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
    delay: 200,
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
    delay: 300,
    easing: "easeOutExpo",
    duration: 1400,
  });
});
</script>

<template>
   <section class="container">
      <nav
         class="col-start-1 col-span-9 row-start-3 row-end-8 flex flex-col justify-between text-end text-l uppercase font-condensed">
         <RouterLink to="/design" id="design" class="design-text">Design</RouterLink>
         <RouterLink to="/web" id="web" class="web-text">web</RouterLink>
         <RouterLink to="/video" id="video" class="video-text">video</RouterLink>
         <RouterLink to="/photo" id="photo" class="photo-text">photo</RouterLink>
      </nav>
   </section>
</template>