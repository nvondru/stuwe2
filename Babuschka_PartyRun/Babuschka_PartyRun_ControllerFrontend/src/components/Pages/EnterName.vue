<template>
  <PageBackground :currentScreen="ScreenType.EnterName" />
  <HeaderBar
    :screenType="ScreenType.EnterName"
    @handle_btn_leave="$emit('handle_btn_leave')"
  />
  <div class="flexContainer">
    <h1 id="title">Babushka Run</h1>
    <div id="nameBar">
      <input
        v-model="name"
        id="inputName"
        type="text"
        placeholder="Enter Name"
      />
      <img
        id="btnStart"
        src="../../assets/play.svg"
        @click="$emit('handle_set_name', name)"
      />
    </div>
  </div>
</template>

<script setup>
import ScreenType from "../../classes/ScreenType.js";
import PageBackground from "../Modules/PageBackground.vue";
import HeaderBar from "../Modules/HeaderBar.vue";
import { ref } from "@vue/reactivity";

let name = ref("");
</script>

<style scoped>
#title {
  font-size: 2.5rem;
  text-align: center;
}
#nameBar {
  position: relative;
  width: 90%;
}
#inputName {
  color: rgb(37, 37, 37);
  width: 100%;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-appearance: none;
  border: 6px solid white;
  border-radius: 1rem;
}

#btnStart {
  position: absolute;
  right: 0px;
  top: 50%;
  width: 60px;
  height: 60px;
  transform: translate(50%, -50%);
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: black;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: black;
}
.flexContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
