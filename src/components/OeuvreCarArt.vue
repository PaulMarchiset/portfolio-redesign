<!-- <script setup lang="ts">
import {pb} from '@/backend'
import { InfoOeuvreId } from '@/backend';
const props = defineProps<{
  id: string, 
}>();
const uneOeuvreInfo = await InfoOeuvreId(props.id);
const img = uneOeuvreInfo.Img_Oeuvre
const urlImg = img && pb.getFileUrl(uneOeuvreInfo, img, { thumb:'100x200'})
</script>
<template>
      <div class="grid place-content-center">
        <div class="bg-cover rounded-[20px] bg-[url('../../public/img/bg_card.webp')] h-[500px] w-[400px] flex items-center justify-center">
            <div class="flex h-[90%] w-[90%] flex-col justify-between bg-primary-beige p-8 rounded-[20px]">
                <div class="mt-4 h-full w-[100%] bg-cover rounded-[20px]"  :style="{ backgroundImage: `url('${urlImg}')` }"></div>
                <p class="mt-4 text-center font-playfair-display font-normal text-[30px]">{{ uneOeuvreInfo.Date_Creation.slice(0,4)}}</p>
            </div>
        </div>
    </div>
</template>  -->