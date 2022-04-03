<template>
  <PageBackground />

  <div id="container">
    <div id="innerContainer">
      <h1>You left the game.</h1>
      <h2>To play again, scan a game QR-code.</h2>
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
#container {
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

h2 {
  padding: 1rem 0;
}
</style>
