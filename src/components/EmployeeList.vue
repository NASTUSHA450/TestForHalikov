<template>
  <div class="">
    <h4 class="text-base font-semibold mt-5 mb-3">Список сотрудников общий</h4>
    <div class="overflow-x-scroll h-full" id="employeeTable">
      <div class="gray-border rounded-[8px]">
        <table width="100%" class=" overflow-x-scroll">
          <thead class="border-b border-gray border-solid">
            <tr class="bg-[#F7F9FC] rounded-tr-xl rounded-tl-xl">
              <th class="rounded-tl-xl text-start">№</th>
              <th class="text-start">ФИО</th>
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
