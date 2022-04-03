<template>
  <EnterName
    v-if="this.currentScreen.type == ScreenType.EnterName.type"
    @handle_set_name="setPlayerName"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <RoleSelection
    v-if="this.currentScreen.type == ScreenType.RoleSelection.type"
    :playerInfo="this.playerInfo"
    :roleState="this.roleState"
    @navigate_to="setCurrentScreen"
    @handle_select_role="setPlayerRole"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <TriggerSelection
    v-if="this.currentScreen.type == ScreenType.TriggerSelection.type"
    :playerInfo="this.playerInfo"
    @navigate_to="setCurrentScreen"
    @release_role="releaseRole"
    @handle_trigger_selection="setPlayerTriggerOption"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <Instruction
    v-if="this.currentScreen.type == ScreenType.Instruction.type"
    :playerInfo="this.playerInfo"
    @navigate_to="setCurrentScreen"
    @handle_ready_change="setPlayerReadyState"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <Gameplay
    v-if="this.currentScreen.type == ScreenType.Gameplay.type"
    :role="Role.Enemy"
    :triggerOption="TriggerOption.Voice"
    @show_options="showOptions"
  />
  <Options
    v-if="this.currentScreen.type == ScreenType.Options.type"
    @navigate_to="setCurrentScreen"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <Impressum
    v-if="this.currentScreen.type == ScreenType.Impressum.type"
    @navigate_to="setCurrentScreen"
    @handle_btn_leave="setCurrentScreen(ScreenType.LeaveConfirmation)"
  />
  <LeaveConfirmation
    v-if="this.currentScreen.type == ScreenType.LeaveConfirmation.type"
    @confirm_leave_game="leaveGame"
    @abort_leave_game="setCurrentScreen(lastScreen)"
  />
  <Disconnected
    v-if="this.currentScreen.type == ScreenType.Disconnected.type"
  />
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

let playerInfo = {
  name: "",
  role: new Role(),
  triggerOption: new TriggerOption(),
  readyState: false,
};

let roleState = ref([]);

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
  setCurrentScreen(ScreenType.Instruction);
};

let setPlayerReadyState = (readyState) => {
  playerInfo.readyState = readyState;
  console.log(playerInfo.readyState);
};

let setCurrentScreen = (screen) => {
  lastScreen.value = currentScreen.value;
  console.log("Last screen was: " + lastScreen.value.type);
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
let socket = io("localhost:5501");

socket.on("connection success", (response) => {
  console.log(response);
  socket.emit("join room", "jFgmtV2vKr4aNlXxAAAB");
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
