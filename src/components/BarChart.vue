<template>
  <div class="">
    <h4 class="text-base font-semibold mt-5 mb-3">
      Количество сотрудников, подлежащих МО в 2024 году
    </h4>
    <div class="b-gray p-5 rounded-md">
      <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
      <div class="flex flex-col sm:flex-row mt-5">
        <div v-for="(m, idx) in moTypes" :key="idx" class="flex items-center mr-5 text-sm sm:mb-0 mb-3">
          <div :class="`h-4 w-4 bg-${m.color} rounded-full mr-2`"></div>
          {{ m.name }} MO
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    months: Array,
    moTypes: Array
  },
  data() {
    return {
      chartData: {
        labels: this.months,
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#FC6528", "#E40045"],
            data: [
              { id: "сентябрь", nested: { value: 17 } },
              { id: "октябрь", nested: { value: 22 } },
            ],
            borderRadius: 4,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        parsing: {
          xAxisKey: "id",
          yAxisKey: "nested.value",
        },
        scales: {
          y: {
            ticks: {
              color: "#8F9BB3",
            },
            grid: {
              color: "#8F9BB3",
              lineWidth: 0.5,
              drawTicks: false,
            },
            border: {
              display: true,
              dash: [4, 4],
            },
          },
          x: {
            ticks: {
              maxRotation: 0,
              minRotation: 0,
              color: "#8F9BB3",
              font: {
                size: 12,
              },
            },
            grid: {
              color: "#8F9BB3",
              lineWidth: 0.5,
              drawTicks: false,
            },
            border: {
              display: true,
              dash: [4, 4],
            },
          },
        },
      },
    };
  },
};
</script>
