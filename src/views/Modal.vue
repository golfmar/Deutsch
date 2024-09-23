<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i9')
  .page
    h2 Modalverben
    Akkord(:titles="titles" :Data="[SlotDataMüssen,SlotDataKönnen,SlotDataDürfen,SlotDataSollen,SlotDataWollen,SlotDataMögen,SlotDataMöchten]"  @addTime ='addTime' )

</template>
<script setup>


import Akkord from "@/components/Akkord.vue";
import { ref, onMounted, reactive } from 'vue'

import Plaza from "@/components/Plaza.vue";
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
// var SlotDeklination = reactive([]);
var SlotDataMüssen = reactive([]);
var SlotDataKönnen = reactive([]);
var SlotDataDürfen = reactive([]);
var SlotDataSollen = reactive([]);
var SlotDataWollen = reactive([]);
var SlotDataMögen = reactive([]);
var SlotDataMöchten = reactive([]);

var titles = reactive([]);
// const Deklination = query(collection(db, "Deklination-table"));
const MüssenSlot = query(collection(db, "MüssenSlot"));
const KönnenSlot = query(collection(db, "KönnenSlot"));
const DürfenSlot = query(collection(db, "DürfenSlot"));
const SollenSlot = query(collection(db, "SollenSlot"));
const WollenSlot = query(collection(db, "WollenSlot"));
const MögenSlot = query(collection(db, "MögenSlot"));
const MöchtenSlot = query(collection(db, "MöchtenSlot"));


onMounted(async () => {
  // onSnapshot(Deklination, (querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     SlotDeklination.push(doc.data());
  //   });

  // });
  onSnapshot(MüssenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataMüssen.push(doc.data());
    });
    titles.push({ id: 0, title: 'Müssen', isOpen: true });
    SlotDataMüssen.id = 0;
    SlotDataMüssen.isOpen = true;
  });
  onSnapshot(KönnenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataKönnen.push(doc.data());
    });
    titles.push({ id: 1, title: 'Können', isOpen: false });
    SlotDataKönnen.id = 1;
    SlotDataKönnen.isOpen = false;
  });
  onSnapshot(DürfenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataDürfen.push(doc.data());
    });
    titles.push({ id: 2, title: 'Dürfen', isOpen: false });
    SlotDataDürfen.id = 2;
    SlotDataDürfen.isOpen = false;
  });
  onSnapshot(SollenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataSollen.push(doc.data());
    });
    titles.push({ id: 3, title: 'Sollen', isOpen: false });
    SlotDataSollen.id = 3;
    SlotDataSollen.isOpen = false;
  });
  onSnapshot(WollenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataWollen.push(doc.data());
    });
    titles.push({ id: 4, title: 'Wollen', isOpen: false });
    SlotDataWollen.id = 4;
    SlotDataWollen.isOpen = false;
  });
  onSnapshot(MögenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataMögen.push(doc.data());
    });
    titles.push({ id: 5, title: 'Mögen', isOpen: false });
    SlotDataMögen.id = 5;
    SlotDataMögen.isOpen = false;
  });
  onSnapshot(MöchtenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataMöchten.push(doc.data());
    });
    titles.push({ id: 6, title: 'Möchten', isOpen: false });
    SlotDataMöchten.id = 6;
    SlotDataMöchten.isOpen = false;
  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => { authStore.refresh('Modalverben', formattedTime, count, countAll) };
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