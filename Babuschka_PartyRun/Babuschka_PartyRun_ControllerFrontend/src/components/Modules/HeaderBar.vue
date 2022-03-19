<template>
  <header id="header">
    <div class="iconContainerLeft"><img src="quit.png" alt="" /></div>
    <div class="iconContainerMid"><img src="quit.png" alt="" /></div>
    <div class="iconContainerRight"><img src="quit.png" alt="" /></div>
  </header>
</template>

<script setup></script>

<style>
#header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
#header > :nth-child(0) {
  text-align: left;
  background-color: red;
}
#header:nth-child(2) {
  text-align: center;
}
.iconContainerRight {
  text-align: right;
}
</style>
