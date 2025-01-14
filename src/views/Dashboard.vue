<template>
  <div id="dashboard" class="mt-4 w-full">
    <div class="flex justify-between w-full sm:pe-10 pe-5 ps-5">
      <div class="sm:flex items-center">
        <h1 class="text-2xl font-semibold mr-5">Дашбоард</h1>
        <div
          class="rounded-[87px] border border-solid border-gray flex p-1 mt-4 sm:mt-0"
        >
          <button
            @click="activateStats()"
            :class="`pill ${
              statsActive ? 'bg-magenta text-white' : 'text-darkGray'
            } rounded-[87px]`"
          >
            Статистика</button
          ><button
            @click="activateRisks()"
            :class="`pill ${
              risksActive ? 'bg-magenta text-white' : 'text-darkGray'
            } rounded-[87px]`"
          >
            Риски
          </button>
        </div>
      </div>
      <div
        class="flex sm:items-center sm:flex-row flex-col-reverse sm:mb-0 mb-[16px]"
      >
        <div class="flex items-center">
          <div
            class="company-icon rounded-full bg-magenta w-[44px] h-[44px] flex justify-center items-center text-base font-semibold sm:mr-4"
          >
            O
          </div>
          <div class="mr-9 hidden sm:block">
            <h3 class="text-base font-semibold">OOO "МОДУЛЬ"</h3>
            <span class="text-[14px] text-gray">Компания</span>
          </div>
        </div>
        <div
          class="flex sm:mb-0 mb-5 sm:pb-0 pb-1 sm:justify-start justify-center"
        >
          <div
            :class="`hidden sm:block relative mr-4 ${
              cartCount > 0
                ? `before:content-['${cartCount}'] before:absolute before:-top-1 before:-right-2 before:bg-black before:h-[16px] before:w-[16px] before:text-white before:bg-blue before:flex before:justify-center before:item-center before:text-[11px] before:rounded-full`
                : ``
            }`"
          >
            <img src="../assets/cart.svg" alt="cart" />
          </div>

          <div
            :class="`relative sm:mr-4 ${
              notificationsCount > 0
                ? `before:content-['${notificationsCount}'] before:absolute before:-top-1 before:-right-2 before:bg-black before:h-[16px] before:w-[16px] before:text-white before:bg-blue before:flex before:justify-center before:item-center before:text-[11px] before:rounded-full`
                : ``
            }`"
          >
            <img src="../assets/bell.svg" alt="notifications" />
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4 sm:hidden" />
    <div v-if="statsActive" class="pt-4 mt-4 sm:pe-10 pe-5 ps-5">
      <div
        @click="selectOpen = !selectOpen"
        class="relative text-[14px] border border-solid border-gray w-2/5 p-4 rounded-[8px] bg-[#F7F9FC] justify-between cursor-pointer hidden sm:flex w-[170px]"
      >
        <p class="capitalize">{{ selectedMonth }}</p>
        <div
          class="w-[24px] h-[24px] bg-blue rounded-full flex justify-center items-center"
        >
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              :d="
                !selectOpen
                  ? `M0.137356 1.06852L3.67065 5.81667C3.85254 6.06111 4.14745 6.06111 4.32935 5.81667L7.86264 1.06852C8.15608 0.67421 7.94825 0 7.53324 0H0.466716C0.0517459 0 -0.156065 0.674212 0.137356 1.06852Z`
                  : 'M0.137356 4.93148L3.67065 0.183328C3.85254 -0.0611091 4.14745 -0.0611091 4.32935 0.183328L7.86264 4.93148C8.15608 5.32579 7.94825 6 7.53324 6H0.466716C0.0517459 6 -0.156065 5.32579 0.137356 4.93148Z'
              "
              fill="white"
            />
          </svg>
        </div>
        <div
          v-if="selectOpen"
          class="absolute top-16 left-0 w-full bg-white border border-solid border-gray rounded-[8px] h-[150px] overflow-y-scroll flex flex-col"
        >
          <a
            @click="selectedMonth = month"
            v-for="(month, idx) in months"
            :key="idx"
            class="capitalize py-3 px-4"
            >{{ month }}</a
          >
        </div>
      </div>
      <div
        id="monthSelectMob"
        class="sm:hidden sm:pe-10 ps-5 pe-5 w-screen overflow-x-scroll overflow-y-visible"
      >
        <div
          class="border-solid border border-gray rounded-full p-1 w-max flex"
        >
          <a
            v-for="(month, idx) in months"
            :key="idx"
            @click="selectedMonth = month"
            :class="`${
              month === selectedMonth ? 'bg-blue text-white' : ''
            } pill capitalize rounded-full text-darkGray`"
          >
            {{ month }}
          </a>
        </div>
      </div>
      <div class="sm:w-3/5 mt-5 pt-5">
        <div class="border-gray flex p-4 rounded-[16px]">
          <div v-for="(el, idx) in stats" :key="idx" class="w-1/3 flex flex-col justify-between items-end mr-2">
            <p class="font-semibold text-[22px]">{{ el.count }}</p>
            <span class="font-medium text-darkGray text-[11px] text-end mb-2">{{ el.name }}</span>
            <div :class="`w-full bg-${el.color} h-[12px] rounded-full `"></div>
          </div>
        </div>
        
      </div>
    </div>
    <div v-if="risksActive" class="">риски</div>
  </div>
</template>
<script>
export default {
  name: "Dashboard-Page",
  data: () => ({
    statsActive: true,
    risksActive: false,
    cartCount: 1,
    notificationsCount: 1,
    selectOpen: false,
    selectedMonth: "январь",
    months: [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "ноябрь",
      "декабрь",
    ],
    stats: [
      { name: "СОТРУДНИКОВ БЕЗ МО", count: "809", color: "magenta" },
      { name: "CОТРУДНИКОВ С ЛИЧНЫМ КАБИНЕТОМ", count: "24", color: "green" },
      { name: "ВСЕГО СОТРУДНИКОВ В СИСТЕМЕ", count: "811", color: "orange" },
    ],
  }),
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
