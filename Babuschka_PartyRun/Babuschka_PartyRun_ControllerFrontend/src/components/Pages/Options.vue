<template>
  <PageBackground />
  <HeaderBar
    :screenType="ScreenType.Options"
    @handle_btn_leave="$emit('handle_btn_leave')"
  />
  <div id="optionsContainer">
    <img
      src="../../assets/impressum.svg"
      alt=""
      @click="$emit('navigate_to', ScreenType.Impressum)"
    />
    <img
      v-if="!props.muted"
      src="../../assets/sound_unmuted.svg"
      alt=""
      @click="$emit('mute_sound')"
    />
    <img
      v-else
      src="../../assets/sound_muted.svg"
      alt=""
      @click="$emit('unmute_sound')"
    />
    <img src="../../assets/refresh.svg" alt="" @click="handleBtnRestart" />
    <img src="../../assets/play.svg" alt="" @click="handleBtnResume" />
  </div>
</template>

<script setup>
// Classes
import ScreenType from "../../classes/ScreenType.js";
// Components
import PageBackground from "../Modules/PageBackground.vue";
import HeaderBar from "../Modules/HeaderBar.vue";
let props = defineProps({
  muted: Object,
});

let emit = defineEmits(["navigate_to", "hide_options", "restart_level"]);

let handleBtnResume = () => {
  emit("navigate_to", ScreenType.Gameplay);
  emit("hide_options");
};

let handleBtnRestart = () => {
  emit("navigate_to", ScreenType.Gameplay);
  emit("restart_level");
};
</script>

<style scoped>
#optionsContainer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 90px 0 60px 0;
}

img {
  height: auto;
  width: 25%;
}
</style>
