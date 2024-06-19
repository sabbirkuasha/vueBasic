<template>
    <h1>Multi Step Form: {{ hello }}</h1>
    <div id="cards" class="ring  flex justify-center items-center min-h-screen  ">
        <div id="stepsContainer"
            class="border-2 outline outline-gray border-slate-400 outline-8 flex rounded-lg overflow-hidden bg-slate-400">
            <StepsCounter />
            <div id="steps-form-details" class="bg-slate-400 p-5 w-1/2">
                <h1 class="text-black">Hello the content </h1>
                <h1 class="text-black">Hello the content </h1>
            </div>
        </div>

    </div>
</template>

<script setup>
import StepsCounter from './StepsCounter.vue'
let hello = 'Hello world'
</script>
