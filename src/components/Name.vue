<script setup lang="ts">
import { onMounted } from 'vue'
import anime from 'animejs';

onMounted(() => {
    var textWrapper = document.querySelector(".paul");
    //@ts-ignore
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".paul .letter",
  translateY: [-100, 0],
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => 30 * i,
});

var textWrapper = document.querySelector(".marchiset");
//@ts-ignore
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".marchiset .letter",
  translateY: [-100, 0],
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => 30 * i,
});
});
</script>

<template>
    <div class="lg:flex flex-col justify-center relative row-start-5 col-start-1 row-span-2 col-span-10 text-l text-white uppercase font-condensed leading-[85.214%] font-medium lg:col-start-2 lg:col-end-6 lg:pl-[3.125rem] lg:text-xxl lg:row-start-4 lg:row-end-7">
     <div class="">
       <h1 class="paul">Paul</h1>
       <h1 class="marchiset">Marchiset</h1>
     </div>
   </div>
</template>