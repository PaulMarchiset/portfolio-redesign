<template>
  <div class="flex flex-col justify-center items-center w-full h-full">
        <p class="font-body uppercase">click to copy</p>
        <h1 id="mail" @click="contactMail" class="text-s">contact@paulmarchiset.me</h1>
      </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useHead } from '@unhead/vue'

useHead({
  title: 'Contact - Paul Marchiset'
})


import anime from 'animejs/lib/anime.min';

const contactMail = () => {
  const copyMail = document.getElementById('mail');
  const tempInput = document.createElement('input');
  document.body.appendChild(tempInput);
  tempInput.value = copyMail!.textContent || '';
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Change the text to "copied"
  if (copyMail) {
    copyMail.textContent = 'copied!';

    anime({
      targets: copyMail,
      scale: 1.01,
      duration: 100,
      direction: 'alternate',
      easing: 'easeInOutQuad',
    });

    // Change the text back after 3 seconds
    setTimeout(() => {
      copyMail.textContent = 'contact@paulmarchiset.me';
    }, 3000);
  }
};

// Ensure that the DOM is loaded before attaching the click event
onMounted(() => {
  const mailText = document.querySelector("#mail");
  if (mailText) {
    //@ts-ignore 
    mailText.innerHTML = mailText.textContent?.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  }
});
</script>

<style scoped>
* {
  overflow: hidden;
}

h1 {
  cursor: pointer;
    display: inline-block;
    position: relative;
    color: #fff;
  }

h1:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 1s cubic-bezier(0.4,0,0,1);
  }
  
  h1:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>
