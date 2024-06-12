<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";
const user = ref(null);
const router = useRouter();

user.value = JSON.parse(localStorage.getItem("user"));

console.log("user", user);

if (!user) {
  router.push("/login");
}
</script>

<template>
  <div>
    <div v-if="user">
      <router-view />
    </div>
  </div>
</template>
