<template lang="pug">
form(action="#" name="send-form" @submit.prevent="Login").send#send-form
	h2 Login
	.vergessen Noch nicht registriert?
		a( href="#!" @click.prevent='Register' ) Register
	.input-field
		input#email(type='email' name='email'  placeholder=' Denzel Washington' v-model.prevent="email" )
		label.text-field__label(for='email') *Bitte geben Sie Ihre E-Mail ein
	.input-field
		input#password(type='password' name='password'  placeholder=' Denzel Washington' v-model.prevent="password")
		label.text-field__label(for='password') *Bitte geben Sie Ihre Password ein
		.fildset-checkbox
			.form-check
			input#showPassword(type='checkbox' name="showPassword" @click="togglePassword()")
			label(for='showPassword')
				SvgIcon(name='eye' )
	.vergessen Password vergessen?
		a( href="#!" @click.prevent='resetForm' ) E-Mail zum Zurücksetzen senden
	Button( type='submit'   text='Login')
	transition(mode='easy-in-out' name='opentab')
		#message(  v-if="mess ==  true " ) {{ mes }}
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // import router
const router = useRouter();
import Button from '@/components/Button.vue';
const email = ref('')
const mess = ref(false)
const mes = ref('')
const password = ref('')
const uid = ref('')
const name = ref('')
import SvgIcon from '@/components/SvgIcon.vue'
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { db } from "@/firebase/config.ts";
const auth = getAuth();
// ==========================================
const Register = () => {
	router.push("/register");
}

// ==========================================
const messageShow = (data) => {
	if (data.includes('@')) {
		data = data.substring(0, data.indexOf('@'));
		mes.value = `Hallo, ${data}. \nSie sind im System!`;
	} else {
		mes.value = data;
	}

	mess.value = true
	setTimeout(() => {
		mes.value = '';
		mess.value = false
	}, 2000);
};
// ==========================================
const resetForm = () => {
	sendPasswordResetEmail(auth, email.value)
		.then(() => {
			messageShow('E-Mail zum Zurücksetzen des Passworts gesendet!');
		})
		.catch(
			(error) => {
				switch (error.code) {
					case "auth/missing-email":
						mes.value = "fehlende E-Mail-Adresse";
						messageShow(mes.value);
						break;
					case "auth/user-not-found":
						mes.value = "benutzer nicht gefunden";
						messageShow(mes.value);
						break;
				}
				return;
			});
}

// ==========================================

const Login = () => {

	signInWithEmailAndPassword(auth, email.value, password.value)
		.then((userCredential) => {
			// Успешный вход
			const user = userCredential.user;
			uid.value = user.uid
			name.value = user.email.substring(0, user.email.indexOf('@'));
			messageShow(user.email);
			setTimeout(() => {
				const userData = {
					email: email.value,
					password: password.value,
					name: name.value,
					uid: uid.value
				};
				authStore.login(userData);
				router.push("/privat");
			}, 2000);
		})
		.catch(
			(error) => {
				switch (error.code) {
					case "auth/user-not-found":
						mes.value = "benutzer nicht gefunden"
						messageShow(mes.value);
						break;
					case "auth/wrong-password":
						mes.value = "Falsches Passwort"
						messageShow(mes.value);
						break;
					case "auth/missing-password":
						mes.value = "Fehlendes Passwort"
						messageShow(mes.value);
						break;
					case "auth/invalid-email":
						mes.value = "Ungültige E-Mail-Adresse"
						messageShow(mes.value);
						break;
					default:
						mes.value = error.code
						messageShow(mes.value);
				}
			}
		);


}
// ==========================================


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
	display: grid;
	place-items: center;
	width: 100vw;
	top: 0%;
	left: 0%;
	height: 100vh;
	color: $blue-grey-1;
	background: rgba(7, 31, 43, 0.85);
	padding: 0 30px;
	text-align: center;
	transition: all 0.2s;
	box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);
	white-space: pre-line;
	line-height: 1.5;
	z-index: 20000;
	backdrop-filter: blur(5px);
}

.vergessen {
	position: relative;
	display: flex;
	align-items: center;
	column-gap: 9px;
	row-gap: 15px;
	margin: 0 0 20px 0;

	a {
		text-decoration: underline !important;
		margin: 0 0 0 0;
		font-size: 14px;
	}
}

button {
	padding: 5px 40px;
	margin: 40px 0 0 0;
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
</style>
