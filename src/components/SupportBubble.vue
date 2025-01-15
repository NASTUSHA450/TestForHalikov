<template>
  <button
    class="sm:h-20 w-48 sm:w-20 rounded-sm sm:rounded-full bg-magenta fixed bottom-16 sm:bottom-12 right-8 sm:right-16 center-all px-4 py-2 shadow-bar sm:shadow-bubble"
  >
    <img  src="../assets/chat.svg" alt="chat-bubble" class="hidden sm:block" />
    <img src="../assets/headset.svg" alt="chat-bubble" class="sm:hidden mr-2" />
    <p class="sm:hidden text-tiny text-white font-medium">Техподдержка</p>
  </button>
</template>
<script>
export default {
  name: "Support-bubble",
};
</script>
