<template>
  <PageBackground imageURL="../../assets/background_default.png" />
  <HeaderBar
    :screenType="ScreenType.Impressum"
    @handle_btn_back="$emit('navigate_to', ScreenType.Options)"
    @handle_btn_leave="$emit('handle_btn_leave')"
  />
  <div id="impressumContainer">
    <h1>Impressum</h1>
    <h2>Created by:</h2>
    <div>
      <h2>Vanessa Buchmann</h2>
      <h2>Nicole Bänninger</h2>
      <h2>Michael Brechbühl</h2>
      <h2>Nathalie Schwartz</h2>
      <h2>Nicolas Vondru</h2>
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
#impressumContainer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 90px 0 60px 0;
}

h2 {
  padding: 1rem 0;
}
</style>
