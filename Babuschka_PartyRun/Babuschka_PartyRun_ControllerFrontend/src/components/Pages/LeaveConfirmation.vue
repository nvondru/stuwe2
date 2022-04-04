<template>
  <PageBackground />

  <div id="leaveConfirmationContainer">
    <div id="innerContainer">
      <div v-if="props.lastScreen.type == ScreenType.Options.type">
        <h1>Exit to role selection?</h1>
        <h3>The game will terminate for all players</h3>
      </div>
      <h1 v-else>Do you really want to LEAVE?</h1>

      <div class="icons">
        <div @click="$emit('confirm_leave_game')">
          <img src="../../assets/tick.svg" alt="" />
          <h3>Yes</h3>
        </div>
        <div @click="$emit('abort_leave_game')">
          <img src="../../assets/quit_x.svg" alt="" />
          <h3>No</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Classes
import ScreenType from "../../classes/ScreenType";

// Components
import HeaderBar from "../Modules/HeaderBar.vue";
import PageBackground from "../Modules/PageBackground.vue";

let props = defineProps({
  lastScreen: Object,
});
</script>

<style scoped>
#leaveConfirmationContainer {
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
  padding: 15px;
  text-align: center;
}

#innerContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.icons {
  display: flex;
  justify-content: space-evenly;
}

h2 {
  padding: 1rem 0;
}
</style>
