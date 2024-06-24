<template>
    <div class="w-full rounded-md flex flex-col gap-5">
        <h2>Select Period</h2>
        <div
            class="rounded-md p-2 hover:shadow-xl duration-500 flex flex-row items-center space-x-4 relative justify-center border-gray-300 border w-full">
            <h1 class="text-lg font-medium ">Monthly</h1>
            <label for="check1" class="relative  h-10 w-20 rounded-full bg-gray-300  cursor-pointer flex items-center">
                <input type="checkbox" id="check1" class="peer sr-only" />
                <span
                    class="absolute left-1 top-1 h-8 w-8 rounded-full bg-slate-600 duration-500 peer-checked:left-11 peer-checked:bg-slate-900"></span>
            </label>
            <h1 class="text-lg font-medium ">Yearly</h1>
        </div>
    </div>
</template>

<script setup>

</script>