<template lang="pug">
button(:type = type @click.prevent="$emit('someEvent'), Button($event)").btn.but-wave.mixButton {{ text }}
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  }

})

const Button = (event) => {
  let target = event.target.closest(".but-wave");
  let mValue = Math.max(target.clientWidth, target.clientHeight),
    addDiv = document.createElement("div"),
    rect = target.getBoundingClientRect();
  addDiv.classList.add("addDiv");
  addDiv.style.width = addDiv.style.height = mValue + "px";
  addDiv.style.left = event.clientX - rect.left - mValue / 2 + "px";
  addDiv.style.top = event.clientY - rect.top - mValue / 2 + "px";

  target.closest(".but-wave").append(addDiv);
  setTimeout(() => {
    addDiv.remove();
  }, 3000);
}

</script>

<style lang="scss" scoped>
button {
  border: 1px solid transparent;
  outline: none;
  display: inline-block;
  color: $grey-11;
  border-radius: 3px;
  background-color: $blue-13;
  @include flex-center;
  @include transition;
  cursor: pointer;
  padding: 5px 10px;
  text-transform: uppercase;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);

  &:hover {
    color: white;
    background-color: $blue-6 !important;
  }
}
</style>