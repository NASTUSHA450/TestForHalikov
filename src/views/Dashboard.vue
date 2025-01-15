<template>
  <div id="dashboard" class="mt-4 w-full">
    <div class="flex justify-between w-full pe-5 ps-5">
      <div class="lg:flex items-center">
        <h1 class="text-lg font-semibold mr-5">Дашбоард</h1>
        <div
          class="rounded-full b-gray flex p-1 mt-4 lg:mt-0"
        >
          <button
            @click="activateStats()"
            :class="`pill ${
              statsActive ? 'bg-magenta text-white' : 'text-darkGray'
            } `"
          >
            Статистика</button
          ><button
            @click="activateRisks()"
            :class="`pill ${
              risksActive ? 'bg-magenta text-white' : 'text-darkGray'
            }`"
          >
            Риски
          </button>
        </div>
      </div>
      <div
        class="flex lg:items-center lg:flex-row flex-col-reverse lg:mb-0 mb-4"
      >
        <router-link to="/profile" class="flex items-center cursor-pointer">
          <div
            class="text-white rounded-full bg-magenta w-12 h-12 center-all text-base font-semibold lg:mr-4"
          >
            O
          </div>
          <div class="mr-9 hidden lg:block">
            <h3 class="text-base font-semibold">OOO "МОДУЛЬ"</h3>
            <span class="text-tiny text-gray">Компания</span>
          </div>
        </router-link>
        <div
          class="flex lg:mb-0 mb-5 lg:pb-0 pb-1 lg:justify-start justify-center"
        >
          <router-link to="/cart" class="relative mr-4 hidden lg:block">
            <img src="../assets/cart.svg" alt="cart" />
            <span
              class="notification"
              >{{ getCartTotal }}</span
            >
          </router-link>
          <router-link to="/notifications" class="relative lg:mr-4">
            <img src="../assets/bell.svg" alt="notifications" />
            <span
              class="notification"
              >{{ getNotifications }}</span
            >
          </router-link>
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
            <Quorters class="sm:hidden" />
            <PeriodicMo class="sm:hidden" />
            <MoPassedStatus :moTypes="moTypes" />
          </div>
          <div class="2xl:w-2/5">
            <PeriodicMo class="hidden sm:block h-auto 2xl:h-1/6" />
            <EmployeeList class="hidden sm:block h-auto 2xl:h-4/5 pb-8" />
          </div>
        </div>
        <Recomendations class="sm:hidden" />
      </div>
    </div>
    <div v-if="risksActive">
      <div class="bg-orange">risks</div>
      <div class="bg-green">риски</div>
    </div>
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
import Quorters from "../components/Quorters.vue";
export default {
  name: "Dashboard-Page",
  components: {
    ChooseMonth,
    EmployeeStatus,
    MoPassedStatus,
    PeriodicMo,
    EmployeeList,
    Recomendations,
    Quorters
  },
  data: () => ({
    statsActive: true,
    risksActive: false,
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
};
</script>
