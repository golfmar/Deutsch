<template lang="pug">

li
	span.marker(v-if="item.marker" :class="[{'mannlich':item.marker ==='M','veiblich':item.marker ==='F','neutral':item.marker ==='N','plural':item.marker ==='P'}]") {{item.marker}}
	span(v-if='item.text') {{item.text}}
	
</template>

<script setup>
const props = defineProps({

	item: {
		type: Object,
		required: false
	}

})	
</script>

<style lang="scss" scoped>
li {
	padding: 10px 13px;
	column-gap: 20px;
	display: flex;

	span {
		font-size: 18px;
		color: $light-blue-1;


		&.marker {
			@include flex-center;
			z-index: 2;
			position: relative;
			width: 30px;

			&::after {
				content: '';
				position: absolute;
				width: 30px;
				height: 30px;
				border-radius: 50%;
				top: 50%;
				left: 50%;
				z-index: -1;
				transform: translate(-50%, -50%);
			}

			&.mannlich {
				&::after {
					background: $orange-7;
				}

			}

			&.veiblich {
				&::after {
					background: $purple-4;
				}

			}

			&.neutral {
				&::after {
					background: $teal-7;
				}

			}

			&.plural {
				&::after {
					background: $pink-14;
				}

			}
		}
	}

}
</style>
