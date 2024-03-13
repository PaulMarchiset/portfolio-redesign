<script setup lang="ts">
import FooterPage from '@/components/FooterPage.vue'
import HeaderPage from '@/components/HeaderPage.vue'
import { RouterLink, RouterView } from 'vue-router' 
</script>

<template>
    <HeaderPage />
    <main>
      <Suspense>
        <RouterView />
      </Suspense>
    </main>
    <FooterPage/>
</template>