<template>
    <div class="prose">
        <div class="text-center pt-4">
            <h1>Counter App</h1>
        </div>
        <div class="text-center">
            <h1 class="text-6xl">{{ count }}</h1>
        </div>
        <div class=" gap-5 flex justify-center">
            <button @click="increaseCount" class="btn btn-primary">+</button>
            <button @click="decreaseCount" class="btn btn-secondary">-</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
const count = ref(0)

const increaseCount = () => {
    count.value++
}
const decreaseCount = () => {
    count.value--
}
</script>