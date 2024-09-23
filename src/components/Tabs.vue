<template lang='pug'>
.tabs
  .tabs__unit
    Tab(id='der' :item='der' )
  .tabs__unit
    Tab(id='die' :item='die' )
  .tabs__unit
    Tab(id='das' :item='das' )
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue';
import Tab from '@/components/Tab.vue';
var some = ref('');
var foo = reactive([]);
// --------------------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var der = reactive([])
var die = reactive([])
var das = reactive([])
const derArtikel = query(collection(db, "der"));
const dieArtikel = query(collection(db, "die"));
const dasArtikel = query(collection(db, "das"));
onMounted(async () => {
  onSnapshot(derArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().deutsch) {
        der.push(doc.data().deutsch.split("/"));
      }
    });
  });
  onSnapshot(dieArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().deutsch) {
        die.push(doc.data().deutsch.split("/"));
      }
    });
  });
  onSnapshot(dasArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().deutsch) {
        das.push(doc.data().deutsch.split("/"));
      }
    });
  });
});
</script>
<style lang='scss' scoped>
.tabs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(311px, max-content));
  column-gap: 5px;
  row-gap: 5px;
}
</style>