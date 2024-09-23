<template lang="pug">
header.header
  .container
    .header__body
      .logo 
        router-link(to="/")
          SvgIcon(name='flag' )
      router-link.willkommen(to="/privat" v-if="AuthStore.user !== null ")  {{ AuthStore.user.name}}
      router-link(to="/login" v-if="!AuthStore.isAuthenticated") Login
      a( href="#!" @click='LogoutHandler' v-if="AuthStore.isAuthenticated") Logout
      transition(mode='easy-in-out' name='f'  )
        .header__links(v-if=" burgerActive" )
          .container.container-links
            router-link(v-for="link in links" :key="link.name" :to="link.href" @click='clickBurger') {{ link.name }}
      ._burger( @click='clickBurger' :class="[burgerActive ? ' _is-active' : '']") 
        span

</template>
<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
import { useRouter } from 'vue-router'
const router = useRouter();
import { useAuthStore } from '../store/authent';
const AuthStore = useAuthStore();
// ==========================
const LogoutHandler = () => {
  AuthStore.logout();
  router.push("/");
};
// ==========================
const links = ref([
  { name: "Home", href: "/" },
  { name: "Artikel", href: "/artikel" },
  { name: "Personal", href: "/personal" },
  { name: "Interrogativ", href: "/interrogativ" },
  { name: "Reflexiv", href: "/reflexiv" },
  { name: "Possessiv", href: "/possessiv" },
  { name: "Demonstrativ", href: "/demonstrativ" },
  { name: "Deklination", href: "/deklination" },
  { name: "Pronominale Adverbien", href: "/pronominaleAdverbien" },
  { name: "Modal", href: "/modal" },
  { name: "Passiv", href: "/passiv" },
  { name: "Konjunktiv-II", href: "/konjunktiv" },
  { name: "Verben", href: "/verben" },
  // { name: "Rektion", href: "/rektion" },
  { name: "Nomen-Verb-Verbindungen", href: "/nomen" },
  // { name: "Form", href: "/form" },
  // { name: "Tasks", href: "/tasks" },
  // { name: "SignIn", href: "/signin" },
]);
var burgerActive = ref(false);
let auth;
var userEmail = ref('');
const isLoggedIn = ref(false)
const clickBurger = () => {
  // if (window.innerWidth <= 1200) {
  burgerActive.value = !burgerActive.value;
  if (burgerActive.value == true) {
    document.querySelector('body').classList.add("_lock")
  } else {
    document.querySelector('body').classList.remove("_lock")
  }
  // }
}
const handleWindowScroll = () => {
  const header = document.querySelector('.header')
  if (window.pageYOffset > 60) {
    header.classList.add("responciveHeader");
  } else {
    header.classList.remove("responciveHeader");
  }
};
// onUnmounted(() => {
//   window.removeEventListener("resize", handleWindowSizeChange);
// });
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  background: $brown-4;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0) 51%, rgba(0, 0, 0, 0.3)) !important;
  z-index: 100;

  .logo {
    padding: 5px;
    @include transition;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 auto 0 0;

    &:hover {
      background-color: #e0e0e06e;
    }

    a {
      border: none;
      display: inline-flex;
      column-gap: 10px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  &__body {
    display: flex;
    column-gap: 20px;
    align-items: center;
    padding: 5px 0;

    a {
      color: $brown-2;

      &:hover {
        color: $grey-1;
      }
    }
  }



  &__links {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    // padding: 80px 20px 40px;
    overflow: auto;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(15px);
    z-index: 1000;

    .container-links {
      display: flex;
      flex-direction: column;
      text-align: right;
      min-height: 100vh;
      padding: 80px 0px 40px;
      row-gap: 15px;
      align-items: flex-end;
    }

    a {
      white-space: nowrap;
      line-height: 1;
    }
  }

  a.router-link-active {
    color: $amber-9;
  }

  ._burger {
    z-index: 20000;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    display: block;
    transition: all 0.2s;

    &:hover {
      background-color: #e0e0e06e;
    }

    span {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      top: 20%;
      left: 50%;
      transform: translate(-50%, 50%);
    }

    &::before {
      bottom: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    span,
    &::after,
    &::before {
      background: $grey-3;
      width: 18px;
      height: 2px;
    }

    &._is-active {


      span,
      &::after,
      &::before {
        background: $grey-3;
      }

      &::after {
        top: 46%;
        left: 21.5%;
        transform: rotate(40deg);
      }

      &::before {
        bottom: 48%;
        left: 21.5%;
        transform: rotate(-40deg);
      }
    }
  }

  .willkommen {
    font-family: 'MuseoSansCyrl-300', sans-serif;
    color: #efebe9;
    box-shadow: 0px 0px 4px 0px rgba(187, 186, 184, 0.4), inset 0px 0px 8px 0px rgb(254 237 203 / 36%);
    border-radius: 50%;
    padding: 3px 8px;
    font-weight: 300;
    display: inline-block;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      color: #fafafa;
    }
  }

  .responciveHeader {
    // height: 50px;
    padding: 3px 0;
    backdrop-filter: blur(15px);
    @include transition;
  }
}

.f-enter-from {
  transition: .2s all;
  transform: translateX(-100vw);
}

// .v-enter-active,
.f-enter-to {
  transition: .2s all;
  transform: translateX(0);
}

.f-leave-from {
  transition: .2s all;
  transform: translateX(0);
}

.f-leave-to {
  transition: .2s all;
  transform: translateX(-100vw);
}


@media (max-width: 600px) {
  .header__links {
    padding: 40px 10px 40px;
  }

  .header__links .container-links {
    padding: 40px 0px 40px;
  }
}
</style>
