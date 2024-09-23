import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskArtikle = defineStore("taskArtikle", {
  state: () => ({
    Artikle: [
      {
        id: 1,
        title: "der",
        content: [
          {
            title: "-ant ",
            text1: "der Laborant",
            text2: "der Diamant",
          },
          {
            title: "-ant ",
            text1: "der Laborant",
            text2: "der Diamant",
          },
          {
            title: "-ant ",
            text1: "der Laborant",
            text2: "der Diamant",
          },
        ],
      },
      {
        id: 2,
        title: "die",
        content: [
          {
            title: "-ung",
            text1: "die Abdeckung",
            text2: "die Bildung",
          },
          {
            title: "-ung",
            text1: "die Abdeckung",
            text2: "die Bildung",
          },
          {
            title: "-ung",
            text1: "die Abdeckung",
            text2: "die Bildung",
          },
        ],
      },
      {
        id: 3,
        title: "das",
        content: [
          {
            title: "-chen",
            text1: "das Hähnchen",
            text2: "das Bäumchen",
          },
          {
            title: "-chen",
            text1: "das Hähnchen",
            text2: "das Bäumchen",
          },
          {
            title: "-chen",
            text1: "das Hähnchen",
            text2: "das Bäumchen",
          },
        ],
      },
    ],
  }),
  // actions: {
  //   addStaat(id, staatName, Beruf, Inhalt) {
  //     var flag = false;
  //     if (staatName !== "") {
  //       var contentNew = {
  //         titleItem: Beruf.value,
  //         gehaltItem: Inhalt.value,
  //       };

  //       this.staat.forEach((cell) => {
  //         if (cell.title == staatName.value) {
  //           cell.content.push(contentNew);
  //           flag = true;
  //         }
  //       });
  //       if (!flag) {
  //         this.staat.push({
  //           id: id.value,
  //           title: staatName.value,
  //           content: [contentNew],
  //           isVisible: false,
  //         });
  //       }
  //     }
  //   },

  //   ActiveStaat(item) {
  //     this.staat.forEach((cell) => {
  //       if ((cell.isVisible = true)) {
  //         cell.isVisible = false;
  //       }
  //       item.isVisible = true;
  //     });
  //   },
  //   DelitItem(item, land) {
  //     this.staat.forEach((cell) => {
  //       if (cell.title == land) {
  //         cell.content.forEach((content) => {
  //           if (content.titleItem == item) {
  //             var temp = cell.content.indexOf(content);
  //             cell.content.splice(temp, 1);
  //           }
  //         });
  //       }
  //     });
  //   },
  // },

  //   import { db } from "@/firebase/config.ts";
  // import { collection, query, where, onSnapshot } from "firebase/firestore";
  // const Rubriks = reactive([]);
  // onMounted(async () => {
  //   const q = query(collection(db, "deutsch", 'Artikel', 'der'));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {

  //     querySnapshot.forEach((doc) => {
  //       Rubriks.push({ ...doc.data() });
  //     });
  //     console.log(Rubriks);
  //   });
  // });
});
