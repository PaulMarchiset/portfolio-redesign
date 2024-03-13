<script setup lang="ts">
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import DownloadIcon from '@/components/icons/DownloadIcon.vue';

useHead({
    title: 'About - Paul Marchiset'
});

</script>

<template>
    <section class="container about">
        <div class="hidden lg:block about-img row-start-1 col-start-1 col-end-6 row-end-10 m-img-about"></div>
        <div class="flex flex-col gap-2 col-start-1 lg:col-start-6 col-end-9 row-start-2 lg:row-start-3 row-end-8">
            <h1 class="leading-caps uppercase text-xl lg:text-xxl font-semibold z-2">
                Paul Marchiset</h1>
            <h2 class="hidden lg:block leading-caps uppercase font-regular font-light text-xs ">STUDENT IN GRAPHIC DESIGN</h2>
            <div class="flex flex-col gap-2 font-body font-light lg:text-xxs ">
                <p >Currently immersing myself in the study of multimedia and internet professions in Montbéliard, I take
                    pride in my role within team projects. I find joy in shouldering responsibilities and guiding operations
                    effectively.
                </p>
                <p>During my time at Vanier College in Montreal, I had the privilege of deepening my passion for typography,
                    focusing intensely on the intricacies of character design and understanding.
                </p>
                <p>My fascination with audiovisual content has led me to engage in various professional and academic
                    projects, including live broadcasts, documentaries, short films, and press conferences. This
                    multifaceted involvement reflects my eagerness to explore different aspects of the field.</p>
            </div>
        </div>
    </section>
</template>
