<template lang='pug'>
.look__img
	.imgs
		img(:src="imageUrl" alt="Loaded Image")
</template>


<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import { storage } from '@/firebase';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';

const props = defineProps({
	url: {
		type: String,
		required: false
	}
})
const imagePath = `${props.url}.jpg`;
const imageUrl = ref(null);
const emit = defineEmits(['imgFertig'])
const loadImage = async (Path) => {
	try {
		const imageReference = storageRef(storage, imagePath);
		imageUrl.value = await getDownloadURL(imageReference);
		if (imageUrl.value !== null) {
			emit('imgFertig')
		}
	}
	catch (err) {
		console.error("Ошибка загрузки изображения:", err);
	}
};
loadImage();


</script>


<style lang='scss' scoped>
.look__img {
	position: fixed;
	z-index: 10;
	top: 53px;
	left: 0%;
	width: 100vw;
	height: 100vh;
	opacity: 0.7;
}
</style>