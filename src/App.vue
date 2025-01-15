<template>
  <div class="mb-[150px]">
    <Navbar />
    <router-view :class="menuWrapp ? 'sm:pl-[75px] lg:pl-[80px]':'sm:pl-[210px] lg:pl-[235px]'"></router-view>
    <SupportBubble />
  </div>
  
</template>

<script>
import { getters } from "./store/index.js";
import Navbar from "./components/Navbar.vue";
import SupportBubble from "./components/SupportBubble.vue";
export default {
  name: "App",
  components: {
    Navbar,
    SupportBubble
  },

  computed: {
    menuWrapp() {
      return getters.menuWrapp();
    },
  },
};
</script>
