<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import ActionButton from '@/components/common/ActionButton.vue'

// Static data can be defined directly
const pageTitle = 'This is home view'
const pageInfo = {
  description: 'Welcome to our website. Feel free to browse around and learn more about us.',
  year: 2024
}
</script>

<template>
  <main class="">
    <ActionButton />
    <h1>This is home view</h1>

    <h1>{{ pageTitle }}</h1>
    <p>{{ pageInfo.description }}</p>
    <footer>© {{ pageInfo.year }}</footer>
  </main>
</template>
