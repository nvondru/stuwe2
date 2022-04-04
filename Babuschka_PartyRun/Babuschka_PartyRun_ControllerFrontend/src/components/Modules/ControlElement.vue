<template>
  <div
    id="controlElement"
    :class="{ background: props.triggerOption == TriggerOption.Touch }"
  >
    <div
      v-if="props.triggerOption == TriggerOption.Shake"
      class="icon shake"
    ></div>
    <div
      v-else-if="props.triggerOption == TriggerOption.Touch"
      class="icon touch"
    ></div>
    <div
      v-else-if="props.triggerOption == TriggerOption.Voice"
      class="icon voice"
    ></div>
  </div>
</template>

<script setup>
//Classes
import TriggerOption from "../../classes/TriggerOption.js";
let props = defineProps({
  triggerOption: Object,
});
</script>

<style scoped>
#controlElement {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-height: 300px;
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
.shake {
  background-image: url("../../assets/shake.svg");
}

.touch {
  background-image: url("../../assets/touch.svg");
}

.voice {
  background-image: url("../../assets/voice.svg");
}
</style>
