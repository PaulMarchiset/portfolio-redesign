<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PhotoCard from '@/components/PhotoCard.vue'
import { RouterLink, RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
useHead({
  title: 'Photo - Paul Marchiset'
})
import { allPhotos } from '@/backend'

interface photo {
  id: string;
}

const photoList = ref([]);

onMounted(async () => {
  const photos = await allPhotos();
  photoList.value = shuffleArray(photos);
});

//@ts-ignore
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
</script>

<template>
  <div class="h-full flex flex-col p-[3.125rem] gap-8 lg:mt-[5rem] lg:flex-row lg:gap-4 lg:flex-wrap">
          <div v-for="photo in photoList" :key="photo.id"
            class="w-auto	">
            <PhotoCard v-bind="{ ...photo }" />
          </div>
        </div>
</template>

<style scoped>
div>div:first-child {
  margin-top: 5rem;
}

div>div:last-child {
  margin-bottom: 5rem;
}

@media (min-width: 850px) {
  div>div:first-child {
    margin-top: 0;
  }

  div>div:last-child {
    margin-bottom: 0;
  }
}
</style>