<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i3')
  .page
    h2 Interrogativpronomen
    Plaza(:Slot='Inter')
    Akkord(:titles="titles" :Data="[InterSlot]" @addTime ='addTime')
</template>
<script setup>
import Akkord from "@/components/Akkord.vue";
import { ref, onMounted, reactive } from 'vue'
import Plaza from "@/components/Plaza.vue";
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var Inter = reactive([]);
var InterSlot = reactive([]);
var titles = reactive([]);
const Interrogativ = query(collection(db, "Interrogativ-table"));
const InterrogativSlot = query(collection(db, "InterrogativSlot"));
onMounted(async () => {
  onSnapshot(Interrogativ, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      Inter.push(doc.data());
    });
  });
  onSnapshot(InterrogativSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      InterSlot.push(doc.data());
    });
    titles.push({ id: 0, title: 'Interrogativ', isOpen: true });
    InterSlot.id = 0;
    InterSlot.isOpen = true;
  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => {
  authStore.refresh('Interrogativ', formattedTime, count, countAll)
};
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
<style lang="scss" scoped>
.plaza {
  grid-template-columns: minmax(100px, max-content);
}
</style>