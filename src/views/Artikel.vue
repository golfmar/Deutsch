<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i1')
  .page
    h2 der Artikel
    //- Tabs 
    Plaza(:Slot='SlotArtikle')
    Akkord(:titles="titles" :Data="[SlotBestimmte,  SlotDataBestimmte,Slotnegativ]"  @addTime ='addTime' )
</template>
<script setup>
import Akkord from "@/components/Akkord.vue";
import Personal from "@/views/Personal.vue";
import { ref, onMounted, reactive } from 'vue'
const count = ref(0)
const currentLine = ref(null)
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
import Plaza from "@/components/Plaza.vue";
var SlotBestimmte = reactive([]);
var SlotDataBestimmte = reactive([]);
var Slotnegativ = reactive([]);
var titles = reactive([]);
const Bestimmte = query(collection(db, "bestimmte"));
const DataBestimmte = query(collection(db, "DataBestimmte"));
const negativ = query(collection(db, "negativ"));
onMounted(async () => {
  onSnapshot(Bestimmte, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotBestimmte.push({ text: doc.data().text, content: doc.data().content });
    });
    titles.push({ id: 0, title: 'Unbestimmter Artikel', isOpen: true });
    SlotBestimmte.id = 0;
    SlotBestimmte.isOpen = true;
  });
  onSnapshot(DataBestimmte, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataBestimmte.push({ text: doc.data().text, content: doc.data().content });
    });
    titles.push({ id: 1, title: 'Bestimmter Artikel', isOpen: false });
    SlotDataBestimmte.id = 1;
    SlotDataBestimmte.isOpen = false;
  });
  onSnapshot(negativ, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      Slotnegativ.push({ text: doc.data().text, content: doc.data().content });
    });
    titles.push({ id: 2, title: 'Negativ Artikel', isOpen: false });
    Slotnegativ.id = 2;
    Slotnegativ.isOpen = false;
  });
});

// ---------db-----------------
var SlotArtikle = reactive([]);
var titles = reactive([]);
const Artikle = query(collection(db, "Artikle-table"));
// -----------------------------------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, prozent) => { authStore.refresh('Artikel', formattedTime, prozent) };
// --------------------------
onMounted(async () => {
  onSnapshot(Artikle, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotArtikle.push(doc.data());
    });
  });

});
import Loader from "@/components/Loader.vue";
import ImgLoader from "@/components/ImgLoader.vue";
var isLoading = ref(true);
const imgFertig = () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
};
</script>
<style lang="scss" scoped>
.plaza__line {
  padding: 5px 0 0 0;
}
</style>
