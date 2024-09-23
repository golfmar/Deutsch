<template lang="pug">
.container
  input(ref='myinput' type="text")
  button(@click='InputFocus') submitData
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TestInput from '@/components/TestInput.vue';



const myinput = ref(null)

// function InputFocus() {
//   myinput.value.focus()
// }

onMounted(() => {
  myinput.value.focus();
});

</script>

<style lang="scss" scoped></style>