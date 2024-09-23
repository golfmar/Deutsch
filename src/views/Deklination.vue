<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i7')
  .page
    h2 Deklination der Adjektive
    div( v-for="item in SlotDataNominativ" :key="index"  )
      h3 {{ Object.values(item)[0] }}
      p( ) {{ Object.values(item).slice(1,item.length).join(' ') }}
    Plaza(:Slot='SlotDeklination')
    Akkord(:titles="titles" :Data="[SlotDataDeklination]" @addTime ='addTime')
</template>


<script setup>

import Akkord from "@/components/Akkord.vue";
import { ref, onMounted, reactive } from 'vue'
import Plaza from "@/components/Plaza.vue";
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotDeklination = reactive([]);
var SlotDataDeklination = reactive([]);

var titles = reactive([]);
const Deklination = query(collection(db, "Deklination-table"));
const DeklinationSlot = query(collection(db, "DeklinationSlot"));


onMounted(async () => {
  onSnapshot(Deklination, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDeklination.push(doc.data());
    });

  });
  onSnapshot(DeklinationSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataDeklination.push(doc.data());
    });
    titles.push({ id: 0, title: 'Deklination', isOpen: true });
    SlotDataDeklination.id = 0;
    SlotDataDeklination.isOpen = true;
  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => { authStore.refresh('Deklination', formattedTime, count, countAll) };
// --------------------------

var isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

const Nominativ = [
  {
    title: 'Maskulinum ',
    text1: 'der rot-e Rock',
    text2: 'ein rot-er Rock',
    text3: 'rot-er Rock',

  },
  {
    title: 'Femininum ',
    text1: 'die gelb-e Bluse',
    text2: 'eine gelb-e Bluse',
    text3: 'gelb-e Bluse',

  },
  {
    title: 'Neutrum',
    text1: 'das grün-e Hemd',
    text2: 'ein grün-es Hemd',
    text3: 'grün-es Hemd',
  },
  {
    title: 'Plural',
    text1: 'die weiß-en Schuche',
    text2: 'weiß-e Schuche',
  },
]
const Akkusativ = [
  {
    title: 'Maskulinum ',
    text1: 'den rot-en Rock',
    text2: 'einen rot-en Rock',
    text3: 'rot-en Rock',

  },
  {
    title: 'Femininum',
    text1: 'die gelb-e Bluse',
    text2: 'eine gelb-e Bluse',
    text3: 'gelb-e Bluse',
  },
  {
    title: 'Neutrum',
    text1: 'das grün-e Hemd',
    text2: 'ein grün-es Hemd',
    text3: 'grün-es Hemd',
  },
  {
    title: 'Plural',
    text1: 'die weiß-en Schuche',
    text2: 'weiß-e Schuche',
  },
]
const Dativ = [
  {
    title: 'Maskulinum ',
    text1: 'dem rot-en Rock',
    text2: 'einem rot-en Rock',
    text3: 'rot-em Rock',

  },
  {
    title: 'Femininum',
    text1: 'der gelb-en Bluse',
    text2: 'einer gelb-en Bluse',
    text3: 'gelb-er Bluse',
  },
  {
    title: 'Neutrum',
    text1: 'dem grün-en Hemd',
    text2: 'einem grün-en Hemd',
    text3: 'grün-em Hemd',
  },
  {
    title: 'Plural',
    text1: 'den weiß-en Schuche-n',
    text2: 'weiß-en Schuche-n',
  },
]
const Genitiv = [
  {
    title: 'Maskulinum ',
    text1: 'des rot-en Rock-s',
    text2: 'eines rot-en Rock-s',
    text3: 'rot-en Rock-s',

  },
  {
    title: 'Femininum',
    text1: 'der gelb-en Bluse',
    text2: 'einer gelb-en Bluse',
    text3: 'gelb-er Bluse',
  },
  {
    title: 'Neutrum',
    text1: 'des grün-en Hemd-s',
    text2: 'eines grün-en Hemd-s',
    text3: 'grün-en Hemd-s',
  },
  {
    title: 'Plural',
    text1: 'den weiß-en Schuche',
    text2: 'weiß-er Schuche',
  },
]

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
