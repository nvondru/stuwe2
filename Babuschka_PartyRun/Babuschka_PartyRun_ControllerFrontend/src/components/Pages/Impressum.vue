<template>
  <PageBackground />
  <HeaderBar
    :screenType="ScreenType.Impressum"
    @handle_btn_back="$emit('navigate_to', ScreenType.Options)"
    @handle_btn_leave="$emit('handle_btn_leave')"
  />
  <div id="impressumContainer">
    <h1>Created by:</h1>
    <div>
      <h3>Vanessa Buchmann</h3>
      <h3>Nicole Bänninger</h3>
      <h3>Michael Brechbühl</h3>
      <h3>Nathalie Schwartz</h3>
      <h3>Nicolas Vondru</h3>
    </div>
    <div class="imgWrapper">
      <img src="../../assets/rick_astley.png" alt="" />
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
  text-align: center;
  padding: 90px 0 60px 0;
  box-sizing: border-box;
}
.imgWrapper {
  height: 100%;
}
img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
