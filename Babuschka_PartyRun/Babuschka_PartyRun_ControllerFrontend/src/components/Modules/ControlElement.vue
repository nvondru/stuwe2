<template>
  <div
    id="controlElement"
    :class="{ background: props.triggerOption == TriggerOption.Touch }"
  >
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
    imgURL = "shake.svg";
    break;

  case TriggerOption.Touch:
    imgURL = "touch.svg";
    break;

  case TriggerOption.Voice:
    imgURL = "voice.svg";
    break;

  default:
    console.log("Trigger option is misconfigured");
    break;
}
</script>

<style scoped>
#controlElement {
  padding: 40px;
  box-sizing: border-box;
  width: 70vw;
  height: 70vw;
  text-align: center;
}
.icon {
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.background {
  background-color: rgba(255, 255, 255, 0.5);
  border: 6px solid white;
  border-radius: 10px;
}
</style>
