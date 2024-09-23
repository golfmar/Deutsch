<template lang="pug">
.tabs 
  .tabs__item  
    .tabs__title(@click="tabopen=!tabopen") 
      h3 {{title}}
      SvgIcon(name='click' )
    transition(mode='easy-in-out' name='o'  )
      .tabs__hidden(v-if="tabopen") 
        .tabs__wrap
          ul
            li( v-for="item in items" :key="index" :item='item')
              h4(v-if="item.title") {{item.title}}
              span(v-if="item.text1")
                SvgIcon(:name='item.svg1' v-if="item.svg1")
                span {{item.text1}}
              span(v-if="item.text2")
                SvgIcon(:name='item.svg2' v-if="item.svg2")
                span {{item.text2}}
              span(v-if="item.text3")
                SvgIcon(:name='item.svg3' v-if="item.svg3")
                span {{item.text3}}
              span(v-if="item.text4")
                SvgIcon(:name='item.svg4' v-if="item.svg4")
                span {{item.text4}}
              span(v-if="item.text5")
                SvgIcon(:name='item.svg5' v-if="item.svg5")
                span {{item.text5}}
              span(v-if="item.text6")
                SvgIcon(:name='item.svg6' v-if="item.svg6")
                span {{item.text6}}
              span(v-if="item.text7")
                SvgIcon(:name='item.svg7' v-if="item.svg7")
                span {{item.text7}}
              span(v-if="item.text8")
                SvgIcon(:name='item.svg8' v-if="item.svg8")
                span {{item.text8}}
              span(v-if="item.text9")
                SvgIcon(:name='item.svg9' v-if="item.svg9")
                span {{item.text9}}
              span(v-if="item.text10")
                SvgIcon(:name='item.svg10' v-if="item.svg10")
                span {{item.text10}}



</template>

<script setup>
import Text from '@/components/Text.vue'; import SvgIcon from '@/components/SvgIcon.vue'
import { ref } from 'vue';
const tabopen = ref(false);
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

<style lang="scss" scoped>
.tabs {
  &__item {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    margin: 5px 0;
    border-radius: 5px;
  }

  &__title {
    padding: 5px;
    background: $blue-6;
    z-index: 4;
    cursor: pointer;
    position: relative;
    @include flex-aligne-center;

    h3 {
      color: $blue-1;
      display: inline-block;
    }

    svg {
      width: 20px;
      height: 20px;
      margin: 0 0 0 10px;
      display: inline-block;
      opacity: .7;
    }
  }

  &__hidden {
    position: relative;
    z-index: 2;
    display: grid;
    background: $grey-1;
  }

  &__icons {
    display: grid;
    grid-template-columns: repeat(4, 120px);
    padding: 0 0 0 140px;
  }

  &__wrap {
    min-height: 0px;
    row-gap: 5px;
    @include flex-column;


    li {
      // display: grid;
      // grid-template-columns: repeat(11, max-content);
      padding: 5px;
      // align-items: center;
      column-gap: 20px;
      display: flex;
      // flex-direction: column;
      align-items: flex-start;

      &:first-child {
        padding: 10px 5px 5px 5px;
      }

      &:last-child {
        padding: 5px 5px 10px 5px;
      }

      span {
        // white-space: nowrap;
      }

      h4 {
        font-family: "RR", sans-serif;
        color: $blue-6;
        font-size: 18px;
        margin: 0 20px 0 0;
      }

      svg {
        width: 25px;
        height: 25px;
        margin: 0 3px 0 0;
      }
    }
  }
}


@media (max-width: 950px) {
  .tabs {


    &__wrap {
      padding: 8px 5px 0px 5px;

      li {
        // grid-template-columns: max-content;
        margin: 0 0 10px 0;
        gap: 3px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h4 {
          color: $blue-6;
          font-size: 15px;
          margin: 0 10px 0 0;
        }

        span {
          line-height: .9;
          margin: 0 0 5px 0;
        }
      }
    }
  }


}

.o-enter-from {
  grid-template-rows: 0fr;
}

// .v-enter-active,
.o-enter-to {
  transition: .2s all;
  grid-template-rows: 1fr;
}

.o-leave-from {
  transition: .2s all;
  grid-template-rows: 1fr;
}

.o-leave-to {
  transition: .2s all;
  grid-template-rows: 0fr;
}
</style>
