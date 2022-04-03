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
    @show_options="showOptions"
    @handle_trigger="trigger"
  />
  <Options
    v-if="currentScreen.type == ScreenType.Options.type"
    @navigate_to="setCurrentScreen"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <Impressum
    v-if="currentScreen.type == ScreenType.Impressum.type"
    @navigate_to="setCurrentScreen"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <LeaveConfirmation
    v-if="currentScreen.type == ScreenType.LeaveConfirmation.type"
    @confirm_leave_game="leaveGame"
    @abort_leave_game="setCurrentScreen(lastScreen)"
  />
  <Disconnected v-if="currentScreen.type == ScreenType.Disconnected.type" />
  <!-- <h1 style="color: black">Hello Wolrd</h1> -->
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
  setCurrentScreen(ScreenType.Options);
};

let leaveGame = () => {
  setCurrentScreen(ScreenType.Disconnected);
  socket.disconnect();
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

let socket = io(
  url || "https://2a5a-2a02-1210-88f4-c400-91a5-22d0-6b51-b1b7.ngrok.io/"
);

socket.on("connection success", (response) => {
  console.log(response);
  socket.emit("join room", roomId || "nSTjRDJTC-_QkiJeAAAB");
  requestRoleState();
});

socket.on("disconnect", () => {
  setCurrentScreen(ScreenType.Disconnected);
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
</script>

<style>
* {
  font-family: "VCR OSD Mono", "Arial";
  color: white;
}
h1,
h2 {
  padding: 0;
  margin: 0;
}
</style>
