<template>
  <div>
    <h4 class="text-base font-semibold mt-5 mb-3">Рекомендации</h4>
    <button
      v-for="(rec, idx) in recomendations"
      :key="idx"
      class="b-gray rounded-sm p-4 flex w-full justify-between mb-3 text-start"
    >
      {{ rec }}
      <div
        class="w-6 h-6 bg-blue text-white rounded-full center-all"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 1L6 11" stroke="white" stroke-linecap="round" />
          <path d="M1 6H11" stroke="white" stroke-linecap="round" />
        </svg>
      </div>
    </button>
    <div class="bg-blue rounded-sm p-4 flex justify-between items-center mt-5">
      <p class="text-white w-1/2">
        Если у вас возникают вопросы, обращайтесь в техподдержку
      </p>
      <div class="relative before:absolute before:w-20 before:h-20 before:top-0 before:left-0 before:bg-[#5F84F8] before:rounded-full before:content-[''] before:blur-xl before:z-0">
        <img src="../assets/Support.svg" alt="support" class="relative z-50"  />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Recomendations-component",
  data: () => ({
    recomendations: [
      "Периодический медицинский осмотр",
      "Физические упражнения",
    ],
  }),
};
</script>
