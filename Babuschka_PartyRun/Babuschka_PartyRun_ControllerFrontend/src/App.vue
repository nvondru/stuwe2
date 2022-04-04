<template>
  <EnterName
    v-if="currentScreen.type == ScreenType.EnterName.type"
    @handle_set_name="setPlayerName"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <RoleSelection
    v-if="currentScreen.type == ScreenType.RoleSelection.type"
    :playerInfo="playerInfo"
    :roleState="roleState"
    @navigate_to="setCurrentScreen"
    @handle_select_role="setPlayerRole"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <TriggerSelection
    v-if="currentScreen.type == ScreenType.TriggerSelection.type"
    :playerInfo="playerInfo"
    @navigate_to="setCurrentScreen"
    @release_role="releaseRole"
    @handle_trigger_selection="setPlayerTriggerOption"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <Instruction
    v-if="currentScreen.type == ScreenType.Instruction.type"
    :playerInfo="playerInfo"
    :starting="starting"
    @navigate_to="setCurrentScreen"
    @release_trigger="releaseTrigger"
    @handle_ready_change="setPlayerReadyState"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
    @handle_trigger="trigger"
  />
  <Gameplay
    v-if="currentScreen.type == ScreenType.Gameplay.type"
    :playerInfo="playerInfo"
    :paused="paused"
    @show_options="showOptions"
    @handle_trigger="trigger"
  />
  <Options
    v-if="currentScreen.type == ScreenType.Options.type"
    :muted="muted"
    @navigate_to="setCurrentScreen"
    @hide_options="hideOptions"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
    @mute_sound="muteSound"
    @unmute_sound="unmuteSound"
    @restart_level="restartLevel"
  />
  <Impressum
    v-if="currentScreen.type == ScreenType.Impressum.type"
    @navigate_to="setCurrentScreen"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <LeaveConfirmation
    v-if="currentScreen.type == ScreenType.LeaveConfirmation.type"
    :lastScreen="lastScreen"
    @confirm_leave_game="leaveGame"
    @abort_leave_game="setCurrentScreen(lastScreen)"
  />
  <Disconnected v-if="currentScreen.type == ScreenType.Disconnected.type" />
</template>

<script setup>
//Classes
import TriggerOption from "./classes/TriggerOption.js";
import Role from "./classes/Role.js";
import ScreenType from "./classes/ScreenType.js";
//Components
import EnterName from "./components/Pages/EnterName.vue";
import RoleSelection from "./components/Pages/RoleSelection.vue";
import TriggerSelection from "./components/Pages/TriggerSelection.vue";
import Instruction from "./components/Pages/Instruction.vue";
import Gameplay from "./components/Pages/Gameplay.vue";
import Options from "./components/Pages/Options.vue";
import Impressum from "./components/Pages/Impressum.vue";
import LeaveConfirmation from "./components/Pages/LeaveConfirmation.vue";
import Disconnected from "./components/Pages/Disconnected.vue";
import { ref } from "@vue/reactivity";

let currentScreen = ref(ScreenType.EnterName);
let lastScreen = ref(currentScreen.value);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let url = urlParams.get("url");
let roomId = urlParams.get("id");
console.log("Retrieved socket.io URL: " + url);
console.log("Retrieved Room ID: " + roomId);

let playerInfo = {
  name: "",
  role: new Role(),
  triggerOption: new TriggerOption(),
  readyState: false,
};

let roleState = ref([]);
let starting = ref(false);
let paused = ref(false);
let muted = ref(false);

let setPlayerName = (name) => {
  playerInfo.name = name;
  socket.emit("set name", name);
  setCurrentScreen(ScreenType.RoleSelection);
};

let setPlayerRole = (role) => {
  playerInfo.role = role;
  socket.emit("role selected", playerInfo);
  setCurrentScreen(ScreenType.TriggerSelection);
};

let setPlayerTriggerOption = (triggerOption) => {
  playerInfo.triggerOption = triggerOption;
  socket.emit("trigger option selected", playerInfo);
  setCurrentScreen(ScreenType.Instruction);
};

let setPlayerReadyState = (readyState) => {
  playerInfo.readyState = readyState;
  socket.emit("update ready state", playerInfo);
};

let setCurrentScreen = (screen) => {
  lastScreen.value = currentScreen.value;
  console.log("Last screen was: " + lastScreen.value.type);
  console.log("Setting screen: " + screen.type);
  currentScreen.value = screen;
};

let showOptions = () => {
  socket.emit("options opened");
  setCurrentScreen(ScreenType.Options);
};

let hideOptions = () => {
  socket.emit("options closed");
};
let leaveGame = () => {
  setCurrentScreen(ScreenType.Disconnected);
  socket.disconnect();
};

let muteSound = () => {
  socket.emit("mute sound");
};

let unmuteSound = () => {
  socket.emit("unmute sound");
};

let restartLevel = () => {
  socket.emit("restart level");
};

let requestRoleState = () => {
  socket.emit("request role state");
};

let releaseRole = () => {
  socket.emit("release role");
};

let releaseTrigger = () => {
  socket.emit("release trigger");
  if (playerInfo.readyState == true) {
    setPlayerReadyState(false);
  }
};

let trigger = () => {
  console.log("Emitting trigger: " + playerInfo.role.role);
  socket.emit(playerInfo.role.role);
};

let socket = io(url || "192.168.1.109:5501");

socket.on("connection success", (response) => {
  console.log(response);
  socket.emit("join room", roomId || "KEDYYR3SC7bF0zStAAAB");
  requestRoleState();
});

socket.on("disconnect", () => {
  setCurrentScreen(ScreenType.Disconnected);
  console.log("Disconnected from the server");
});

socket.on("update role state", (states) => {
  states.forEach((state) => {
    roleState.value[state.role] = {
      selected: state.selected,
      playerName: state.playerName,
    };
  });
});

socket.on("start game", () => {
  starting.value = true;
  setTimeout(() => {
    setCurrentScreen(ScreenType.Gameplay);
  }, 3000);
});
socket.on("reset ready state", () => {
  starting.value = false;
});
socket.on("show paused overlay", () => {
  paused.value = true;
});

socket.on("hide paused overlay", () => {
  paused.value = false;
});
socket.on("set muted", () => {
  muted.value = true;
});
socket.on("set unmuted", () => {
  muted.value = false;
});
</script>

<style>
* {
  font-family: "VCR OSD Mono", "Arial";
  color: white;
}
h1 {
  margin: 0.3em;
}
h2 {
  margin: 0.8em;
}
img {
  -webkit-font-smoothing: none;
  image-rendering: pixelated;
}
</style>
