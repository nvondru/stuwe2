<template>
  <PageBackground imageURL="background_default.png" />
  <HeaderBar
    :screenType="ScreenType.Options"
    @handle_btn_leave="$emit('handle_btn_leave')"
  />
  <div id="optionsContainer">
    <img
      src="impressum.svg"
      alt=""
      @click="$emit('navigate_to', ScreenType.Impressum)"
    />
    <img src="sound_unmuted.svg" alt="" />
    <img src="refresh.svg" alt="" />
    <img
      src="play.svg"
      alt=""
      @click="$emit('navigate_to', ScreenType.Gameplay)"
    />
  </div>
</template>

<script setup>
// Classes
import ScreenType from "../../classes/ScreenType.js";
// Components
import PageBackground from "../Modules/PageBackground.vue";
import HeaderBar from "../Modules/HeaderBar.vue";
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
