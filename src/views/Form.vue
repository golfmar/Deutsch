<template lang='pug'>
section
	Form(:validation-schema="schema" @submit="onSubmit")
		Field(name='email' type='email' :rules='validateEmail')
		ErrorMessage(name='email')
		button Sign up

	h4 DynamicForm

	DynamicForm(:schema="formSchema")




</template>
<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import DynamicForm from '@/components/DynamicForm.vue';
import * as Yup from 'yup';

// ========================================
const onSubmit = (values) => {
	console.log(JSON.stringify(values, null, 2));
}

const validateEmail = (value) => {
	// if the field is empty
	if (!value) {
		return 'This field is required';
	}
	// if the field is not a valid email
	const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	if (!regex.test(value)) {
		return 'This field must be a valid email';
	}
	// All is good
	return true;
}
// ===========================================
const formSchema = {
	fields: [
		{
			label: 'Your Name',
			name: 'name',
			as: 'input',
			rules: Yup.string().required(),
		},
		{
			label: 'Your Email',
			name: 'email',
			as: 'input',
			rules: Yup.string().email().required(),
		},
		{
			label: 'Your Password',
			name: 'password',
			as: 'input',
			type: 'password',
			rules: Yup.string().min(6).required(),
		},
	],
};

</script>
<style lang='scss' scoped>
h4 {
	margin: 20px 0 10px 0;
}
</style>
