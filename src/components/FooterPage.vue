
<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
    let elements = document.querySelectorAll('.nav-link');
    elements.forEach((element) => {
       
        let innerText: string | undefined;
        if (element instanceof HTMLElement) {
            innerText = element.innerText;
        }
        element.innerHTML = '';

        let textContainer = document.createElement('div');
        textContainer.classList.add('block');

        for (let lettre of innerText!) {
            let span = document.createElement('span');
            span.innerText = lettre.trim() === '' ? '\xa0' : lettre;
            span.classList.add('lettre');
            textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('play');

            });
        element.addEventListener('mouseleave', () => {
            element.classList.remove('play');
        });
    });
    });
</script>

<template>
    <footer class="text-white">
        <nav
            class="fixed z-50 bottom-0 left-0 flex items-center justify-between w-full uppercase mix-blend-difference p-[3.125rem] text-xxs font-regular lg:justify-center lg:gap-[10vw]">
            <RouterLink to="/works" class="nav-link">works</RouterLink>
            <RouterLink to="/about" class="nav-link">about me</RouterLink>
            <RouterLink to="/contact" class="nav-link">contact</RouterLink>
        </nav>
    </footer>
</template>


<style>
.nav-link {
    line-height: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
}

.nav-link:hover .lettre,
.nav-link.play .lettre {
    transform: translateY(-100%);
}

.nav-link .block:last-child {
    color: white;
    display: flex;
    font-weight: 100;

}

.nav-link .lettre {
    display: inline-block;
    transition: transform 0.6s cubic-bezier(.83,0,.29,.99);
}

.lettre:nth-child(1) {
    transition-delay: 0s;
}

.lettre:nth-child(2) {
    transition-delay: 0.03s;
}

.lettre:nth-child(3) {
    transition-delay: 0.06s;
}

.lettre:nth-child(4) {
    transition-delay: 0.09s;
}

.lettre:nth-child(5) {
    transition-delay: 0.12s;
}

.lettre:nth-child(6) {
    transition-delay: 0.15s;
}

.lettre:nth-child(7) {
    transition-delay: 0.18s;
}

.lettre:nth-child(8) {
    transition-delay: 0.21s;
}
</style>
