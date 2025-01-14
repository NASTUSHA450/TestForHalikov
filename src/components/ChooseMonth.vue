<template>
  <div
    @click="selectOpen = !selectOpen"
    class="relative text-[14px] border border-solid border-gray w-2/5 p-4 rounded-[8px] bg-[#F7F9FC] justify-between cursor-pointer hidden sm:flex w-[170px]"
  >
    <p class="capitalize">{{ getChosenMonth }}</p>
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
        @click="updateMonth(month)"
        v-for="(month, idx) in months"
        :key="idx"
        class="capitalize py-3 px-4"
        >{{ month }}</a
      >
    </div>
  </div>
  <div
    id="monthSelectMob"
    class="sm:hidden sm:pe-10 pe-14 w-screen overflow-x-scroll overflow-y-visible"
  >
    <div class="border-solid border border-gray rounded-full p-1 w-max flex">
      <a
        v-for="(month, idx) in months"
        :key="idx"
        @click="updateMonth(month)"
        :class="`${
          month === getChosenMonth ? 'bg-blue text-white' : ''
        } pill capitalize rounded-full text-darkGray`"
      >
        {{ month }}
      </a>
    </div>
  </div>
</template>
<script>
import { getters, mutations } from "../store/index.js";
export default {
  name: "Choose-month",
  props: {
    months: Array,
  },
  data: () => ({
    selectOpen: false,
  }),
  computed: {
    getChosenMonth() {
      return getters.getChosenMonth();
    },
  },
  methods: {
    updateMonth(month) {
      mutations.updateChosenMonth(month);
    },
  },
};
</script>
