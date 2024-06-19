<template>
    <div id="steps" class="rounded-lg bg-blue-950 border-2">
        <div id="dot" class=" text-white py-6 px-4">
            <ol class="flex flex-col gap-5 ">
                <li v-for="step in steps" :key="step.id" class="flex flex-row gap-2 items-center font-semibold w-52">
                    <div class="p-2">
                        <div class="border w-10 h-10 flex justify-center items-center rounded-full bg-slate-0">
                            <h6 class=" text-white">{{ step.id }}</h6>
                        </div>
                    </div>
                    <div class="flex flex-col uppercase">
                        <p class="text-sm text-gray-300">{{ step.title }}</p>
                        <h3 class="">{{ step.stepTitle }}</h3>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script setup>
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
