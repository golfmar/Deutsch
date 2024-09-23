<template lang="pug">
input(type='text'   v-model.trim='inputValue'  ref="some" @input='HendleEventInput()'   @focus="focusHandler()"  @blur="blurHandler()"   :class="[(inputValue == Antwort) ? '_is-active' : '_is-falsch',(focused == true) ? '_is-light' : '' ]" v-if="Antwort !== undefined")

</template>




<script setup>
import {
	ref, watch, defineProps
	//  defineEmits
} from 'vue';
import * as images from '@/assets/img/img.js'

// v-blur='flag'
const inputValue = ref('')
const focused = ref(false)
// const flag = ref(false)
const some = ref(null)
// const emit = defineEmits(['anwortPositiv'])


// import { useTaskSalut } from "../store/taskSalut"
// import { storeToRefs } from 'pinia'
// const store = useTaskSalut();
// const { isActiveSalut } = storeToRefs(store)




const HendleEventInput = () => {
	if (inputValue.value == props.Antwort) {
		// flag.value = true

		if (some.value.nextElementSibling && !some.value.nextElementSibling.classList.contains('_is-active')) {
			some.value.nextElementSibling.focus()
			some.value.nextElementSibling.classList.add("_is-light");
		} else {
			some.value.blur()
			some.value.classList.remove("_is-light")
			if (some.value.closest('.plaza__line').nextElementSibling) {

				some.value.closest('.plaza__line').nextElementSibling.querySelector("input").focus();
			}

			// isActiveSalut.value = 'isActive'

			const salut = document.createElement('img')
			salut.setAttribute('src', images.urlImgSalut)
			salut.classList.add('salut')
			some.value.closest('.plaza__line').append(salut)
			setTimeout(() => {
				salut.remove()
			}, 1200);
			// emit('anwortPositiv', true)
		}
	} else {
		some.value.classList.add("_is-light")
	}
}



const props = defineProps({

	focusAct: {
		type: Boolean,
		required: false
	},

	reset: {
		type: Boolean,
		required: false
	},
	Antwort: {
		type: String,
		required: false
	},

})

// 
const focusHandler = () => {
	focused.value = true;
}
const blurHandler = () => {
	focused.value = false;
}

watch(() => props.reset, (newvalue, oldvalue) => {
	inputValue.value = '';
});

// onMounted(() => {  })

</script>

<style lang="scss" scoped>
input {
	display: inline-block;
	max-width: 110px;
	max-height: 22px;
	border-radius: 5px;
	// color: transparent;

	// &:focus {
	// 	background: lighten($deep-orange-1, 50%) !important;
	// 	color: $deep-orange-13;
	// 	box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
	// }

	&._is-light {
		background: lighten($deep-orange-13, 30%) !important;
		box-shadow: inset 0 0 5px rgb(253, 252, 252) !important;
		border: 1px solid red;
		color: $grey-10;
	}

	&._is-active {
		background: $green-2 !important;
		box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
		border: 1px solid transparent;
		color: $green-8;
	}

	&._is-falsch {
		background: lighten($deep-orange-13, 20%);
		box-shadow: inset 0 0 5px rgb(253, 252, 252) !important;
		color: $grey-10;
	}
}
</style>
