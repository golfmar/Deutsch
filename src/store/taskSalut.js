import { ref } from "vue";
import { defineStore } from "pinia";

export const useTaskSalut = defineStore("taskSalut", {
  state: () => ({
    isActiveSalut: "notActive",
  }),
  // getters: {
  //   newUser: (state) => {
  //     return (userEmail) => (state.name = userEmail);
  //   },
  // },
});
