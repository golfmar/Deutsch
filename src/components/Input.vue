<template lang="pug">
input(type='text' v-model.trim='inputValue'  :class="[(focused  == true) ? '_is-light' : '',(success == true) ? '_is-success' :  '' ]" @focus="focusHandler" @input='HendleEventInput'    @blur="blurHandler" ref = 'some'  )
</template>
<script setup>
import { ref, onMounted, watch, defineEmits, defineProps } from 'vue';
import * as images from '@/assets/img/img.js'
const inputValue = ref('')
const focused = ref(false)
const success = ref(false)
const some = ref(null)
const props = defineProps({
  resetInputs: {
    type: Boolean,
    required: false
  },
  Antwort: {
    type: String,
    required: false
  },
  content: {
    type: Array,
    required: false
  },

})

const blurHandler = () => {
  focused.value = false
}
const focusHandler = () => {
  focused.value = true
}
// -----------------------------------
const emit = defineEmits(['lineFertig'])

const HendleEventInput = () => {
  if (inputValue.value == props.Antwort) {
    focused.value = false
    success.value = true
    some.value.setAttribute('disabled', true)
    if (some.value.nextElementSibling) {
      some.value.nextElementSibling.focus();
    } else {
      emit('lineFertig', some.value)
    }
  }
}
watch(() => props.resetInputs, (newVal) => {
  inputValue.value = '';
  focused.value = false;
  success.value = false;
  some.value.removeAttribute("disabled");
  // Обнуляем значение input
});

// -----------------------------------
</script>


<style lang='scss' scoped>
input:not([type="range"]) {
  display: inline-block;
  max-width: 110px;
  max-height: 22px;
  border-radius: 5px;
  background-color: $lime-1;
  outline: 1px solid $lime-3;

  &._is-light {
    background: $green-2 ;
    box-shadow: inset 0 0 5px rgb(253, 252, 252);

  }

  &._is-success {
    background: $green-4 !important;
    box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
    border: 1px solid transparent;
    color: $green-10;
  }

  &._is-falsch {
    background: lighten($deep-orange-13, 20%);
    box-shadow: inset 0 0 5px rgb(253, 252, 252) !important;
    color: $grey-10;
  }
}
</style>