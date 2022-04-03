<template>
  <div id="triggerSelectionCard">
    <div :style="{ backgroundImage: 'url(' + imgURL + ')' }" class="icon"></div>
  </div>
</template>

<script setup>
//Classes
import TriggerOption from "../../classes/TriggerOption.js";

let props = defineProps({
  triggerOption: Object,
});
let imgURL = "";
switch (props.triggerOption) {
  case TriggerOption.Shake:
    imgURL = "../../assets/shake.svg";
    break;

  case TriggerOption.Touch:
    imgURL = "../../assets/touch.svg";
    break;

  case TriggerOption.Voice:
    imgURL = "../../assets/voice.svg";
    break;

  default:
    console.log("Trigger option is misconfigured");
    break;
}
</script>

<style scoped>
#triggerSelectionCard {
  padding: 1rem;
  box-sizing: border-box;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 6px solid white;
  border-radius: 10px;
  text-align: center;
}
.icon {
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
