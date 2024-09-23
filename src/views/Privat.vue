<template lang='pug'>
section.privat(v-if= "AuthStore.user !== null ")
	.container
		.privat__body
			p Willkommen, 
				h2 {{ AuthStore.user.name }}
			p Ihre E-mail: 
				span {{ AuthStore.user.email }}
			h3 Ihre Leistungen:
			.tabel
				.tabel__head
					span._a Teil
					span._b Data , Zeit
					span._c  Stoppuhr
					span._d Richtigen Antworten
				.result(v-if="!!AuthStore.user.Artikel")
					h3 Artikel 
					.result__content
						.result__unit(v-for="item in AuthStore.user.Artikel " :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Artikel',item)" svg='x-circle'  margin='0')
				.result(v-if="!!AuthStore.user.Personal")
					h3 Personal 
					.result__content
						.result__unit(v-for="item in AuthStore.user.Personal " :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Personal',item)" svg='x-circle' margin='0')
				.result(v-if="!!AuthStore.user.Interrogativ")
					h3 Interrogativ
					.result__content
						.result__unit(v-for="item in AuthStore.user.Interrogativ " :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Interrogativ',item)" svg='x-circle' margin='0')
				.result(v-if="!!AuthStore.user.Reflexiv ")
					h3 Reflexiv 
					.result__content
						.result__unit(v-for="item in AuthStore.user.Reflexiv " :key="index" margin='0') 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Reflexiv',item)" svg='x-circle' margin='0')
				.result(v-if="!!AuthStore.user.Possessiv")
					h3 Possessiv 
					.result__content
						.result__unit(v-for="item in AuthStore.user.Possessiv" :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Possessiv',item)" svg='x-circle' margin='0')
				.result(v-if="!!AuthStore.user.Demonstrativ")
					h3 Demonstrativ 
					.result__content
						.result__unit(v-for="item in AuthStore.user.Demonstrativ" :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Demonstrativ',item)" svg='x-circle' margin='0')
				.result(v-if="!!AuthStore.user.Deklination")
					h3 Deklination 
					.result__content
						.result__unit(v-for="item in AuthStore.user.Deklination" :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Deklination',item)" svg='x-circle' margin='0')
				.result(v-if="!!AuthStore.user.PronominaleAdverbien")
					h3 Pronominale Adverbien
					.result__content
						.result__unit(v-for="item in AuthStore.user.PronominaleAdverbien" :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('PronominaleAdverbien',item)" svg='x-circle' margin='0')
				.result(v-if="!!AuthStore.user.Modalverben")
					h3 Modalverben
					.result__content
						.result__unit(v-for="item in AuthStore.user.Modalverben" :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Modalverben',item)" svg='x-circle' margin='0')
				.result(v-if="!!AuthStore.user.Passiv")
					h3 Passiv
					.result__content
						.result__unit(v-for="item in AuthStore.user.Passiv" :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Passiv',item)" svg='x-circle' margin='0')
				.result(v-if="!!AuthStore.user.Kojunktiv2")
					h3 Kojunktiv2
					.result__content
						.result__unit(v-for="item in AuthStore.user.Kojunktiv2" :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Kojunktiv2',item)" svg='x-circle' margin='0')
				.result(v-if="!!AuthStore.user.Verbindungen")
					h3 Verbindungen
					.result__content
						.result__unit(v-for="item in AuthStore.user.Verbindungen" :key="index") 
							span {{item.zeit}}
							span {{item.stoppuhr}}
							ProgressCircle(:percent='item.prozent')
							Button(  @click="clickHandler('Verbindungen',item)" svg='x-circle' margin='0')
</template>
<script setup>
import ProgressCircle from "@/components/ProgressCircle.vue";
import { useAuthStore } from '../store/authent';
const AuthStore = useAuthStore();
import SvgIcon from "@/components/SvgIcon.vue";
import Button from "@/components/Button.vue";
const clickHandler = (data, item) => {
	AuthStore.delititem(data, item)
};
</script>
<style lang='scss' scoped>
h2 {
	display: inline-block;
	font-size: 16px;
}

h3 {
	font-family: 'MuseoSansCyrl-300', sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 1;
}

p {
	font-family: 'MuseoSansCyrl-300', sans-serif;

	span {
		font-family: "RR", sans-serif;
		font-size: 12px;
		font-weight: 800;
		color: #5d4037;
		text-transform: uppercase;
		line-height: 1.5;
	}
}

.tabel {
	display: inline-flex;
	flex-direction: column;
	margin: 5px 0 0 0;
	background: #fff;
	border: 2px solid $brown-4;
	box-shadow: 1px 1px 4px #666;
	font-family: 'MuseoSansCyrl-300', sans-serif;
	font-size: 14px;
	font-weight: 400;
	border-radius: 5px;
	overflow: hidden;

	&__head {
		display: grid;
		grid-template-columns: 128px 138px 100px 110px;

		span {
			font-family: 'MuseoSansCyrl-300', sans-serif;
			font-size: 14px;
			font-weight: 400;
			text-transform: uppercase;
			line-height: 1;
			border-right: 1px solid #ededed;
			background-color: $brown-5;
			color: #fff;
			text-shadow: none;
			display: grid;
			place-items: center;
			padding: 2px 5px;
			text-align: center;

			&:last-of-type {
				border-right: none;
			}
		}
	}
}

.result {
	display: grid;
	grid-template-columns: 127px 1fr;
	border-bottom: 1px solid $brown-7;
	border-collapse: collapse;

	h3 {
		font-size: 14px;
		display: inline-block;
		text-shadow: none;
		padding: 2px 5px;
		border-right: 1px solid #ededed;
	}

	&__content {
		display: flex;
		flex-direction: column;
	}

	&__unit {
		font-weight: 400;
		font-size: 18px;
		text-transform: none;
		align-items: center;
		align-content: center;
		display: grid;
		grid-template-columns: repeat(4, max-content);
		background-color: #fff;
		height: 100%;
		border-bottom: 1px solid #ededed;
		position: relative;

		&:last-child span {
			border-bottom: none;
		}

		button {
			position: absolute;
			top: 50%;
			right: -9px;
			transform: translate(-50%, -56%);
			width: 30px;
			height: 30px;
			color: #5d4037;
			padding: 0 0 0 0;
			margin: 0;
			transition: all 0.2s;
			cursor: pointer;
			border-radius: 100%;

			svg {
				margin: 0;
			}
		}

		span {
			height: 100%;
			border-right: 1px solid #ededed;
			font-size: 14px;
			min-width: 100px;
			text-align: center;
			padding: 3px;
		}

		.progress-circle {
			width: 77px;
		}
	}
}

@media (max-width: 600px) {
	.privat__body {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tabel {
		&__head {
			grid-template-columns: 128px 138px;
			grid-template-areas: "a b" "a c" "a d";

			._a {
				grid-area: a;
			}

			._b {
				grid-area: b;
			}

			._c {
				grid-area: c;
			}

			._d {
				grid-area: d;
			}
		}
	}

	.result__unit {
		grid-template-columns: 1fr;

		button {
			top: 73%;
		}
	}
}
</style>
