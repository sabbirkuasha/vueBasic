<template>
    <div
        class="prose prose-h1:text-slate-900 prose-h2:text-slate-800 prose-h1:mb-0 prose-h2:my-0 prose-p:mt-3 prose-p:text-slate-600 prose-label:text-slate-900 w-full px-4 h-full  flex flex-col prose-p:mb-0">

        <MShead heading="Pick add-ons" subHeading="Add-ons help enhance your gaming experience." />
        <form class="flex flex-col flex-grow gap-5 py-5">
            <div class="" v-for="item in addonsList" :key="item.id">
                <div class="relative flex items-center">
                    <input type="checkbox" :id="item.id"
                        class="peer checkbox checkbox-primary absolute left-4 top-1/2  transform -translate-y-1/2 " />
                    <label :for="item.id"
                        class="flex cursor-pointer items-center w-full rounded-lg border-2 border-gray-300 bg-gray-100 p-4 pl-10 transition duration-500 ease-in-out hover:shadow-lg peer-checked:border-2 peer-checked:border-blue-600 peer-checked:shadow-2xl hover:bg-blue-100/20 peer-checked:bg-white">
                        <div class="ml-4">
                            <h2 class="text-lg font-medium">{{ item.addName }}</h2>
                            <p class="text-gray-500">{{ item.description }}</p>
                        </div>
                        <span class="ml-auto font-medium text-blue-600">+${{ item.planPrice.monthly }}/mo</span>
                    </label>
                </div>
            </div>
            <SelectPeriod />
        </form>
    </div>
</template>
<script setup>
import MShead from './Common/MShead.vue';
import SelectPeriod from './Common/SelectPeriod.vue';


const addonsList = [
    {
        id: 1,
        addName: 'Online Service',
        addValue: 'ao1',
        addCode: 'onlineService',
        description: 'Access to multiplayer games',
        planPrice: {
            monthly: 1,
            yearly: 1 * (12 - 2)
        }
    },
    {
        id: 2,
        addName: 'Larger Storage',
        addValue: 'ao2',
        addCode: 'largerStorage',
        description: 'Extra 1TB of cloud save',
        planPrice: {
            monthly: 2,
            yearly: 2 * (12 - 2)
        }
    },
    {
        id: 3,
        addName: 'Customizable Profile',
        addValue: 'ao3',
        addCode: 'customizableProfile',
        description: 'Custom theme on your profile',
        planPrice: {
            monthly: 3,
            yearly: 3 * (12 - 2)
        }
    },
]
console.log(addonsList)
</script>