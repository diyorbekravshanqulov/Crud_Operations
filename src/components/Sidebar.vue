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

import { useRouter } from "vue-router";
const user = ref(null);
const router = useRouter();

user.value = JSON.parse(localStorage.getItem("user"));

console.log("user", user);

const logout = () => {
  localStorage.removeItem("user");
  router.push("/login");
};
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
        class="pl-[10px] w-[193px] p-3 hover:bg-[#FEAF00] rounded-md text-center duration-300"
        >{{ item }}</a
      >
    </div>

    <button @click="logout" class="text-center hover:text-[#999] duration-300">
      Logout
    </button>
  </div>
</template>
