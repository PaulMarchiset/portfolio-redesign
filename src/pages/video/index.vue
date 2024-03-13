<script setup lang="ts">
import VideoCard from '@/components/VideoCard.vue'
import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import ArrowRight from '@/components/icons/ArrowRight.vue'
import { RouterLink, RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import gsap from 'gsap'
import { onMounted } from 'vue'

useHead({
  title: 'Video - Paul Marchiset'
})
import { allVideo } from '@/backend'
const videoList = await allVideo();

onMounted(() => {
  const arrowRight = document.querySelector(".arrow-right");
  const arrowLeft = document.querySelector(".arrow-left");
  const sections = document.querySelectorAll("main div section");

  let currentSection = 0;

  arrowRight.addEventListener("click", () => {
    if (currentSection < sections.length - 1) {
      currentSection++;
      gsap.to("section", {
        x: `-${currentSection * 100}%`,
        duration: 1.5,
        ease: "power3.out",
      });
    }
  });

  arrowLeft.addEventListener("click", () => {
    if (currentSection > 0) {
      currentSection--;
      gsap.to("section", {
        x: `-${currentSection * 100}%`,
        duration: 1.5,
        ease: "power3.out",
      });
    }
  });
  gsap.from("main section", {
      x: "-400%", // Start from the left side of the window
      stagger: 0.1, // Stagger the animations for each section
      duration: 1.5,
      ease: "power3.out", // Use an easing function for a smooth slide
    });
})
</script>

<template>
  <div class="hidden cursor-pointer lg:block z-10 absolute top-[40vh] left-4 arrow-left">
    <ArrowLeft />
  </div>
  <div class="hidden cursor-pointer  lg:block arrow-right z-10 absolute top-[40vh] right-4">
    <ArrowRight />
  </div>
  <div class="overflow-x-scroll lg:overflow-hidden h-full flex snap-x-mandatory">
    <section class="max-w-full flex-[0_0_100%] snap-start	" v-for="video in videoList">
      <RouterLink class="container" :key="video.id" :to="{ name: 'video-id', params: { id: video.id } }">
        <VideoCard :key="video.id" v-bind="{ ...video }" />
      </RouterLink>
    </section>
  </div>
</template>