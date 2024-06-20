<template>
    <div class="prose">
        <div class="text-center pt-4">
            <h1>Counter App</h1>
        </div>
        <div class=" flex flex-row justify-center gap-6">
            <h1 class="text-6xl">{{ count }} ({{ OddorEven }})</h1>
            <span class="text-6xl">|</span>
            <h1 class="text-6xl">{{ Math.ceil(storeCounter.count) }} ({{ storeCounter.oddorEven }})</h1>
        </div>
        <div class=" gap-5 flex justify-center ">
            <button @click="increaseCount" class="btn text-3xl btn-primary">+</button>
            <button @click="decreaseCount" class="btn text-3xl btn-secondary">-</button>
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
// @ is an alias, that is configured inside vite.config.js
import { useCounterStore } from "@/stores/counter"
import { computed, ref } from "vue"

console.log(useCounterStore)
const storeCounter = useCounterStore()
console.log(storeCounter)

const count = ref(0)

const increaseCount = () => {
    count.value++
    storeCounter.increaseCount()
}
const decreaseCount = () => {
    count.value--
    storeCounter.decreaseCount()
}

const OddorEven = computed(() => {
    if (count.value % 2 === 0) return 'Even'
    return 'Odd'
})
</script>