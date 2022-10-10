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
});
</script>
<template>
  <span class="gsapNumber">{{ showNumber.toFixed(0) }}</span>
</template>

<style scoped>
.gsapNumber {
  animation-name: anim1;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-duration: 1s;
  background-color: #d065f5;
  /* background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%); */
  -webkit-background-clip: text;
  color: transparent;
}

@keyframes anim1 {
  0% {
    background-color: #1f99f6;
  }
  25% {
    background-color: #45e761;
  }
  50% {
    background-color: #cff622;
  }
  75% {
    background-color: #f6a755;
  }
  100% {
    background-color: #d065f5;
  }
}
</style>
