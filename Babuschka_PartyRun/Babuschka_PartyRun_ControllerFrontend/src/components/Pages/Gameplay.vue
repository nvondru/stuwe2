<template>
  <PageBackground />
  <ColorBorder :role="props.playerInfo.role" />

  <div v-if="props.paused" id="pausedOverlay">
    <h1>Game paused...</h1>
  </div>

  <HeaderBar
    :screenType="ScreenType.Gameplay"
    @handle_btn_options="$emit('show_options')"
  />
  <div class="flexContainer">
    <div>
      <h1>{{ props.playerInfo.name }}</h1>
      <h3>{{ description_1 }}</h3>
      <h3>{{ description_2 }}</h3>
    </div>
    <ControlElement
      @click="handle_control_element"
      :triggerOption="props.playerInfo.triggerOption"
    />
  </div>
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
  paused: Object,
});

let emit = defineEmits(["handle_trigger"]);

let description_1 = "";
let description_2 = "";
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
let handle_control_element = () => {
  if (props.playerInfo.triggerOption == TriggerOption.Touch) {
    emit("handle_trigger");
  }
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  text-align: center;
}
h3 {
  text-align: center;
}
#btnReady {
  height: 80px;
}
.flexContainer {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: first baseline;
  gap: 30px;
}
#pausedOverlay {
  position: absolute;
  z-index: 200;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
}

#pausedOverlay h1 {
  color: rgb(37, 37, 37);
}
</style>
