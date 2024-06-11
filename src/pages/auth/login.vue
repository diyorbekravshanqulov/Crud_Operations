<template>
  <div class="bg-gradient h-screen flex justify-center items-center">
    <div class="bg-white w-[500px] py-[42px] px-[30px] rounded-[20px]">
      <h1
        class="text-center font-bold mx-14 text-[32px]"
        style="border-left: 6px solid #FEAF00;"
      >
        CRUD OPERATIONS
      </h1>

      <h6 class="font-semibold text-[22px] text-center mt-8">Sign in</h6>
      <p class="text-[#6C6C6C] text-center">
        Enter your credentials to access your account
      </p>

      <form @submit.prevent="loginUser" class="flex flex-col gap-5 mt-8">
        <label for="" class="text-[#6C6C6C]">
          Email
          <input
            v-model="userData.username"
            class="w-full px-[15px] py-3 border rounded border-[#E5E5E5] outline-none focus:border-[#FEAF00] placeholder:text-[#CDCDCD] placeholder:text-[12px]"
            type="text"
            placeholder="Enter your email"
          />
        </label>
        <label for="" class="text-[#6C6C6C]">
          Password
          <input
            v-model="userData.password"
            class="w-full px-[15px] py-3 border rounded border-[#E5E5E5] outline-none focus:border-[#FEAF00] placeholder:text-[#CDCDCD] placeholder:text-[12px]"
            type="text"
            placeholder="Enter your password"
          />
        </label>

        <button
          class="w-full px-[15px] py-3 text-center rounded-[4px]  hover:bg-[#ffcb5a] text-xl bg-[#FEAF00] text-white"
        >
          Login
        </button>
        <div class="flex justify-center items-center">
          <p class="text-[#aaa] mt-[27px]">
            Forgot your password?
            <a href="#" class="font-semibold text-[#FEAF00]">Reset Password</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import api from "@/api";

import { useRouter } from "vue-router";

const router = useRouter();

const userData = reactive({
  username: "",
  password: "",
});

const loginUser = () => {
  api
    .post("/auth/login", userData)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      router.push("/home");
      console.log("res", res);
    })
    .catch((err) => {
      console.log("err", err);
    });
};
</script>

<style scoped></style>
