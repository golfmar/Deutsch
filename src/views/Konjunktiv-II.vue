<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i3')
  .page
    h2 Konjunktiv II
    .page-block.blue-grey-4
      .page-title--small
        div
          p 📍 используется для описания гипотетических, нереальных или условных ситуаций, выражения желаний, предложений или вежливых просьб. Он также применяется для высказываний, которые относятся к несуществующим или невозможным условиям.
          p 👌 Основные функции Konjunktiv II
          p ✔️ Гипотетические или нереальные условия: Используется для описания ситуаций, которые не произошли, но могли бы произойти при выполнении определённых условий.
          p ✔️ Выражение желаний или предположений: Выражает желания или предположения о том, что могло бы произойти.
          p ✔️ Вежливые просьбы и предложения: Используется для вежливого выражения просьб, предложений или рекомендаций.
      .base-area
        .base-area__unit
          h3 Bildung des Konjunktivs II.
          Base( v-for="item in titlesPräsens" :key="index"  :item='item' page='Kojunktiv2'  )
        .base-area__unit
          h3 Bildung des Konjunktivs II mit Modalverben. .
          Base( v-for="item in titlesModalverben" :key="index"  :item='item' page='Kojunktiv2'  )

 
</template>
<script setup>
import Base from "@/components/Base.vue";
import { ref, onMounted, reactive, toRaw } from 'vue'
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot, getDoc, doc, setDoc, getDocs } from "firebase/firestore";

// onMounted(async () => {
//   const WerbenRef = collection(db, "KONJUNKTVS2");
//   for (const item of Präsens) {
//     const newDocRef = doc(WerbenRef, 'Präsens');
//     await setDoc(newDocRef, item.row1);
//   }
// })
var titlesPräsens = ref([
  { id: 0, title: 'Präsens', dbTopE: "KONJUNKTVS2", dbTopZ: "Präsens", dbItems: 'KONJUNMTIVS2Präsens', isOpen: false },
  { id: 1, title: 'Vergangenheit', dbTopE: "KONJUNKTVS2", dbTopZ: "Vergangenheit", dbItems: 'KONJUNMTIVS2Vergangenheit', isOpen: false },
  { id: 2, title: 'Futur I', dbTopE: "KONJUNKTVS2", dbTopZ: "FuturI", dbItems: 'KONJUNKTIVS2FuturI', isOpen: false },
  { id: 3, title: 'Futur II', dbTopE: "KONJUNKTVS2", dbTopZ: "FuturII", dbItems: 'KONJUNKTIVS2FuturII', isOpen: false },

])
var titlesModalverben = ref([
  { id: 0, title: 'Gegenwart Modalverben', dbTopE: "KONJUNKTVS2", dbTopZ: "GegenwartModalverben", dbItems: "KONJUNKTIVS2Modal", isOpen: false },
  { id: 0, title: 'Vergangenheit Modalverben', dbTopE: "KONJUNKTVS2", dbTopZ: "VergangenheitModalverben", dbItems: "KONJUNKTIVS2ModalVergangenheit", isOpen: false },
])


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

<style lang="scss"></style>