<template>
  <div>
    <h4 class="text-base font-semibold mt-5 mb-3">
      Статус прохождения МО в октябре 2024 года
    </h4>
    <div class="overflow-x-scroll hide-scroll">
      <table width="100%" class="b-gray rounded-sm">
        <thead>
          <tr class="bg-light rounded-tr-sm rounded-tl-sm ">
            <th class="rounded-tl-sm ">№</th>
            <th>Вид МО</th>
            <th>Подлежат МО</th>
            <th>Записано</th>
            <th>Проходят</th>
            <th>Пройдено</th>
            <th class="rounded-tr-sm">Не пришли</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(type, idx) in moTypes" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td class="flex items-center">
              <div
                :class="`h-4 w-4 bg-${type.color} rounded-full mr-2`"
              ></div>
              {{ type.name }}
            </td>
            <td class="text-center">{{ type.subject }}</td>
            <td class="text-center">{{ type.recorded }}</td>
            <td class="text-center">{{ type.passing }}</td>
            <td class="text-center">{{ type.passed }}</td>
            <td class="text-center">{{ type.notDelivered }}</td>
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
