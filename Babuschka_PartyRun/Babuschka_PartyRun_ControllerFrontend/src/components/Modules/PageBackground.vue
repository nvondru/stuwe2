<template>
  <img id="backgroundImage" :src="imageURL" alt="" />
</template>

<script setup>
let props = defineProps({
  imageURL: String,
});
</script>

<style>
#backgroundImage {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -100;
}
</style>
