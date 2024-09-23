<template lang="pug">
p(v-if="errMsg !== ''" :class="[{'_errMsg' : success == false , '_errMsg--green' : success == true }]") {{ errMsg }}
</template>

<script setup>
const props = defineProps({
	errMsg: {
		type: String,
		required: false
	},
	success: {
		type: Boolean,
		required: false
	}
})
</script>

<style lang="scss" scoped>
._errMsg {
	margin: 10px 0 0 0;
	color: $red-14;
	background: $red-2;
	padding: 10px;
	border-radius: 3px;
	border: 1px solid $red-14;

	&--green {
		color: $green-10;
		margin: 10px 0 0 0;
		padding: 10px;
		background: $green-2;
		border: 1px solid $green-10;
	}
}
</style>



