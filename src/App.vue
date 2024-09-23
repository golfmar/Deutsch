<template lang="pug">
.wrapper.rel
  //- .imgs
  //-   picture
  //-     source(:srcset='images.urlFon' alt='img' type='image/webp' media='(min-width: 768px)')
  //-     source(:srcset='images.urlFonSm' alt='img' type='image/webp' media='(max-width: 767px)')
  //-     img(:src='images.urlFonSm' alt='img')
  Header
  main
    router-view
</template>

<script setup>
import * as images from '@/assets/img/img.js'
import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped>
img {
  filter: blur(6px);
}

@media (max-width: 767px) {
  img {
    filter: blur(3px);
  }
}
</style>
