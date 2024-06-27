<template>
    <div id="cards" class="ring flex justify-center items-center min-h-screen bg-slate-0">
        <div id="stepsContainer"
            class="outline outline-slate-200 outline-[15px] flex rounded-sm overflow-hidden bg-slate-200 ">
            <StepsCounter :steps="steps" />

            <div id="steps-form-details" class="border-none px-5 py-1 w-[500px]">

                <PersonalInfo v-if="mFormData.currentStep == 1" />

                <PlansInfo v-if="mFormData.currentStep == 2" />
                <AddOns v-if="mFormData.currentStep == 3" />
                <SummaryDetails v-if="mFormData.currentStep == 4" />
                <ThankYou v-if="mFormData.currentStep == 5" />

            </div>
        </div>

    </div>
</template>

<script setup>
import PersonalInfo from './PersonalInfo.vue'
import StepsCounter from './StepsCounter.vue'
import PlansInfo from './PlansInfo.vue'
import AddOns from './AddOns.vue';
import SummaryDetails from './SummaryDetails.vue'
import ThankYou from './ThankYou.vue';

import { mForm } from '@/stores/multiForm';

const mFormData = mForm()
console.log(mFormData.currentStep)

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
