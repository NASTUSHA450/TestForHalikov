<template>
  <div>
    <h4 class="text-base font-semibold mt-5 mb-3">Список сотрудников общий</h4>
    <div class="overflow-x-scroll h-full" id="employeeTable">
      <div class="b-gray rounded-sm h-full flex flex-col justify-between">
        <table width="100%" class=" overflow-x-scroll">
          <thead>
            <tr class="bg-light rounded-tr-sm rounded-tl-sm">
              <th class="rounded-tl-sm">№</th>
              <th >ФИО</th>
              <th>Статус</th>
              <th>Дата записи</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(employee, idx) in employees"
              :key="idx"
              class="h-[50px]"
            >
              <td>{{ idx + 1 }}</td>
              <td>
                <p>{{ employee.name }}</p>
                <span class="text-darkGray">{{ employee.position }}</span>
              </td>
              <td class="text-center">{{ employee.status }}</td>
              <td class="text-center">
                <p>{{ employee.recordDate }}</p>
                <span class="text-darkGray">{{ employee.recordTime }}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex gap-x-2 p-4 mt-10">
          <button class="w-1/2 rounded-sm py-2 text-center b-gray text-magenta">Скачать список</button>
          <button class="w-1/2 rounded-sm py-2 text-center bg-magenta text-white">Записать на МО</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Employee-list",
  data: () => ({
    employees: [
      {
        name: "Anhfbbdf UfbdbfB SUFhhfuhfh",
        position: "Инженер",
        status: "Записан",
        recordDate: "22.10.2024",
        recordTime: "09:00 - 10:00",
      },
      {
        name: "Anhfbbdf UfbdbfB SUFhhfuhfh",
        position: "Инженер",
        status: "Записан",
        recordDate: "22.10.2024",
        recordTime: "09:00 - 10:00",
      },
    ],
  }),
};
</script>
