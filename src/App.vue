<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import MainNav from './components/NavBar/MainNav.vue'
</script>

<template>
  <header>
    <MainNav />
    <div class="wrapper"></div>
  </header>

  <RouterView />
</template>
