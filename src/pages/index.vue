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
      let image = this.getAttribute('id') + '.jpg';
      heroContainer.style.backgroundImage = `url('/public/img/menu/${image}')`;
      heroContainer.style.animation = 'fadeIn 0.5s forwards';
      this.style.color = 'white';
      links.forEach(otherLink => {
        if (otherLink !== link) {
          otherLink.style.color = 'rgba(255, 255, 255, 0.5)';
        } else {
          otherLink.style.color = 'white';
        }
      });
    });

    link.addEventListener('mouseout', function () {
      heroContainer.style.backgroundImage = '';
      this.style.color = 'rgba(255, 255, 255, 0.5)';
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