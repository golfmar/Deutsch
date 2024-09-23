<template lang="pug">
.training
	Button(type='text' text="beispiele mischen" @someEvent="someEvent" )
	Button(type='text' text="focus" @click="elFocus")

	form.plaza__line(v-for="item in TempData " :key="index" ref='line')
		p {{ item.t0 }}
		Input(:Antwort = 'item.t1' :reset='reset' ) 
		Input(:Antwort = 'item.t2' :reset='reset' ) 
		Input(:Antwort = 'item.t3' :reset='reset' ) 
		Input(:Antwort = 'item.t4' :reset='reset' ) 
		Input(:Antwort = 'item.t5' :reset='reset' ) 
		Input(:Antwort = 'item.t6' :reset='reset' ) 
		Input(:Antwort = 'item.t7' :reset='reset' ) 
		Input(:Antwort = 'item.t8' :reset='reset' ) 
		Input(:Antwort = 'item.t9' :reset='reset' ) 
		Input(:Antwort = 'item.t10' :reset='reset' ) 
		Input(:Antwort = 'item.t11' :reset='reset' ) 
		Input(:Antwort = 'item.t12' :reset='reset' ) 
		Input(:Antwort = 'item.t13' :reset='reset' ) 
		Input(:Antwort = 'item.t14' :reset='reset' ) 
		Input(:Antwort = 'item.t15' :reset='reset' ) 
		Input(:Antwort = 'item.t16' :reset='reset' ) 
		Input(:Antwort = 'item.t17' :reset='reset' ) 
		Input(:Antwort = 'item.t18' :reset='reset' ) 
		Input(:Antwort = 'item.t19' :reset='reset' ) 
		Input(:Antwort = 'item.t20' :reset='reset' ) 
		Input(:Antwort = 'item.t21' :reset='reset' ) 
		Input(:Antwort = 'item.t22' :reset='reset' ) 
		Input(:Antwort = 'item.t23' :reset='reset' ) 
		Input(:Antwort = 'item.t24' :reset='reset' ) 
		Input(:Antwort = 'item.t25' :reset='reset' ) 
		Input(:Antwort = 'item.t26' :reset='reset' ) 
		Input(:Antwort = 'item.t27' :reset='reset' ) 
		Input(:Antwort = 'item.t28' :reset='reset' ) 
		Input(:Antwort = 'item.t29' :reset='reset' ) 
		Input(:Antwort = 'item.t30' :reset='reset' ) 
		Input(:Antwort = 'item.t31' :reset='reset' ) 
		Input(:Antwort = 'item.t32' :reset='reset' ) 
	
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
const props = defineProps({
	SlotData: {
		type: Object,
		required: false
	}
})
var reset = ref(true)
var antwort = ref(false)
var TempData = ref([])
TempData = props.SlotData
const line = ref(null)


// const anwortPositiv = (data) => {
// 	antwort.value = data
// 	if (antwort.value) {
// 		console.log(antwort.value);

// 	}
// }

// watch(() => antwort.value, (newvalue, oldvalue) => {
// 	// console.log(switchFocus.value);
// 	// if (newvalue !== oldvalue) {
// 	// switchFocus.value = true
// 	// }
// });

const someEvent = (data) => {
	TempData = TempData.sort((a, b) => Math.random() - 0.5);
	reset.value = !reset.value
}


// watch(() => reset.value, (newvalue, oldvalue) => {
// 	myinput.value.focus()
// });


// onMounted(() => {
// 	TempData = TempData.sort((a, b) => Math.random() - 0.5);
// });
</script>

<style lang="scss" scoped>
.plaza__line {
	margin: 0 0 10px 0;
	text-align: left;
	position: relative;
	display: inline-block;
}

.training {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.mixButton {
	margin: 10px 0;
}
</style>
