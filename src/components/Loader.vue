<template lang='pug'>
h1.loading-container 
	.loader
</template>
<script setup>
import * as Imgs from '../assets/img/img';
</script>
<style lang='scss' scoped>
.loading-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: radial-gradient(ellipse, white, $brown-6);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10000000;
}

.loader {

	width: 48px;
	height: 48px;
	border: 4px solid;
	background: $blue-grey-2;
	border-color: transparent $brown-2 $brown-6 transparent;
	border-radius: 50%;
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	animation: rotation 1s ease-in-out infinite;
}

.loader::after {
	content: '';
	box-sizing: border-box;
	position: absolute;
	left: 50%;
	top: 50%;
	border: 12px solid;
	border-color: transparent $brown-4 $brown-8 transparent;
	transform: translate(-50%, -50%);
	border-radius: 50%;
}

@keyframes rotation {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
