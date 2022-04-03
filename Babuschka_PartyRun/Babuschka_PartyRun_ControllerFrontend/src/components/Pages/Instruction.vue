<template>
  <PageBackground imageURL="background_default.png" />
  <ColorBorder :role="props.playerInfo.role" />
  <HeaderBar
    :screenType="ScreenType.Instruction"
    @handle_btn_back="$emit('navigate_to', ScreenType.TriggerSelection)"
    @handle_btn_leave="$emit('handle_btn_leave')"
  />
  <h1>Instruction</h1>
  <h3>{{ description_1 }}</h3>
  <h3>{{ description_2 }}</h3>
  <ControlElement :triggerOption="props.playerInfo.triggerOption" />
  <img
    id="btnReady"
    :src="!ready ? 'ready.svg' : 'unready.svg'"
    @click="toggleReady"
    alt=""
  />
  <h3>{{ readyText }}</h3>
  <h3 class="heartbeat" v-if="ready">Waiting for other players...</h3>
</template>

<script setup>
import { ref } from "vue";
// Classes
import ScreenType from "../../classes/ScreenType.js";
import Role from "../../classes/Role.js";
import TriggerOption from "../../classes/TriggerOption.js";
// Components
import PageBackground from "../Modules/PageBackground.vue";
import HeaderBar from "../Modules/HeaderBar.vue";
import ColorBorder from "../Modules/ColorBorder.vue";
import ControlElement from "../Modules/ControlElement.vue";

let props = defineProps({
  playerInfo: Object,
});

const emit = defineEmits(["handle_ready_change"]);

let ready = ref(false);
let description_1 = "";
let description_2 = "";
let readyText = ref("Tap to ready up");
switch (props.playerInfo.triggerOption) {
  case TriggerOption.Shake:
    description_1 = "Shake your phone to jump.";
    description_2 = "Shake again to doublejump.";
    break;

  case TriggerOption.Touch:
    description_1 = "Tap to jump.";
    description_2 = "Tap again to doublejump.";
    break;

  case TriggerOption.Voice:
    description_1 = "Say 'jump' to jump.";
    description_2 = "Say 'jump' again to doublejump.";
    break;

  default:
    console.log("Trigger option misconfigured");
    break;
}

let color = "";

switch (props.playerInfo.role) {
  case Role.Jump:
    color = "#00FFF0";
    break;

  case Role.ChargeShot:
    color = "#6BC203";
    break;

  case Role.ReleaseShot:
    color = "#FF9900";
    break;

  case Role.Enemy:
    color = "#DB00FF";
    break;

  default:
    console.log("Role is misconfigured...");
    break;
}

let toggleReady = () => {
  ready.value = !ready.value;
  if (ready.value) {
    readyText.value = "Tap to unready";
  } else {
    readyText.value = "Tap to ready up";
  }

  emit("handle_ready_change", ready.value);
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  padding: 0;
}
h3 {
  text-align: center;
  margin: 0;
  padding: 0;
}
#btnReady {
  height: 80px;
}

.heartbeat {
  animation: heartbeat 1s infinite alternate;
}

@keyframes heartbeat {
  to {
    transform: scale(1.1);
  }
}
</style>
