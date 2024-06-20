<template>
    <div class="prose">
        <div class="text-center pt-4">
            <h1>Counter App</h1>
        </div>
        <div class="text-center">
            <h1 class="text-6xl">{{ count }}</h1>
        </div>
        <div class=" gap-5 flex justify-center text-3xl">
            <button @click="increaseCount" class="btn btn-primary">+</button>
            <button @click="decreaseCount" class="btn btn-secondary">-</button>
        </div>
        <hr>
        <div class="text-center">
            <h2>
                This counter is: {{ OddorEven }}
            </h2>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue"
const count = ref(0)

const increaseCount = () => {
    count.value++
}
const decreaseCount = () => {
    count.value--
}

const OddorEven = computed(() => {
    if (count.value % 2 === 0) return 'Even'
    return 'Odd'
})
</script>