<template lang="pug">
.plaza
	//- .plaza__title
	//- 	h2 Plaza
	.plaza__top 
		p Bitte füllen Sie die leeren Felder aus. 
		p Es sieht so aus -
		p 
			span die richtige Antwort 
			span die falsche Antwort 
	

</template>

<script setup>



</script>

<style lang="scss" scoped>
.plaza {

	&__top {

		p {
			margin: 10px 0 0 0;

			&:nth-child(3) {
				display: grid;
				grid-template-columns: repeat(auto-fill, 160px);
				gap: 5px 5px;
			}


		}

		span {
			padding: 5px 10px;
			border-radius: 5px;

			&:nth-child(1) {
				box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
				background: $green-2 !important;
				color: $green-8;
			}

			&:nth-child(2) {
				background: lighten($deep-orange-13, 20%);
				box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
				color: $grey-10;
			}
		}
	}


}
</style>
