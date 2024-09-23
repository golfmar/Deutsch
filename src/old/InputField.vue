<template lang="pug">
.input-field
	input(:id='id' :type='type' :name='name' v-model="model"  placeholder=' Denzel Washington')
	label.text-field__label(:for='name') {{ text }}

</template>

<script setup>
import { ref, defineEmits, computed, watch, defineProps } from 'vue';


const props = defineProps({

	id: {
		type: String,
		required: false
	},
	type: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: false
	},
	model: {
		type: String,
		required: false
	},
	text: {
		type: String,
		required: false
	},
})
const emit = defineEmits(['eventChange'])
const handleChange = ($event) => {
	emit('eventChange', $event.target.value)
}
</script>

<style lang="scss" scoped>
.input-field {
	margin: 20px 0 0 0;
}



.input-field input[type="email"],
.input-field input[type="password"] {
	margin: 0 0 0 0;
	background: $deep-purple-1;
	box-shadow: 0 0 8px $blue-grey-4;
	padding: 5px 0 5px 10px;

	&+label {
		font-size: 14px;
		z-index: 20;
		left: 10px;
		cursor: pointer;

		&:hover {
			color: $blue-grey-4;
		}
	}

	&:hover {
		&+label {
			color: $blue-grey-4;
		}
	}

	&:focus+label,
	&:not(:placeholder-shown)+label {
		transform: translateY(-220%);
		color: $blue-grey-4;
	}

}
</style>
