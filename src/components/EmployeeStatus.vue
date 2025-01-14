<template>
    <h4 class="text-base font-semibold mt-5 mb-3">Статус сотрудников</h4>
    <div class="gray-border flex flex-col sm:flex-row p-4 rounded-[16px]">
      <div
        v-for="(el, idx) in stats"
        :key="idx"
        class="sm:w-1/3 w-full flex flex-col justify-between sm:items-end sm:mr-2 last:mr-0 sm:mb-0 mb-3"
      >
        <p class="font-semibold text-[22px]">{{ el.count }}</p>
        <span class="font-medium text-darkGray text-[11px] sm:text-end mb-2">{{
          el.name
        }}</span>
        <div :class="`w-full bg-${el.color} h-[12px] rounded-full `"></div>
      </div>
    </div>
    <BarChart :months="months" :moTypes="moTypes" />
</template>
<script>
import BarChart from "./BarChart.vue";
export default {
  name: "Employee-status",
  components: {
    BarChart,
  },
  props: {
    months: Array,
    moTypes: Array
  },
  data: () => ({
    stats: [
      { name: "СОТРУДНИКОВ БЕЗ МО", count: "809", color: "magenta" },
      { name: "CОТРУДНИКОВ С ЛИЧНЫМ КАБИНЕТОМ", count: "24", color: "green" },
      { name: "ВСЕГО СОТРУДНИКОВ В СИСТЕМЕ", count: "811", color: "orange" },
    ],
  }),
};
</script>
