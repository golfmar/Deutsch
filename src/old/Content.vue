<template lang="pug">
.page-block 
  h2 {{title}}

    //- Content(:items='der' :headers='Headersder')
  p(v-for='element in items' :key='idex') {{ element.title }}
    span {{ element.text }}
    span {{ element.text1 }}


    Tabs(:items= 'items' title='')
    //- section.info
    //- .info-section(v-for="block in items" :key="index")
    //-   h3 {{headers[items.indexOf(block)].title}}
    //- ul.text
    //-   Text( v-for="item in block" :key="id"   :item='item') 


</template>

<script setup>
import { ref } from 'vue';
import Text from '@/components/Text.vue';
import Tabs from '@/components/Tabs.vue';
const props = defineProps({

  title: {
    type: String,
    required: false
  },
  items: {
    type: Object,
    required: false
  }
})

</script>

<style lang="scss">
// .col-section {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
//   column-gap: 20px;
// }
// .info {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(min(230px, 100%), 1fr));
//   gap: 20px;
//   margin: 20px 0 0px 0;
// }

// .info-section {
//   border-radius: 5px;
//   overflow: hidden;
//   background: $blue-13;
//   padding: 0 3px 5px;

//   h3 {
//     font-weight: bold;
//     color: $blue-5;
//     background: $blue-2;
//     width: 100%;
//     border-radius: 5px;
//     text-align: center;
//     padding: 5px;
//     margin: 3px 0;
//   }
// }

// @media (max-width: 899px) {
//   .info-section {
//     h3 {
//       font-size: clamp(14px, 3vw, 16px);
//     }
//   }

// }
</style>
