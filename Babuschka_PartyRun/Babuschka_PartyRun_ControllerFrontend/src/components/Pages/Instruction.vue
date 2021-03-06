<template>
  <PageBackground />
  <ColorBorder :role="props.playerInfo.role" />
  <HeaderBar
    :screenType="ScreenType.Instruction"
    @handle_btn_back="handle_btn_back"
    @handle_btn_leave="$emit('handle_btn_leave')"
  />
  <div class="flexContainer">
    <div class="top">
      <h1>Instruction</h1>
      <h3>{{ description_1 }}</h3>
      <h3>{{ description_2 }}</h3>
    </div>
    <ControlElement
      :permissionGranted="props.permissionGranted"
      @click="handle_control_element"
      @trigger="$emit('handle_trigger')"
      :triggerOption="props.playerInfo.triggerOption"
    />
    <div>
      <img
        v-if="!ready"
        id="btnReady"
        src="../../assets/ready.svg"
        @click="toggleReady"
        alt=""
      />

      <img
        v-else
        id="btnReady"
        src="../../assets/unready.svg"
        @click="toggleReady"
        alt=""
      />
      <h3>{{ readyText }}</h3>
      <h3 class="heartbeat" :class="{ hide: !ready }">
        Waiting for other players...
      </h3>
      <div v-if="starting" id="startingOverlay">
        <h1 id="countdown">{{ counter }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
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
  starting: Object,
  permissionGranted: Object,
});

const emit = defineEmits([
  "handle_ready_change",
  "navigate_to",
  "release_trigger",
  "handle_trigger",
]);

let ready = ref(false);
let counter = ref(3);

let description_1 = "";
let description_2 = "";
let readyText = ref("Tap to ready up");
switch (props.playerInfo.triggerOption) {
  case TriggerOption.Shake:
    switch (props.playerInfo.role) {
      case Role.Jump:
        description_1 = "Shake your phone to jump.";
        description_2 = "Shake again to doublejump.";
        break;

      case Role.ShotCharge:
        description_1 = "Shake your phone to charge a shot.";
        description_2 = "Consumes a snowflake.";
        break;

      case Role.ShotRelease:
        description_1 = "Shake your phone to release the shot.";
        description_2 = "Only if a shot is charging.";
        break;

      case Role.Enemy:
        description_1 = "This functionality is not supported yet.";
        description_2 = ":(";
        break;

      default:
        break;
    }

    break;

  case TriggerOption.Touch:
    switch (props.playerInfo.role) {
      case Role.Jump:
        description_1 = "Tap to jump.";
        description_2 = "Tap again to doublejump.";
        break;

      case Role.ShotCharge:
        description_1 = "Tap to charge a shot.";
        description_2 = "Consumes a snowflake.";
        break;

      case Role.ShotRelease:
        description_1 = "Tap to release the shot.";
        description_2 = "Only if a shot is charging.";
        break;

      case Role.Enemy:
        description_1 = "This functionality is not supported yet.";
        description_2 = ":(";
        break;

      default:
        break;
    }
    break;

  case TriggerOption.Voice:
    description_1 = "This functionality is not supported yet.";
    description_2 = ":(";
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

let handle_btn_back = () => {
  emit("navigate_to", ScreenType.TriggerSelection);
  emit("release_trigger");
};

watch(
  () => props.starting,
  async (newValue, oldValue) => {
    console.log("Watched props.srating. New value is: " + newValue);
    if (newValue == true) {
      countDown();
    }

    if (newValue == false) {
      ready.value = false;
      counter.value = 3;
    }
  }
);

let countDown = () => {
  if (counter.value > 0) {
    setTimeout(() => {
      counter.value--;
      countDown();
    }, 1000);
  }
};
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
  height: 60px;
  margin-top: 15px;
}

.heartbeat {
  animation: heartbeat 1s infinite alternate;
  transition: opacity 200ms ease-in-out;
}

#startingOverlay {
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
#countdown {
  font-size: 10rem;
  color: rgb(37, 37, 37);
  animation: heartbeat 0.5s infinite alternate;
}
@keyframes heartbeat {
  to {
    transform: scale(1.1);
  }
}
.flexContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  text-align: center;
  /* gap: 30px; */
}
.hide {
  opacity: 0;
}
</style>
