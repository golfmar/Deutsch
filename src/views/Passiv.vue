<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i2')
  .page
    h2 Passiv
    .page-block.deep-orange-2
      p(style="color: red;font-weight: 800;") Многие формы пассива не преводятся дословно на русский или звучат некорректно!
      p(style="color: red;font-weight: 800;") Viele Formen des Passivs werden nicht wörtlich ins Russische übersetzt oder klingen falsch!
    .page-block.blue-grey-4
      .page-title--small
        h2 Das Vorgangspassiv 
      div
        p 📍 несовершенный пассив или по-другому его называют пассив действия 
        p 👌 Это значит, что действие, которое совершается над объектом не было завершено, мы не знаем его результат.
        p ✔️ Das Vorgangspassiv stellt den Vorgang, die Handlung oder das Geschehen in den Vordergrund.Button( :text='item.title' @click='HandlerClick(item.id)' :disabled="isButtonDisabled" :class="(isButtonDisabled == true  ) ? '_is-active' : '' " )
      .base-area
        .base-area__unit
          h3 Verben
          Base( v-for="item in titlesVorgangspas" :key="index"  :item='item' page='Passiv'  )
        .base-area__unit
          h3 Modalverben
          Base( v-for="item in titlesModal" :key="index"  :item='item' page='Passiv'  )
        .base-area__unit
          h3 Konjunktiv II
          Base( v-for="item in titlesKonjunktiv" :key="index"  :item='item'  page='Passiv' )
        .base-area__unit
          h3 Modalverben + Konjunktiv II
          Base( v-for="item in titlesModKon2" :key="index"  :item='item'  page='Passiv' )
    .page-block.amber-3
      .page-title--small
        h2 Das Zustandspassiv
      div
        p 📍 совершенный пассив или по-другому пассив состояния 
        p 👌Это значит, что у нас уже есть результат какого-либо действия. Мы просто констатируем как факт, то что произошло.
        p ✔️ Das Zustandspassiv drückt ein Ergebnis bzw. einen Zustand aus.
        p ✔️ Некоторые формы пассивного состояния очень похожи на активные формы.
        p Чтобы узнать, находится ли предложение в пассивном состоянии или в активном состоянии, установите его в пассивное   состояние. 
        p Если это возможно, то речь идет о пассиве состояния. Если это невозможно, предложение остается в активе.
        p ✔️ Manche Formen des Zustandspassivs ähneln sehr den Aktivformen.
        p Um herauszufinden, ob ein Satz im Zustandspassiv oder im Aktiv steht, setzt du ihn ins Vorgangspassiv. Ist das möglich, 
        p handelt es sich um das Zustandspassiv. Ist dies nicht möglich, steht der Satz im Aktiv.
      .base-area
        .base-area__unit
          h3 Verben
          Base( v-for="item in titlesZustandspassiv" :key="index"  :item='item' page='Passiv'  )
        .base-area__unit
          h3 Modalverben
          Base( v-for="item in titlesZustandspassivModalverben" :key="index"  :item='item'  page='Passiv' )
        .base-area__unit
          h3 Konjunktiv II
          Base( v-for="item in titlesZustandsKonjunktiv" :key="index"  :item='item' page='Passiv'  )
        .base-area__unit
          h3 Modalverben + Konjunktiv II
          Base( v-for="item in titlesZuModKon2" :key="index"  :item='item' page='Passiv'  )
</template>
<script setup>
import Base from "@/components/Base.vue";
import { ref, onMounted, reactive, toRaw } from 'vue'

import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot, getDoc, doc, setDoc, getDocs } from "firebase/firestore";


