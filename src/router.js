import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Artikel from "@/views/Artikel.vue";
import Personal from "@/views/Personal.vue";
import Interrogativ from "@/views/Interrogativ.vue";
import Reflexiv from "@/views/Reflexiv.vue";
import Possessiv from "@/views/Possessiv.vue";
import Form from "@/views/Form.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Privat from "@/views/Privat.vue";
import Demonstrativ from "@/views/Demonstrativ.vue";
import Modal from "@/views/Modal.vue";
import Passiv from "@/views/Passiv.vue";
import Konjunktiv from "@/views/Konjunktiv-II.vue";
import Nomen from "@/views/Nomen.vue";
// import SignUp from "@/views/SignUp.vue";
// import SignIn from "@/views/SignIn.vue";
// import Tasks from "@/components/Tasks.vue";
import Verben from "@/views/Verben.vue";
// import Rektion from "@/views/Rektion.vue";
import Deklination from "@/views/Deklination.vue";
import PronominaleAdverbien from "@/views/PronominaleAdverbien.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/artikel", name: "Artikel", component: Artikel },
    { path: "/personal", name: "Personal", component: Personal },
    { path: "/interrogativ", name: "Interrogativ", component: Interrogativ },
    { path: "/reflexiv", name: "Reflexiv", component: Reflexiv },
    { path: "/possessiv", name: "Possessiv", component: Possessiv },
    { path: "/form", name: "Form", component: Form },
    { path: "/register", name: "Register", component: Register },
    { path: "/login", name: "Login", component: Login },
    { path: "/privat", name: "Privat", component: Privat },
    { path: "/demonstrativ", name: "Demonstrativ", component: Demonstrativ },
    { path: "/modal", name: "Modal", component: Modal },
    { path: "/passiv", name: "Passiv", component: Passiv },
    { path: "/konjunktiv", name: "Konjunktiv", component: Konjunktiv },
    { path: "/nomen", name: "Nomen", component: Nomen },
    // { path: "/signup", name: "SignUp", component: SignUp },
    // { path: "/signin", name: "SignIn", component: SignIn },
    // { path: "/tasks", name: "Tasks", component: Tasks },
    { path: "/verben", name: "Verben", component: Verben },
    // { path: "/rektion", name: "Rektion", component: Rektion },
    { path: "/deklination", name: "Deklination", component: Deklination },
    {
      path: "/pronominaleAdverbien",
      name: "PronominaleAdverbien",
      component: PronominaleAdverbien,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = false; // Здесь вы проверяете, авторизован ли пользователь (например, через Vuex или другой способ)

//   if (
//     to.matched.some((record) => record.meta.requiresAuth) &&
//     !isAuthenticated
//   ) {
//     next("/login");
//   } else {
//     next("/");
//   }
// });

export default router;
