<template>
    <div
        class="prose prose-h1:text-slate-900 prose-h2:text-slate-800 prose-h1:mb-0 prose-h2:my-0 prose-p:mt-3 prose-p:text-slate-600 prose-label:text-slate-900 w-full px-4 h-full  flex flex-col prose-h3:my-0">
        <MShead heading="Finishing Up" subHeading="Double-check everything before confirming" />
        <div class="flex flex-col flex-grow justify-between mt-2">
            <div class="p-4 bg-gray-100 rounded-xl shadow w-full hover:bg-white ">
                <div class="flex items-center justify-between border-b bg-gray-100 p-4 rounded-lg">
                    <div class="">
                        <h3 class="font-medium text-gray-900">Arcade (Monthly)</h3>
                        <a href="#" class="text-blue-500 hover:underline">Change</a>
                    </div>
                    <div class="text-lg pl-10 font-semibold text-gray-900">$9/mo</div>
                </div>
                <div class=" bg-gray-100 p-4 rounded-lg">
                    <div class="flex justify-between py-2 border-b">
                        <span class="text-gray-700">Online service</span>
                        <span class="text-gray-900 ">+$1/mo</span>
                    </div>
                    <div class="flex justify-between py-2">
                        <span class="text-gray-700">Larger storage</span>
                        <span class="text-gray-900">+$2/mo</span>
                    </div>
                </div>
                <div class="flex justify-between pt-2 border-t ">
                    <span class="text-lg font-medium text-gray-900">Total (per month)</span>
                    <span class="text-lg font-semibold text-blue-600">+$12/mo</span>
                </div>
            </div>
            <div>
                <SetpForwardBackward />
            </div>
        </div>
    </div>
</template>

<script setup>
import MShead from './Common/MShead.vue';
import SetpForwardBackward from './Common/SetpForwardBackward.vue';
</script>