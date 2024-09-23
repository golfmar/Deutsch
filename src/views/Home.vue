<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i10')
  .inhaltText
    p Hallo zusammen! 
    p Mein Name ist Victor. Meine Muttersprache ist Russisch. Ich lebe seit etwas mehr als einem Jahr in Deutschland und lerne parallel Deutsch.
    p Die Idee zu dieser App entstand, nachdem mir klar wurde, dass ich nicht wirklich sprechen kann, obwohl ich schon viel über diese Sprache wusste. Ich beschloss, einen Simulator zu bauen, um Sprachkonstrukte zu trainieren. Ich habe mir das Ziel gesetzt, die fertigen Sätze nicht zu wiederholen, sondern sie selbst zu erstellen. Dies erwies sich als viel schwieriger, als die Lücken in einem Satz mit vorher geschriebenen Wörtern zu füllen. Es stimmt, man muss geduldig sein und buchstäblich einige Lösungen verkaufen. Das ist nicht der einfachste Weg, aber es funktioniert für mich! Vielleicht wird diese App jemandem helfen oder die Fantasie wecken.
    p Jetzt zur App selbst. Die Simulatoren sind nach einem thematischen Prinzip unterteilt. Russische Sätze werden fast nie richtig ins Deutsche übersetzt und bedeuten vielmehr eine Aufgabe oder Situation, die auf Deutsch reproduziert werden sollte. Jedes Wort nimmt einen Platz ein. Sie müssen nach Wörtern suchen, bis Sie den vollständigen Satz erhalten. Beachten Sie die Punkte und Kommas. Sie nehmen auch Platz ein. Wenn das Feld grün wird, bedeutet dies, dass das Wort korrekt geschrieben ist und an der richtigen Stelle ist.
    p Hier werden keine Themen gesammelt, die für das Lernen notwendig sind, sondern solche, die nicht vermieden werden können.
    p Für Programmierer: Die App ist in Vue geschrieben. Firebase-Hosting wurde verwendet.  Der Sammler ist Vite. Pinia, Pug, Scss.
    p Feedback 
      span._innerspan yushinbox@gmail.com.
    p Viel Spass beim ausprobieren!
  
</template>
<script setup>
import { ref } from 'vue';


import Loader from "@/components/Loader.vue";
import ImgLoader from "@/components/ImgLoader.vue";
var isLoading = ref(true);
const imgFertig = () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
};

</script>
<style lang="scss" scoped>
p {
  font-family: "RR", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: $brown-8;
  line-height: 1.2;

  ._innerspan {
    color: $red-14;
  }
}

.inhaltText {
  margin: 40px auto 0;
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(40, 40, 40, 0.2);
  background: rgba(255, 255, 255, .65);
  width: 60%;
  border-radius: 50px;
  padding: 20px;
  position: relative;
  z-index: 20;
}

@media (max-width: 767px) {
  p {
    font-size: 18px;
  }

  .inhaltText {
    margin: 10px 0 0 0;
    width: 100%;
    box-shadow: 0 0 5px 0 rgba(40, 40, 40, 0.2);
    border-radius: 30px;
    padding: 10px;
  }
}
</style>
