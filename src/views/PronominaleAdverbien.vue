<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i8')
  .page
    h2 Pronominale Adverbien
    Akkord(:titles="titles" :Data="[SlotDataDeklination]" @addTime ='addTime')
</template>


<script setup>
import Akkord from "@/components/Akkord.vue";
import { ref, onMounted, reactive } from 'vue'

// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotDataDeklination = reactive([]);

var titles = reactive([]);
const DeklinationSlot = query(collection(db, "DeklinationAdjektiveSlot"));


onMounted(async () => {

  onSnapshot(DeklinationSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataDeklination.push(doc.data());
    });
    titles.push({ id: 0, title: 'Deklination der Adjektive', isOpen: true });
    SlotDataDeklination.id = 0;
    SlotDataDeklination.isOpen = true;
  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => { authStore.refresh('PronominaleAdverbien', formattedTime, count, countAll) };
// --------------------------
// --------------------------
import Loader from "@/components/Loader.vue";
import ImgLoader from "@/components/ImgLoader.vue";
var isLoading = ref(true);
const imgFertig = () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
};
</script>
<style lang="scss" scoped></style>
