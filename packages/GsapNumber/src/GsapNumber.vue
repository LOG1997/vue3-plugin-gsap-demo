<script setup lang="ts" name="GsapNumber">
import {
  ref,
  getCurrentInstance,
  ComponentInternalInstance,
  onMounted,
} from "vue";

import { gsap } from "gsap";
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const props = defineProps({
  endNumber: {
    type: Number,
    default: 0,
  },
  startNumber: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 3,
  },
  colorTheme: {
    type: Object,
    default: {},
  },
});
let showNumber = ref(props.startNumber);
onMounted(() => {
  gsap.to(proxy, {
    duration: props.duration,
    showNumber: props.endNumber,
  });
  console.log("gggasasp");
});
</script>
<template>
  <span class="gsapNumber">{{ showNumber.toFixed(0) }}</span>
</template>

<style scoped></style>
