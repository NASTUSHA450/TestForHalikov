<template>
  <div class="">
    <h4 class="text-base font-semibold mt-5 mb-3">Рекомендации</h4>
    <button
      v-for="(rec, idx) in recomendations"
      :key="idx"
      class="gray-border rounded-[8px] p-4 flex w-full justify-between mb-3"
    >
      {{ rec }}
      <div
        class="w-[24px] h-[24px] bg-blue text-white rounded-full flex items-center justify-center"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <path d="M6 1L6 11" stroke="white" stroke-linecap="round" />
          <path d="M1 6H11" stroke="white" stroke-linecap="round" />
        </svg>
      </div>
    </button>
    <div class="bg-blue rounded-[8px] p-4 flex justify-between mt-5">
      <p class="text-white w-1/2">
        Если у вас возникают вопросы, обращайтесь в техподдержку
      </p>
      <div class="relative">
        <div class="blur w-[80px] h-[80px] bg-[#5F84F8] rounded-full"></div>
        <img src="../assets/Support.svg" alt="" class="absolute top-0 left-0" />
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
