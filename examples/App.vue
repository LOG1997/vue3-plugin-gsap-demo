<script setup lang="ts">
// import { GsapNumber } from "../packages";
import { GsapNumber } from "../lib/vue3-plugin-gsap-demo.es.ts";
</script>

<template>
  <GsapNumber :end-number="1000" class="gsapNUmber"></GsapNumber>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.gsapNUmber {
  font-size: 40px;
  color: blueviolet;
}
</style>
