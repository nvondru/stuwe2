<template>
  <div class="selectionCard" :style="{ borderColor: color }">
    <div class="imgWrapper">
      <img
        v-if="props.role == Role.Jump"
        src="../../assets/babuschka_jump.png"
        alt=""
      />
      <img
        v-else-if="props.role == Role.ShotCharge"
        src="../../assets/shot_charge.png"
        alt=""
      />
      <img
        v-else-if="props.role == Role.ShotRelease"
        src="../../assets/shot_release.png"
        alt=""
      />
      <img
        v-else-if="props.role == Role.Enemy"
        src="../../assets/polarBear.png"
        alt=""
      />
    </div>
    <hr :style="{ borderColor: color }" />
    <div class="roleDescription">{{ description }}</div>
  </div>
</template>

<script setup>
import Role from "../../classes/Role.js";
let props = defineProps({
  role: Object,
});
let description = "";
let color = "";

switch (props.role) {
  case Role.Jump:
    description = "Jump";
    color = "#00FFF0";
    break;

  case Role.ShotCharge:
    description = "Charge Shot";
    color = "#6BC203";

    break;

  case Role.ShotRelease:
    description = "Release Shot";
    color = "#FF9900";

    break;

  case Role.Enemy:
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

  display: flex;
  flex-direction: column;
}
img {
  object-fit: contain;
  width: 80%;
  height: 100%;
}
hr {
  border: 2px solid limegreen;
  margin: 0;
}
.roleDescription {
  display: flex;
  padding: 6px 0;
  justify-content: center;
  align-items: center; /* for single line flex container */
  align-content: center; /* for multi-line flex container */
}
.imgWrapper {
  height: 100%;
  padding: 10px 0px;
  box-sizing: border-box;
}
</style>
