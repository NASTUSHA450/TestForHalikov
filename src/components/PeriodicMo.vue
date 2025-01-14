<template>
  <div id="periodicMo">
    <h4 class="text-base font-semibold mt-5 mb-3">Периодический МО</h4>
    <div class="disable-scroll flex gap-x-4 overflow-x-scroll">
      <div
        v-for="(stat, idx) in periodicMoStats"
        :key="idx"
        class="gray-border rounded-[16px] p-3 first:border-magenta first:border-2 mo-pill min-w-[220px] sm:w-auto"
      >
        <p class="text-[22px] font-semibold">{{ stat.count }}</p>
        <span class="uppercase text-[11px] text-darkGray">сотрудников</span>
        <p class="text-[12px]">{{ stat.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MO-passed-status",
  data: () => ({
    periodicMoStats: [
      {
        name: "не записано на периодический МО в октябре 2024 года",
        count: "0",
      },
      { name: "записано на периодический мо в октябре 2024 года", count: "38" },
      { name: "подлежат периодическому МО в октябре 2024 года", count: "38" },
    ],
  }),
};
</script>
