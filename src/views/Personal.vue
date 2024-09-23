<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i2')
  .page
    h2 Personalpronomen
    Plaza(:Slot='SlotPersonal')
    Akkord(:titles="titles" :Data="[SlotDataPersonal]" @addTime ='addTime')
</template>

<script setup>
import Akkord from "@/components/Akkord.vue";
import { ref, onMounted, reactive } from 'vue'

import Plaza from "@/components/Plaza.vue";
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotPersonal = reactive([]);
var SlotDataPersonal = reactive([]);

var titles = reactive([]);
const Personal = query(collection(db, "Personal-table"));
const PersonalSlot = query(collection(db, "PersonalSlot"));


onMounted(async () => {
  onSnapshot(Personal, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotPersonal.push(doc.data());
    });

  });
  onSnapshot(PersonalSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataPersonal.push(doc.data());
    });
    titles.push({ id: 0, title: 'Personal', isOpen: true });
    SlotDataPersonal.id = 0;
    SlotDataPersonal.isOpen = true;
  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => { authStore.refresh('Personal', formattedTime, count, countAll) };
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