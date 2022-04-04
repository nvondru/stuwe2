<template>
  <div id="colorBorder" :style="{ borderColor: color }"></div>
</template>

<script setup>
import Role from "../../classes/Role.js";
let props = defineProps({
  role: Object,
});
let color = "";

switch (props.role) {
  case Role.Jump:
    color = "#00FFF0";
    break;

  case Role.ShotCharge:
    color = "#6BC203";
    break;

  case Role.ShotRelease:
    color = "#FF9900";
    break;

  case Role.Enemy:
    color = "#DB00FF";
    break;

  default:
    console.log("Role is misconfigured...");
    break;
}
</script>

<style scoped>
#colorBorder {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 5px solid;
  box-sizing: border-box;
  z-index: -5;
}
</style>
