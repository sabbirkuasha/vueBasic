<template>
    <div id="cards" class="ring flex justify-center items-center min-h-screen bg-slate-0">
        <div id="stepsContainer"
            class="outline outline-slate-200 outline-[15px] flex rounded-sm overflow-hidden bg-slate-200">
            <StepsCounter :steps="steps" />

            <div id="steps-form-details" class="border-none p-5 w-1/2">
                <h1 class="text-black">Hello the content </h1>
                <h1 class="text-black">Hello the content </h1>
            </div>
        </div>

    </div>
</template>

<script setup>
import StepsCounter from './StepsCounter.vue'

const steps = ([
    {
        id: 1,
        title: 'Step 1',
        stepTitle: 'Your Info'
    },
    {
        id: 2,
        title: 'Step 2',
        stepTitle: 'Select Plans'
    },
    {
        id: 3,
        title: 'Step 3',
        stepTitle: 'Add-Ons'
    },
    {
        id: 4,
        title: 'Step 4',
        stepTitle: 'Summary'
    },
])
</script>
