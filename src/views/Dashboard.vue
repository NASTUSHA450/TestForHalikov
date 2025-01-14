<template>
  <div id="dashboard" class="mt-4 w-full">
    <div class="flex justify-between w-full pe-5 ps-5">
      <div class="lg:flex items-center">
        <h1 class="text-2xl font-semibold mr-5">Дашбоард</h1>
        <div
          class="rounded-[87px] border border-solid border-gray flex p-1 mt-4 lg:mt-0"
        >
          <button
            @click="activateStats()"
            :class="`pill ${
              statsActive ? 'bg-magenta text-white' : 'text-darkGray'
            } rounded-full`"
          >
            Статистика</button
          ><button
            @click="activateRisks()"
            :class="`pill ${
              risksActive ? 'bg-magenta text-white' : 'text-darkGray'
            } rounded-full`"
          >
            Риски
          </button>
        </div>
      </div>
      <div
        class="flex lg:items-center lg:flex-row flex-col-reverse lg:mb-0 mb-[16px]"
      >
        <div class="flex items-center">
          <div
            class="company-icon rounded-full bg-magenta w-[44px] h-[44px] flex justify-center items-center text-base font-semibold lg:mr-4"
          >
            O
          </div>
          <div class="mr-9 hidden lg:block">
            <h3 class="text-base font-semibold">OOO "МОДУЛЬ"</h3>
            <span class="text-[14px] text-gray">Компания</span>
          </div>
        </div>
        <div
          class="flex lg:mb-0 mb-5 lg:pb-0 pb-1 lg:justify-start justify-center"
        >
          <div class="relative mr-4 hidden lg:block">
            <img src="../assets/cart.svg" alt="cart" />
            <span
              class="absolute -top-1 -right-2 w-[16px] h-[16px] bg-blue rounded-full text-[11px] flex justify-center items-center text-white"
              >{{ getCartTotal }}</span
            >
          </div>
          <div class="relative lg:mr-4">
            <img src="../assets/bell.svg" alt="notifications" />
            <span
              class="absolute -top-1 -right-2 w-[16px] h-[16px] bg-blue rounded-full text-[11px] flex justify-center items-center text-white"
              >{{ getNotifications }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4 sm:hidden" />
    <div v-if="statsActive">
      <div class="sm:pt-4 mt-4 pe-5 ps-5">
        <ChooseMonth :months="months" />
      </div>
      <div class="pe-5 ps-5">
        <div class="2xl:flex">
          <div class="2xl:w-3/5 lg:mr-5">
            <EmployeeStatus :months="months" :moTypes="moTypes" />
            <PeriodicMo class="sm:hidden" />
            <MoPassedStatus :moTypes="moTypes" />
          </div>
          <div class="2xl:w-2/5">
            <PeriodicMo class="hidden sm:block" />
            <EmployeeList class="hidden sm:block" />
          </div>
        </div>
        <Recomendations class="sm:hidden" />
      </div>
    </div>
    <div v-if="risksActive" class="bg-orange bg-green">риски</div>
  </div>
</template>
<script>
import { getters } from "../store/index.js";
import ChooseMonth from "../components/ChooseMonth.vue";
import EmployeeStatus from "../components/EmployeeStatus.vue";
import MoPassedStatus from "../components/MoPassedStatus.vue";
import PeriodicMo from "../components/PeriodicMo.vue";
import EmployeeList from "../components/EmployeeList.vue";
import Recomendations from "../components/Recomendations.vue";
export default {
  name: "Dashboard-Page",
  components: {
    ChooseMonth,
    EmployeeStatus,
    MoPassedStatus,
    PeriodicMo,
    EmployeeList,
    Recomendations,
  },
  data: () => ({
    statsActive: true,
    risksActive: false,
    cartCount: 1,
    notificationsCount: 1,
    windowWidth: window.innerWidth,
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
    moTypes: [
      {
        name: "Периодический",
        color: "orange",
        subject: 0,
        recorded: 2,
        passing: 0,
        passed: 0,
        notDelivered: 4,
      },
      {
        name: "Предварительный",
        color: "magenta",
        subject: 0,
        recorded: 2,
        passing: 0,
        passed: 0,
        notDelivered: 4,
      },
    ],
  }),
  computed: {
    getCartTotal() {
      return getters.getCartTotal();
    },
    getNotifications() {
      return getters.getNotifications();
    },
  },
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
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>
