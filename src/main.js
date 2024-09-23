import "virtual:svg-icons-register";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { piniaPersistPlugin } from "./store/piniaPersist";

const pinia = createPinia();
pinia.use(piniaPersistPlugin);

const app = createApp(App);

// .directive("focus", function (el, binding) {
//   // el.focus();
//   if (binding.value == "foo") {
//     el.value = "succsess";
//   }
// })
// .directive(
//   "test",
//   {
//     mounted(el, binding) {
//       if (binding.value) {
//         el.focus();
//         el.classList.add("_is-light");
//       }
//     },
//   }
//   // function (el, binding) {
//   //   // el.focus();
//   //   if (binding.value == "foo") {
//   //     el.value = "succsess";
//   //   }
//   // }
// )
// .directive("focus", {
//   mounted(el, binding) {
//     if (binding.value) {
//       el.focus();
//       el.classList.add("_is-light");
//     }
//   },
// })
app
  .directive("blur", {
    updated(el, binding) {
      if (binding.value) {
        el.blur();
        el.classList.remove("_is-light");
      }
    },
  })
  .directive("button", {
    mounted(el) {
      let target = el;

      const Button = (e) => {
        let mValue = Math.max(target.clientWidth, target.clientHeight),
          addDiv = document.createElement("div"),
          rect = target.getBoundingClientRect();
        addDiv.classList.add("addDiv");
        addDiv.style.width = addDiv.style.height = mValue + "px";
        addDiv.style.left = e.clientX - rect.left - mValue / 2 + "px";
        addDiv.style.top = e.clientY - rect.top - mValue / 2 + "px";

        target.append(addDiv);
        setTimeout(() => {
          addDiv.remove();
        }, 3000);
      };
      el.onclick = (e) => {
        Button(e);
      };
    },
  })
  .directive("tool", {
    mounted(el) {
      let add = document.createElement("div");

      el.addEventListener("mouseover", (e) => {
        // add.innerText = el.getAttribute("data");
        // add.innerText = el.getAttribute("data").split(",").join(" ");
        add.innerText = el.getAttribute("data");
        // .replace(/,{3,}/g, ":")
        // .replace(/,{1}/g, " ")
        // .replace(/:{1}/g, " , ");
        add.classList.add("add");
        el.appendChild(add);
        var xPosition = el.offsetLeft;
        var yPosition = el.offsetTop;
        add.style.left = 0 + "px";
        add.style.top = 0 + "px";
      });

      el.addEventListener("mouseleave", (e) => {
        add.remove();
      });
    },
  })
  .use(router)
  .use(pinia)
  .mount("#app");
