<script setup>
import { ref } from "vue";

const items = ref([
  "Home",
  "Course",
  "Students",
  "Payment",
  "Report",
  "Settings",
]);
</script>
<template>
  <div
    class="w-[20%] h-full flex flex-col justify-between fixed px-[25px] py-[18px] bg-[#F2EAE1]"
  >
    <h2
      class="text-[20px] font-bold px-2"
      style="border-left: 4px solid #feaf00"
    >
      CRUD OPERATIONS
    </h2>

    <div class="flex flex-col items-center gap-2">
      <a
        v-for="(item, index) in items"
        :key="index"
        href="#"
        class="pl-[10px] w-[193px] p-3 hover:bg-[#FEAF00] rounded-md text-center"
        >{{ item }}</a
      >
    </div>

    <p class="text-center">Logout</p>
  </div>
</template>
