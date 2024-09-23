<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i5')
  .page
    h2 Possessivpronomen
    Plaza(:Slot='SlotPossessiv')
    Akkord(:titles="titles" :Data="[SlotDataPossessiv,SlotDataPossessivErsatz]" @addTime ='addTime')
</template>


<script setup>
import Akkord from "@/components/Akkord.vue";
import { ref, onMounted, reactive } from 'vue'

import Plaza from "@/components/Plaza.vue";
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotPossessiv = reactive([]);
var SlotDataPossessiv = reactive([]);
var SlotDataPossessivErsatz = reactive([]);

var titles = reactive([]);
const Possessiv = query(collection(db, "Possessiv-tabel"));
const PossessivSlot = query(collection(db, "PossessivSlot"));
const PossessivSlotErsatz = query(collection(db, "PossessivSlotErsatz"));


onMounted(async () => {
  onSnapshot(Possessiv, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotPossessiv.push(doc.data());
    });

  });
  onSnapshot(PossessivSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataPossessiv.push(doc.data());

    });
    titles.push({ id: 0, title: 'Possessiv', isOpen: true });
    SlotDataPossessiv.id = 0;
    SlotDataPossessiv.isOpen = true;

  });
  onSnapshot(PossessivSlotErsatz, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataPossessivErsatz.push(doc.data());

    });
    titles.push({ id: 1, title: 'Possessiv Ersatz', });
    SlotDataPossessivErsatz.id = 1;
    SlotDataPossessivErsatz.isOpen = false;

  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => { authStore.refresh('Possessiv', formattedTime, count, countAll) };
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