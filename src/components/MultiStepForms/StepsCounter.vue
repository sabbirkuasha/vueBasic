<template>
    <div id="steps"
        class="rounded-lg bg-[url('@/assets/images/bg-sidebar-desktop.svg')] w-[322px] h-[566px] border-none overflow-hidden">
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

defineProps({
    steps: {
        type: Array,
        required: true
    }
});


</script>
