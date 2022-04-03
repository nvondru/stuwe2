<template>
  <PageBackground imageURL="../../assets/background_default.png" />

  <div id="leaveConfirmationContainer">
    <div id="innerContainer">
      <h1>Do you really want to LEAVE?</h1>
      <h3>The current game will terminate</h3>
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
  padding: 90px 0 60px 0;
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
