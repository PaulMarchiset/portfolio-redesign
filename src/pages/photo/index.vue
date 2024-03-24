<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PhotoCard from '@/components/PhotoCard.vue'
import { RouterLink, RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
useHead({
  title: 'Photo - Paul Marchiset'
})
import { allPhotos } from '@/backend'


const photoList = await allPhotos();

</script>

<template>
  <div class="flex flex-col p-[3.125rem] gap-8 py-[8.125rem] lg:flex-row lg:gap-4 lg:flex-wrap">
    <div v-for="photo in photoList" :key="photo.id" class="w-auto	">
      <PhotoCard v-bind="{ ...photo }" />
    </div>
  </div>
</template>