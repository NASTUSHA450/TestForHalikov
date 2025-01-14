<template>
  <div>
    <h4 class="text-base font-semibold mt-5 mb-3">
      Статус прохождения МО в октябре 2024 года
    </h4>
    <div class="overflow-x-scroll" id="moTable">
      <table width="100%"  class="gray-border overflow-x-scroll">
        <thead class="border-b border-gray border-solid">
          <tr class="bg-[#F7F9FC] rounded-tr-xl rounded-tl-xl">
            <th class="rounded-tl-xl">№</th>
            <th>Вид МО</th>
            <th>Подлежат МО</th>
            <th>Записано</th>
            <th>Проходят</th>
            <th>Пройдено</th>
            <th class="rounded-tr-xl">Не пришли</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(type, idx) in moTypes" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td class="flex items-center">
              <div
                :class="`h-[16px] w-[16px] bg-${type.color} rounded-full mr-2`"
              ></div>
              {{ type.name }}
            </td>
            <td>{{ type.subject }}</td>
            <td>{{ type.recorded }}</td>
            <td>{{ type.passing }}</td>
            <td>{{ type.passed }}</td>
            <td>{{ type.notDelivered }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "MO-passed-status",
  props: {
    moTypes: Array,
  },
};
</script>
