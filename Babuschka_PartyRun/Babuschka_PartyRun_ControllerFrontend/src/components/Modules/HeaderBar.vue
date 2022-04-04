<template>
  <header id="header">
    <!-- LEFT SIDE -->
    <div class="iconContainerLeft">
      <img
        v-if="
          props.screenType == ScreenType.RoleSelection ||
          props.screenType == ScreenType.TriggerSelection ||
          props.screenType == ScreenType.Instruction ||
          props.screenType == ScreenType.Impressum
        "
        @click="$emit('handle_btn_back')"
        src="../../assets/arrow_left.svg"
        alt=""
      />
    </div>

    <!-- RIGHT SIDE -->
    <div class="iconContainerRight">
      <img
        v-if="props.screenType != ScreenType.Gameplay"
        src="../../assets/quit.svg"
        alt=""
        @click="$emit('handle_btn_leave')"
      />

      <img
        @click="$emit('handle_btn_options')"
        v-else
        src="../../assets/options.svg"
        alt=""
      />
    </div>
  </header>
</template>

<script setup>
import ScreenType from "../../classes/ScreenType.js";
let props = defineProps({
  screenType: Object,
});
</script>

<style>
#header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
}

.iconContainerLeft {
  text-align: left;
}

.iconContainerRight {
  text-align: right;
  -webkit-font-smoothing: none;
}
img {
  height: 40px;
}
</style>
