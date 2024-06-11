<script setup>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div>
    <Sidebar />
    <Navbar />
    <router-view />
  </div>
</template>
