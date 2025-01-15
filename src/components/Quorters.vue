<template>
    <div class="flex gap-x-3 mt-3 overflow-x-scroll hide-scroll">
        <button v-for="(quorter) in 4" :key="quorter" @click="currentQuorter = quorter">
            <div :class="`rounded-sm w-32 h-2 mb-2 ${quorter == currentQuorter ? 'bg-blue':'bg-gray '}`"></div>
            <p :class="`text-xs text-center font-medium ${quorter == currentQuorter ? 'text-darkBlue':'text-darkGray '}`">{{quorter}} квартал</p>
        </button>
    </div>
</template>
<script>
export default {
  name: "Quorters-component",
  data: () => ({
    currentQuorter : 1,
  }),
};
</script>