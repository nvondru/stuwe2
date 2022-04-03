<template>
  <div class="selectionCard" :style="{ borderColor: color }">
    <img :src="imgURL" alt="" />
    <hr :style="{ borderColor: color }" />
    <div class="roleDescription">{{ description }}</div>
  </div>
</template>

<script setup>
import Role from "../../classes/Role.js";
let props = defineProps({
  role: Object,
});
let imgURL = "";
let description = "";
let color = "";

switch (props.role) {
  case Role.Jump:
    imgURL = "babuschka_jump.png";
    description = "Jump";
    color = "#00FFF0";
    break;

  case Role.ShotCharge:
    imgURL = "shot_charge.png";
    description = "Charge Shot";
    color = "#6BC203";

    break;

  case Role.ShotRelease:
    imgURL = "shot_release.png";
    description = "Release Shot";
    color = "#FF9900";

    break;

  case Role.Enemy:
    imgURL = "polarBear.png";
    description = "Enemy";
    color = "#DB00FF";

    break;

  default:
    console.log("Role is misconfigured...");
    break;
}
</script>

<style scoped>
.selectionCard {
  background-color: rgba(255, 255, 255, 0.5);
  border: 6px solid limegreen;
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
}
img {
  height: 70%;
  -webkit-font-smoothing: none;
}
hr {
  border: 2px solid limegreen;
  margin: 0;
}
.roleDescription {
  height: calc(30% - 4px);
  display: flex;

  justify-content: center;
  align-items: center; /* for single line flex container */
  align-content: center; /* for multi-line flex container */
}
</style>