// --------------Vorgangspas-----
var titlesVorgangspas = ref([
  { id: 0, title: 'Werben', dbTopE: "Vorgangspassivs", dbTopZ: "Werben", dbItems: "VorWerben", isOpen: false },
])
// , dbItems: "SlotVorgangspassivsPräsens"
var titlesModal = ref([
  { id: 1, title: 'Modalverben  Präsens', dbTopE: "Vorgangspassivs", dbTopZ: "PräsensModalverb", dbItems: "VorModalPräsens", isOpen: false },
  { id: 2, title: 'Modalverben  Präteritum', dbTopE: "Vorgangspassivs", dbTopZ: "PräteritumModalverb", dbItems: "VorModalPräteritum", isOpen: false },
  { id: 3, title: 'Modalverben  Perfekt', dbTopE: "Vorgangspassivs", dbTopZ: "PerfektModalverb", dbItems: "VorModalPerfekt", isOpen: false },
  { id: 4, title: 'Modalverben  Plusquamperfekt', dbTopE: "Vorgangspassivs", dbTopZ: "PlusquamperfektModalverb", dbItems: "VorModalPlusquamperfekt", isOpen: false },
  { id: 5, title: 'Modalverben  Futur1', dbTopE: "Vorgangspassivs", dbTopZ: "Futur1Modalverb", dbItems: "VorModalFutur1", isOpen: false },
])
var titlesKonjunktiv = ref([
  { id: 1, title: 'KonjunktivII', dbTopE: "Vorgangspassivs", dbTopZ: "KonjunktivII", dbItems: "Konjuktiv2", isOpen: false },
])
var titlesModKon2 = ref([
  { id: 1, title: 'Modal KonjunktivII', dbTopE: "Vorgangspassivs", dbTopZ: "ModalKonjunktivII", dbItems: "ModalKonjunktivIIAlle", isOpen: false },
])
// --------------Zustands-----
var titlesZustandspassiv = ref([
  { id: 1, title: 'Werben', dbTopE: "Zustandspassiv", dbTopZ: "Werben", dbItems: "ZuWerben", isOpen: false },
])
var titlesZustandspassivModalverben = ref([
  { id: 1, title: 'Modalverben Präsens', dbTopE: "Zustandspassiv", dbTopZ: "PräsensModalverb", dbItems: 'ZuPresensModal', isOpen: false },
  { id: 2, title: 'Modalverben Präteritum', dbTopE: "Zustandspassiv", dbTopZ: "PräteritumModalverb", dbItems: 'ZuPräteritumModal', isOpen: false },
  { id: 3, title: 'Modalverben Perfekt', dbTopE: "Zustandspassiv", dbTopZ: "PerfektModalverb", dbItems: 'ZuPerfektModal', isOpen: false },
  { id: 4, title: 'Modalverben Plusquamperfekt', dbTopE: "Zustandspassiv", dbTopZ: "PlusquamperfektModalverb", dbItems: 'ZuPlusquamperfektModal', isOpen: false },
  { id: 5, title: 'Modalverben Futur1', dbTopE: "Zustandspassiv", dbTopZ: "Futur1Modalverb", dbItems: 'ZuFutur1Modal', isOpen: false },
])
var titlesZustandsKonjunktiv = ref([
  { id: 1, title: 'KonjunktivII', dbTopE: "Zustandspassiv", dbTopZ: "KonjunktivII", dbItems: 'ZuKon', isOpen: false },
])
var titlesZuModKon2 = ref([
  { id: 1, title: 'Modalverben KonjunktivII', dbTopE: "Zustandspassiv", dbTopZ: "ModalKonjunktivII", dbItems: 'ZuKonModal', isOpen: false },
])
// ---------------------
// var isLoading = ref(true);
// onMounted(() => {
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 1000);
// })
// var XY = ref([]);
// onMounted(async () => {
//   const qSq = await getDocs(collection(db, "SlotDataDürfen"));
//   const qSw = await getDocs(collection(db, "SlotDataMöchten"));
//   const qSe = await getDocs(collection(db, "SlotDataSollen"));
//   const qSr = await getDocs(collection(db, "SlotDataWollen"));
//   const qSt = await getDocs(collection(db, "SlotDataMögen"));

//   qSq.forEach((doc) => {
//     XY.value.push(doc.data());
//   });
//   qSw.forEach((doc) => {
//     XY.value.push(doc.data());
//   });
//   qSe.forEach((doc) => {
//     XY.value.push(doc.data());
//   });
//   qSr.forEach((doc) => {
//     XY.value.push(doc.data());
//   });
//   qSt.forEach((doc) => {
//     XY.value.push(doc.data());
//   });
// })

// onMounted(async () => {
//   const querySnapshot1 = await getDocs(collection(db, "SlotZuVergangenheitPassiv"));
//   const querySnapshot2 = await getDocs(collection(db, "SlotZuGegenwartPassiv"));
//   const querySnapshot3 = await getDocs(collection(db, "SlotZuFuturIPassiv"));
//   const querySnapshot4 = await getDocs(collection(db, "SlotZuFuturIIPassiv"));
//   const documents = [];
//    querySnapshot1.forEach((doc) => {
//    documents.push({ id: doc.data().text, ...doc.data() });
//   });
//   querySnapshot2.forEach((doc) => {
//     documents.push({ id: doc.data().text, ...doc.data() });
//   });
//   querySnapshot3.forEach((doc) => {
//     documents.push({ id: doc.data().text, ...doc.data() });
//   });
//   querySnapshot4.forEach((doc) => {
//     documents.push({ id: doc.data().text, ...doc.data() });
//   });
//   // querySnapshot5.forEach((doc) => {
//   //   documents.push({ id: doc.data().text, ...doc.data() });
//   // });
//   const WerbenRef = collection(db, "ZuKon");
//   for (const item of documents) {
//     const newDocRef = doc(WerbenRef, item.id);
//     await setDoc(newDocRef, item);
//   }
// })




// // ------------pinia-------------
// import { useAuthStore } from '@/store/authent';
// const authStore = useAuthStore();
// const addTime = (formattedTime, prozent) => { authStore.refresh('Passiv', formattedTime, prozent) };
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
<style lang="scss">
.base-area {
  margin: 5px 0 10px;

  &__unit {
    padding: 5px;
    border-radius: 5px;
    margin: 0 0 10px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;


    h3 {
      grid-column: 1/-1;
      font-family: "RR", sans-serif;
      font-size: 15px;
      font-weight: 800;
      color: #5d4037;
      text-transform: uppercase;
      line-height: 1.5;
      text-shadow: 0 0 5px white;
      margin: 0 50px 0 0;
    }

    &:nth-child(1) {
      background: lighten($purple-3, 20%);
      border: 3px solid lighten($purple-3, 10%);
    }

    &:nth-child(2) {
      background: lighten($light-blue-7, 20%);
      border: 3px solid lighten($light-blue-7, 10%);
    }

    &:nth-child(3) {
      background: lighten($cyan-6, 20%);
      border: 3px solid lighten($cyan-6, 10%);
    }

    &:nth-child(4) {
      background: lighten($yellow-6, 20%);
      border: 3px solid lighten($yellow-6, 10%);
    }
  }
}

p {
  padding: 3px 0;
}

.page-block div p {
  &:last-child {
    margin: 0 0 10px 0;
  }
}
</style>