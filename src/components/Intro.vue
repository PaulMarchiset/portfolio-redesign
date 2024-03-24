<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import anime from 'animejs';

    const isVisible = ref(false);
    const slideOut = ref(false);

    const greetings = [
        "Design", "Web", "Video", "Photo"
    ];

    const currentGreeting = ref(greetings[0]);
    let greetingIndex = 0;

    anime.timeline({ loop: false }).add({
    targets: greetings,
    translateY: [100, 0],
    easing: "easeOutExpo",
    duration: 1400,
  });

    function completeIntro() {
        slideOut.value = true;
        setTimeout(() => {
            isVisible.value = false;
            sessionStorage.setItem('hasSeenIntro', 'true');
        }, 1000);
    }

    onMounted(() => {
        if (!sessionStorage.getItem('hasSeenIntro')) {
            isVisible.value = true;
            const intervalId = setInterval(() => {
                greetingIndex++;
                if (greetingIndex >= greetings.length) {
                    clearInterval(intervalId);
                    completeIntro();
                } else {
                    currentGreeting.value = greetings[greetingIndex];
                }
            }, 300);

            onUnmounted(() => {
                clearInterval(intervalId);
            });
        }
    });
</script>

<template>
    <div v-if="isVisible" :class="{ 'slide-out': slideOut }" class="intro-text flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-black text-white text-6xl lg:text-8xl z-100 uppercase text-regular">
        <h1>{{ currentGreeting }}</h1>
    </div>
</template>
  
  
  
<style scoped>
    .slide-out {
        animation: slideOut 1s cubic-bezier(.83,0,.29,.99) forwards;
    }
    
    @keyframes slideOut {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-100%);
        }
    }
</style>