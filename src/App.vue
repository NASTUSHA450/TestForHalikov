<template>
  <div class="mb-[1000px]">
    <Navbar />
    <router-view :class="menuWrapp ? 'sm:pl-[75px] lg:pl-[80px]':'sm:pl-[210px] lg:pl-[235px]'"></router-view>
  </div>
  
</template>

<script>
import { getters } from "./store/index.js";
import Navbar from "./components/Navbar.vue";

export default {
  // make first breakpoint 1500px screen width
  name: "App",
  components: {
    Navbar,
  },

  computed: {
    menuWrapp() {
      return getters.menuWrapp();
    },
  },
};
</script>
