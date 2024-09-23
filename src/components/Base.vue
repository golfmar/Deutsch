<template lang='pug'>
.base(ref='base')
	Button( :text='item.title' @click='HandlerClick(item.id)' :disabled="isButtonDisabled" :class="[(isButtonDisabled == true  ) ? '_is-active' : '', 'activButton' ]"   svg='click'   )
	.base__hidden(:class="(isButtonDisabled == true) ? '_is-active' : '' ")
		Button(@click='HandlerClose' svg='x-circle' margin='0' class='ButtonClose')
		.tabel(v-if=" isButtonDisabled==true")
			ul(v-if="TopTemp.row1")
				li(v-for="i in TopTemp.row1" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Dürfen")
				li(v-for="i in TopTemp.Dürfen" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Dürfen")
				li(v-for="i in TopTemp.Können" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Möchten")
				li(v-for="i in TopTemp.Möchten" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Mögen")
				li(v-for="i in TopTemp.Mögen" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Müssen")
				li(v-for="i in TopTemp.Müssen" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Sollen")
				li(v-for="i in TopTemp.Sollen" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Wollen")
				li(v-for="i in TopTemp.Wollen" :key="index" ) {{ i }} 

			ul(v-if="TopTemp.Gegenwart")
				li(v-for="i in TopTemp.Gegenwart" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Vergangenheit")
				li(v-for="i in TopTemp.Vergangenheit" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.FuturI")
				li(v-for="i in TopTemp.FuturI" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.FuturII")
				li(v-for="i in TopTemp.FuturII" :key="index" ) {{ i }} 

			ul(v-if="TopTemp.Präsens")
				li(v-for="i in TopTemp.Präsens" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Präteritum")
				li(v-for="i in TopTemp.Präteritum" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Perfekt")
				li(v-for="i in TopTemp.Perfekt" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Plusquamperfekt")
				li(v-for="i in TopTemp.Plusquamperfekt" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Futur1")
				li(v-for="i in TopTemp.Futur1" :key="index" ) {{ i }} 

			ul(v-if="TopTemp.würde")
				li(v-for="i in TopTemp.würde" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Unregelmäßige")
				li(v-for="i in TopTemp.Unregelmäßige" :key="index" ) {{ i }} 
			ul(v-if="TopTemp.Regelmäßige")
				li(v-for="i in TopTemp.Regelmäßige" :key="index" ) {{ i }} 

		.block__buttons(v-if="LowTemp && AuthStore.isAuthenticated && isButtonDisabled==true")
			Button( text='Mischen'   @click = "Mischen(Temp)"  svg='arrow-repeat')
			Button( text='Start'  @click='start'    svg='sport')
			Button( text='Stop'   @click='stop'    svg='stopwatch')
			Button( text='Reset'   @click='reset'    )
		.tablo(v-if="LowTemp && AuthStore.isAuthenticated && isButtonDisabled==true")
			span.zeit Anzahl der richtigen Antworten:  
				span {{ count }}
			span.zeit Sie haben für das Training ausgegeben:   
				span {{ formattedTime }}
		.spielPlatz(v-if="LowTemp && isButtonDisabled==true")
			.block__line(v-for="el in LowTemp" :key="index" v-if="LowTemp") 
				.block__info 
					h4 {{el.text}}
					button.tooltip(v-if="el.x" v-tool  :data = "el.x")
						span i

				div
					Input(v-if="el.x"   :Antwort='content'  :content='content' :resetInputs='resetInputs'  v-for="content in el.x.split(' ')" :key="index" @lineFertig="lineFertig" )
					Input(v-if="!el.x"   :Antwort='content'  :content='el.content' :resetInputs='resetInputs'  v-for="content in el.content" :key="index" @lineFertig="lineFertig" )

</template>
<script setup>
import { ref, computed, onMounted, watchEffect, nextTick } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

const props = defineProps({
	item: {
		type: Object,
		required: false
	},
	page: {
		type: String,
		required: false
	}
})


var isButtonDisabled = ref(false);
const base = ref(null)
const scrollPosition = ref(0);
// ---pinia-----
import { useAuthStore } from '@/store/authent';
const AuthStore = useAuthStore();
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot, getDoc, doc, setDoc, } from "firebase/firestore";
// -----

// -----
var TopTemp = ref([]);
var LowTemp = ref([]);
const emit = defineEmits(['CloseAndere'])
const HandlerClick = async () => {

	try {
		const docSnap = await getDoc(doc(db, props.item.dbTopE, props.item.dbTopZ));
		if (docSnap.exists()) {
			scrollPosition.value = base.value.getBoundingClientRect().top;
			nextTick(() => {
				window.scrollTo({
					top: scrollPosition.value - 200,
					behavior: 'smooth', // 'smooth' для плавного возврата
				});

			});
			TopTemp.value = docSnap.data();
			isButtonDisabled.value = true;
			document.querySelector('header').style.zIndex = "-1";
			document.querySelector('body').classList.add("_lock");
		}
	} catch (e) {
		console.error("Error getting document: ", e);
	}


	if (props.item.dbItems) {
		onSnapshot(query(collection(db, props.item.dbItems)), (querySnapshot) => {
			querySnapshot.forEach((doc) => {
				LowTemp.value.push(doc.data());
			});
		})
	}
};


// ==========================
var time = ref(0);        // Количество секунд
var interval = ref(null);   // Интервал для обновления времени
const formattedTime = computed(() => {
	const hours = Math.floor(time.value / 3600).toString().padStart(2, '0');
	const minutes = Math.floor((time.value % 3600) / 60).toString().padStart(2, '0');
	const seconds = (time.value % 60).toString().padStart(2, '0');
	return `${hours}h ${minutes}m ${seconds}s`;
})

const Mischen = (Data) => {
	Data.sort(() => Math.random() - 0.5);
}
const start = () => {
	if (!interval.value) {
		interval.value = setInterval(() => {
			time.value++;
		}, 1000);
	}
};


const stop = () => {
	clearInterval(interval.value);
	interval.value = null;
};

// const emit = defineEmits(['addTime'])
const capturedValue = ref(null);
var prozent = ref(0);
var resetInputs = ref(false);
// --------------------------
var count = ref(0);
var countAll = ref(0);
const lineFertig = (some) => {
	if (some.closest(".block__line").nextElementSibling) {
		some.closest(".block__line").nextElementSibling.querySelector('input').focus();
	}
	let lineItems = [...some.closest(".spielPlatz").querySelectorAll(".block__line")];
	countAll.value = lineItems.length
	count.value++
}

// --------------------------

const reset = () => {
	stop();
	capturedValue.value = formattedTime.value;
	count.value > 0 ? prozent.value = Math.round(count.value * 100 / countAll.value) : prozent.value = 0;
	AuthStore.refresh(props.page, capturedValue.value, prozent.value)
	resetInputs.value = !resetInputs.value;
	count.value = 0;
	formattedTime.value = 0;
	time.value = 0;
	prozent.value = 0;
};
// --------------------------------
const HandlerClose = () => {
	document.querySelector('body').classList.remove("_lock");
	isButtonDisabled.value = false;
	document.querySelector('header').style.zIndex = "100";
};
</script>
<style lang='scss' scoped>
.but-wave {
	padding: 5px 8px;

	&.activButton {
		min-height: 50px;
		min-width: 150px;
	}

	&:has(svg) {
		padding: 8px 30px 8px 5px;
	}


}

.but-wave.ButtonClose {
	padding: 3px;
	position: fixed;
	top: 22px;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 100%;
	width: 30px;
	height: 30px;
	display: grid;
	place-items: center;

	svg {
		width: 17px;
		height: 17px;
		position: relative;
	}
}



.tabel {
	background-color: #fff;
	border: 2px solid $brown-7;
	box-shadow: 1px 1px 4px #666;
	border-radius: 3px;
	border-collapse: collapse;
	border-spacing: 0;
	font-family: "Roboto-Regular", sans-serif;


	ul {
		// display: grid;
		// grid-template-columns: repeat(auto-fill, max-content);
		// grid-auto-flow: column;
		// align-items: center;
		outline: 1px solid #ededed;
		padding: 5px 0;

		@media (max-width: 600px) {
			grid-auto-flow: row;
		}

		li {

			line-height: .8;
			text-shadow: none;
			padding: 3px;
			white-space: nowrap;
			font-weight: 400;

			@media (max-width: 600px) {
				white-space: wrap;
			}

			&:first-of-type {
				font-weight: 600;
			}


			&:last-of-type {
				border-right: none;
			}
		}
	}
}

.spielPlatz {
	padding: 5px;
	border: 3px solid white;
	border-radius: 10px;
	background: #d6d2d0;


}

.block__buttons {
	margin: 10px 0 0 0;
	display: flex;
	column-gap: 5px;
}

.tablo {
	margin: 10px 0 10px 0;
	display: flex;
	flex-direction: column;

	span.zeit {
		font-family: 'HouschkaPro-DemiBold', sans-serif;
		color: #fff;

		span {
			font-size: larger;
			color: #eb2f2f;
			white-space: nowrap;
		}
	}
}

.block__info {
	position: relative;
	display: inline-block;
}

.block__line {
	margin: 0 0 6px 0;

	h4 {
		display: inline-block;
		margin: 0 0 3px 0;
		position: relative;
		padding: 0 0 0 25px;
	}

	input:not([type="range"]) {
		height: 22px;
		border-radius: 3px;
		margin: 0 3px 0 0;

		&:last-of-type {
			margin: 0 0 0 0;
		}
	}


}

.base__hidden {
	left: 0%;
	top: 0px;
	z-index: 20000;
	position: fixed;
	width: 100vw;
	overflow: hidden;
	height: 100vh;
	background: rgba(0, 0, 0, .85);
	overflow: scroll;
	transition: opacity 0.3s;
	transform: scale(0);
	padding: 44px 20px 20px 20px;
	opacity: 0;

	&._is-active {
		transform: scale(1);
		opacity: 1;
	}
}
</style>