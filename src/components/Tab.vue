<template lang='pug'>
.tab
  h3.tab__title( ref='some') {{id}}
  transition(mode='easy-in-out' name='opentab'  )
    .tab__hidden(v-if="tabopen")
      .tab__wrap
        .tab__line(v-for="el in content" :key="index" )
          p(v-for="foo in el" :key="index" ) {{ foo }}

</template>

<script setup>
import { reactive, ref, onMounted, toRaw } from 'vue';
const props = defineProps({
  item: {
    type: Array,
    required: false
  },
  id: {
    type: String,
    required: false
  }
})
const some = ref(null)
var tabopen = ref(false);
var content = ref([]);
var title = ref('')
var inn = ref('')
onMounted(() => {
  content.value = toRaw(props.item)

})
let head = document.querySelector("body").addEventListener('click', (e) => {
  if ((e.target == some.value) && tabopen.value == false) {
    tabopen.value = true;
  }
  else if (e.target.closest('.tab__hidden') && tabopen.value == true) {
    tabopen.value = true;
  }
  else {
    tabopen.value = false
  }
});


</script>

<style lang='scss' scoped>
.tab {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  margin: 5px 0;
  border-radius: 5px;

}

.tab__title {
  padding: 5px;
  color: $blue-1;
  background: $brown-4;
  z-index: 4;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  @include flex-aligne-center;
}

.tab__hidden {
  position: relative;
  transition: .2s all;
  z-index: 2;
  background: $grey-3;
  padding: 5px;
  display: grid;
}

.tab__line {
  margin: 0 0 10px 0;

  p {
    &:first-child {
      color: $red-10;
      font-weight: 700;
      text-shadow: 0 0 5px white;

    }
  }

}

.tab__wrap {
  min-height: 0px;
  @include flex-column;
}

.opentab-enter-from {
  grid-template-rows: 0fr;
  padding: 5px;
}

// .v-enter-active,
.opentab-enter-to {
  grid-template-rows: 1fr;
  padding: 5px;
}

.opentab-leave-from {
  grid-template-rows: 1fr;
  padding: 5px;
}

.opentab-leave-to {
  grid-template-rows: 0fr;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>