<template>
  <div class="prose max-w-full">
    <div class="mt-5 mx-auto text-center">
      <h1 class="">This is an about page</h1>
    </div>
    <div class="text-center">
      <h2>The value of counter store from pinia store is</h2>
      <h1>{{ counterStore.count }}</h1>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore()
</script>