<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i6')
  .page
    h2 Demonstrativpronomen
    Plaza(:Slot='SlotDemonstrativ')
    Akkord(:titles="titles" :Data="[SlotDataDemonstrativ]" @addTime ='addTime')

</template>

<script setup>
import Akkord from "@/components/Akkord.vue";
import Plaza from "@/components/Plaza.vue";
import { ref, onMounted, reactive } from 'vue'
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotDemonstrativ = reactive([]);
var SlotDataDemonstrativ = reactive([]);

var titles = reactive([]);
const Demonstrativ = query(collection(db, "Demonstrativ-tabel"));
const DataDemonstrativ = query(collection(db, "DemonstrativSlot"));


onMounted(async () => {
  onSnapshot(Demonstrativ, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDemonstrativ.push(doc.data());
    });

  });
  onSnapshot(DataDemonstrativ, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataDemonstrativ.push(doc.data());
    });
    titles.push({ id: 0, title: 'Demonstrativ', isOpen: true });
    SlotDataDemonstrativ.id = 0;
    SlotDataDemonstrativ.isOpen = true;
  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => { authStore.refresh('Demonstrativ', formattedTime, count, countAll) };
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