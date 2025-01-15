<template>
  <div id="periodicMo">
    <h4 class="text-base font-semibold mt-5 mb-3">Периодический МО</h4>
    <div class="hide-scroll flex gap-x-4 overflow-x-scroll">
      <div
        v-for="(stat, idx) in periodicMoStats"
        :key="idx"
        class="b-gray rounded-md p-3 sm:first:border-magenta first:border-2 mo-pill min-w-[220px] sm:w-auto"
      >
        <p class="text-lg font-semibold">{{ stat.count }}</p>
        <span class="uppercase text-xs text-darkGray">сотрудников</span>
        <p class="text-sm">{{ stat.name }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (min-width: 640px) {
  .mo-pill:first-of-type {
    background: linear-gradient(
      0deg,
      rgba(228, 0, 69, 0.10968137254901966) 0%,
      rgba(228, 0, 69, 0) 57%
    );
  }
}
</style>
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
