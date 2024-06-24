<template>
    <div
        class="prose prose-h1:text-slate-900 prose-h2:text-slate-800 prose-h1:mb-0 prose-h2:my-0 prose-p:mt-3 prose-p:text-slate-600 prose-label:text-slate-900 w-full px-4 h-full  flex flex-col">

        <div class="">
            <h1 class="">Select your plan</h1>
            <p class="">have the option of monthly or yearly billing</p>
        </div>
        <form class="flex flex-col flex-grow  justify-between">
            <div class="flex flex-col gap-8">
                <div class="flex flex-row justify-between gap-5">
                    <div v-for="item in planList" :key="item.id">
                        <div class="prose-h4:text-gray-700 prose-h6:text-gray-700 prose-h6:font-bold">
                            <!-- {{ item.inputID }} -->
                            <input type="radio" :id="item.id" name="promo" class="peer hidden" />
                            <label :for="item.id"
                                class="flex h-[200px] w-[150px] cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-300 p-4 transition-all duration-200 ease-in-out hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-100 peer-checked:border-2">
                                <img :src="item.planImage" alt="Arcade" class="mb-2 h-10 w-10" />
                                <h4 class="text-lg font-bold">Arcade</h4>
                                <h6 class="text-gray-600">$9/mo</h6>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="w-full rounded-md flex flex-col gap-5">
                    <h2>Select Period</h2>
                    <div
                        class="rounded-md p-2 hover:shadow-xl duration-500 flex flex-row items-center space-x-4 relative justify-center border-gray-300 border w-full">
                        <h1 class="text-lg font-medium ">Monthly</h1>
                        <label for="check1"
                            class="relative  h-10 w-20 rounded-full bg-gray-300  cursor-pointer flex items-center">
                            <input type="checkbox" id="check1" class="peer sr-only" />
                            <span
                                class="absolute left-1 top-1 h-8 w-8 rounded-full bg-slate-600 duration-500 peer-checked:left-11 peer-checked:bg-slate-900"></span>
                        </label>
                        <h1 class="text-lg font-medium ">Yearly</h1>
                    </div>
                </div>
            </div>

            <div class="flex justify-between mt-5">
                <button class="btn btn-outline w-36" type="button">Back</button>
                <button class="btn w-36" type="button">Next</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const planList = ref([
    {
        id: 1,
        planName: 'Arcade',
        planPrice: {
            monthly: 9,
            yearly: 9 * (12 - 2)
        },
        planImage: '/src/assets/images/icon-arcade.svg',
        inputID: 'arcade'
    },
    {
        id: 2,
        planName: 'Advanced',
        planPrice: {
            monthly: 9,
            yearly: 9 * (12 - 2)
        },
        planImage: '/src/assets/images/icon-advanced.svg',
        inputID: 'advanced'
    },
    {
        id: 3,
        planName: 'Pro',
        planPrice: {
            monthly: '$9',
            yearly: 9 * (12 - 2)
        },
        planImage: '/src/assets/images/icon-pro.svg',
        inputID: 'pro'
    },
])

console.log(planList)

</script>