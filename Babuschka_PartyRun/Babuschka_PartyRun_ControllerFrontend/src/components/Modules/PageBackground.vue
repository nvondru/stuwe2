<template>
  <img
    v-if="props.currentScreen == ScreenType.EnterName"
    id="backgroundImage"
    src="../../assets/background_start.png"
    alt=""
  />
  <img
    v-else
    id="backgroundImage"
    src="../../assets/background_default.png"
    alt=""
  />
</template>

<script setup>
import { ref } from "@vue/reactivity";
import ScreenType from "../../classes/ScreenType";

let props = defineProps({
  currentScreen: Object,
});
</script>

<style>
#backgroundImage {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -100;
}
</style>
