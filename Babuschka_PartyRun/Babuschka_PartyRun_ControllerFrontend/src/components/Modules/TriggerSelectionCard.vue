<template>
  <div id="triggerSelectionCard">
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
#triggerSelectionCard {
  padding: 1rem;
  box-sizing: border-box;
  width: 80%;
  height: 100%;
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
