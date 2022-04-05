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

  <!-- <div class="test">Permission granted: {{ props.permissionGranted }}</div> -->
</template>

<script setup>
//Classes
import { ref } from "@vue/reactivity";
import TriggerOption from "../../classes/TriggerOption.js";

let props = defineProps({
  triggerOption: Object,
  permissionGranted: Object,
});

let emit = defineEmits(["trigger"]);

// if (props.triggerOption.value.option == TriggerOption.Shake.option) {
//   addShakeHandler();
// }

let addShakeHandler = () => {
  // Position variables
  var x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0,
    z1 = 0,
    z2 = 0;

  var sensitivity = 20;
  window.addEventListener(
    "devicemotion",
    function (e) {
      x1 = e.accelerationIncludingGravity.x;
      y1 = e.accelerationIncludingGravity.y;
      z1 = e.accelerationIncludingGravity.z;
    },
    false
  );

  // Periodically check the position and fire
  // if the change is greater than the sensitivity
  setInterval(function () {
    let change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);

    if (change > sensitivity) {
      emit("trigger");
    }

    // Update new position
    x2 = x1;
    y2 = y1;
    z2 = z1;
  }, 10);
};
</script>

<style scoped>
#controlElement {
  padding: 1%;
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
.test {
  font-size: 1rem;
  color: lime;
  position: absolute;
  top: 10px;
}
</style>
