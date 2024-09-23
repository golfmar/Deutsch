<template lang="pug">
.tabs 
  .tabs__item  
    .tabs__title(@click="tabopen=!tabopen") 
      h3 {{title}}
      SvgIcon(name='click' )
    transition(mode='easy-in-out' name='o'  )
    .tabs__hidden(v-if="tabopen") 
      .tabs__wrap
        .page-block
          Plaza
          Slot(:SlotData='props.SlotData')



</template>

<script setup>
import Text from '@/components/Text.vue';
import Plaza from '@/components/Plaza.vue';
import Slot from '@/components/Slot.vue';
import SvgIcon from '@/components/SvgIcon.vue'
import { ref } from 'vue';
const tabopen = ref(false);
const props = defineProps({

  title: {
    type: String,
    required: false
  },
  SlotData: {
    type: Object,
    required: false
  }
})

</script>

<style lang="scss" scoped>
.page-block {
  margin: 0 0 0 0;
}

.plaza__top {
  margin: 0;
}

.tabs {
  &__item {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    margin: 0 0 5px 0;
    border-radius: 5px;
  }

  &__title {
    padding: 5px;
    background: $deep-purple-4;
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
      display: grid;
      grid-template-columns: 146px repeat(10, max-content);
      padding: 5px;
      align-items: center;
      column-gap: 20px;


      &:first-child {
        padding: 10px 5px 5px 5px;
      }

      &:last-child {
        padding: 5px 5px 10px 5px;
      }

      span {
        white-space: nowrap;
      }

      h4 {

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
        grid-template-columns: max-content;
        margin: 0 0 10px 0;
        gap: 3px;

        h4 {
          color: $blue-6;
          font-size: 15px;
          margin: 0 10px 0 0;
        }

        span {}
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