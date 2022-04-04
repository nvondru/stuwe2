<template>
  <PageBackground />
  <ColorBorder :role="playerInfo.role" />
  <HeaderBar
    :screenType="ScreenType.TriggerSelection"
    @handle_btn_back="handle_btn_back"
    @handle_btn_leave="$emit('handle_btn_leave')"
  />
  <h1>{{ playerInfo.name }}</h1>
  <h2>Choose your playstyle</h2>
  <div id="triggerSelectionGrid">
    <TriggerSelectionCard
      :triggerOption="TriggerOption.Shake"
      @click="$emit('handle_trigger_selection', TriggerOption.Shake)"
    />
    <TriggerSelectionCard
      :triggerOption="TriggerOption.Touch"
      @click="$emit('handle_trigger_selection', TriggerOption.Touch)"
    />
    <TriggerSelectionCard
      :triggerOption="TriggerOption.Voice"
      @click="$emit('handle_trigger_selection', TriggerOption.Voice)"
    />
  </div>
</template>

<script setup>
//Classes
import Role from "../../classes/Role.js";
import TriggerOption from "../../classes/TriggerOption.js";
import ScreenType from "../../classes/ScreenType.js";

//Components
import PageBackground from "../Modules/PageBackground.vue";
import HeaderBar from "../Modules/HeaderBar.vue";
import ColorBorder from "../Modules/ColorBorder.vue";
import TriggerSelectionCard from "../Modules/TriggerSelectionCard.vue";

let props = defineProps({
  playerInfo: Object,
});

let emit = defineEmits(["navigate_to", "release_role"]);

let handle_btn_back = () => {
  emit("release_role");
  emit("navigate_to", ScreenType.RoleSelection);
};
</script>

<style scoped>
h1,
h2 {
  text-align: center;
}

#triggerSelectionGrid {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 30px;
  justify-content: center;
}
</style>
