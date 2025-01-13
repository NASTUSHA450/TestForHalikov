<template>
  <div id="dashboard" class="mt-4 w-full me-10 ms-5">
    <div class="flex justify-between">
      <div class="flex items-center">
        <h1 class="text-2xl font-semibold mr-5">Дашбоард</h1>
        <div class="rounded-[87px] border border-solid border-gray flex p-1">
          <button
            @click="activateStats()"
            :class="`pill ${statsActive ? 'active' : ''} rounded-[87px]`"
          >
            Статистика</button
          ><button
            @click="activateRisks()"
            :class="`pill ${risksActive ? 'active' : ''} rounded-[87px]`"
          >
            Риски
          </button>
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex items-center">
          <div
            class="company-icon rounded-[100px] bg-magenta w-[44px] h-[44px] flex justify-center items-center text-base font-semibold mr-4"
          >
            O
          </div>
          <div class="mr-9">
            <h3 class="text-base font-semibold">OOO "МОДУЛЬ"</h3>
            <span class="text-[14px] text-gray">Компания</span>
          </div>
        </div>
        <div class="flex">
          <img class="mr-4" src="../assets/cart.svg" alt="cart" />
          <img src="../assets/bell.svg" alt="bell" />
        </div>
      </div>
    </div>

    <div v-if="statsActive" class="">статистика</div>
    <div v-if="risksActive" class="">риски</div>
  </div>
</template>
<script>
export default {
  name: "Dashboard-Page",

  data: () => ({ statsActive: true, risksActive: false }),
  methods: {
    activateStats() {
      this.statsActive = true;
      this.risksActive = false;
    },
    activateRisks() {
      this.statsActive = false;
      this.risksActive = true;
    },
  },
};
</script>
