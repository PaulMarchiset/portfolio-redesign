<script setup lang="ts">
import Name from '@/components/Name.vue'
import Works from '@/components/Works.vue'
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import anime from 'animejs';
import gsap from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'

useHead({
  title: 'Paul Marchiset'
})

onMounted(() => {
  const heroContainer = document.querySelector('.hero-container');
  const links = document.querySelectorAll('.hero-works a');

  links.forEach(link => {
    link.addEventListener('mouseover', function () {
      //@ts-ignore
      let image = this.getAttribute('id') + '.jpg';
      //@ts-ignore
      heroContainer.style.backgroundImage = `url('img/menu/${image}')`;
      //@ts-ignore
      heroContainer.style.animation = 'fadeIn 0.5s forwards';
      //@ts-ignore
      this.style.color = 'white';
      links.forEach(otherLink => {
        if (otherLink !== link) {
          //@ts-ignore
          otherLink.style.color = 'rgba(255, 255, 255, 0.5)';
        } else {
          //@ts-ignore
          otherLink.style.color = 'white';
        }
      });
    });

    link.addEventListener('mouseout', function () {
      //@ts-ignore
      heroContainer.style.backgroundImage = '';
      //@ts-ignore
      this.style.color = 'rgba(255, 255, 255, 0.5)';
      //@ts-ignore
      heroContainer.style.animation = 'fadeOut 0.5s forwards';
    });
  });
});
</script>

<template>
  <section class="container">
    <div
      class="hero-container hidden lg:block z-0 col-start-2 col-end-8 row-start-2 row-end-9 bg-cover bg-center">
    </div>
    <Name />
    <Works />
    <div class="img-container row-start-6 col-start-1 col-span-10 lg:hidden">
      <img src="/public/img/hero-img.jpg" alt="paul marchiset">
    </div>
  </section>
</template>