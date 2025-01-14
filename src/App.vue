<template>
  <div class="flex">
    <Navbar />
    <router-view :class="menuWrapp ? 'sm:ml-[80px]':'sm:ml-[235px]'"></router-view>
  </div>
</template>

<script>
import { getters } from "./store/index.js";
import Navbar from "./components/Navbar.vue";

export default {
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
