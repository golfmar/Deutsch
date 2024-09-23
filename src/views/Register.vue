<template lang="pug">
form(action="#" name="send-form" ).send#send-formRegister
	h2 Register
	.input-field
		input#email(type='email' name='email'  placeholder=' Denzel Washington' v-model="email")
		label.text-field__label(for='email') *Bitte geben Sie Ihre E-Mail ein
	.input-field
		input#password(type='password' name='password'  placeholder=' Denzel Washington' v-model="password")
		label.text-field__label(for='password') *Bitte geben Sie Ihre Password ein
		.fildset-checkbox
			.form-check
				input#showPassword(type='checkbox' name="showPassword" @click="togglePassword()")
				label(for='showPassword')
					SvgIcon(name='eye' )


	Button(@click.prevent="register" type='submit' text='Register')
	transition(mode='easy-in-out' name='opentab')
		#message(  v-if="mess ==  true " ) {{ mes }}
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // import router
const router = useRouter();
import Button from '@/components/Button.vue';
const email = ref('')
const password = ref('')
const mess = ref(false)
const mes = ref('')
import SvgIcon from '@/components/SvgIcon.vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

// ==========================================
const messageShow = (data) => {
	mes.value = data;
	mess.value = true
	setTimeout(() => {
		mes.value = '';
		mess.value = false
	}, 2000);
};


const register = () => {
	createUserWithEmailAndPassword(auth, email.value, password.value)
		.then((UserCredential) => {
			// Успешный вход
			const user = UserCredential.user;
			messageShow(user.email);
			setTimeout(() => {
				router.push("/login");
			}, 2000);
		})

		.catch(
			(error) => {
				switch (error.code) {
					case "auth/email-already-in-use":
						messageShow("E-Mail bereits verwendet");
						setTimeout(() => {
							router.push("/login");
						}, 2000);
						break;

					case "auth/invalid-email":
						messageShow("Das Format der E-Mail-Adresse ist ungültig.");
						break;

					case "auth/operation-not-allowed":
						messageShow("Operation ist verboten");
						break;

					case "auth/weak-password":
						messageShow("Das Passwort muss mindestens 6 Zeichen lang sein");
						break;
					case "auth/missing-password":
						messageShow("Fehlendes Passwort");
						break;
					default:
						messageShow(error.code);
				}
				// 
				return;
			}
		);
}

const togglePassword = () => {
	const passwordField = document.getElementById("password");
	const showPassword = document.getElementById("showPassword");
	if (showPassword.checked) {
		passwordField.type = "text";
	} else {
		passwordField.type = "password";
	}
}

</script>

<style lang='scss' scoped>
h2 {
	margin: 0 0 30px 0;
}

.input-field {
	margin: 0 0 20px 0;
}

.send {
	padding: 20px 30px;
	max-width: 700px;
}

#message {
	position: fixed;
	display: flex;
	width: 100vw;
	top: 0%;
	left: 0%;
	height: 100vh;
	color: $blue-grey-1;
	background: rgba(7, 31, 43, 0.85);
	outline: 1px solid;
	padding: 0 0 0 0;
	transition: all 0.2s;
	box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);
	justify-content: center;
	align-items: center;
	z-index: 20000;
	backdrop-filter: blur(5px);
}

.opentab-enter-from {
	opacity: 0;
	transform: scale(0);
}

.opentab-enter-to {
	opacity: 1;
	transform: scale(1);
}

.opentab-leave-from {
	opacity: 1;
	transform: scale(1);
}

.opentab-leave-to {
	opacity: 0;
	transform: scale(0);
}

button {
	padding: 5px 40px;
	margin: 40px 0 0 0;
}
</style>
