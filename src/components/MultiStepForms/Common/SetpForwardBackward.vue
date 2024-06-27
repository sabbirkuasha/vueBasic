<template>
    <div class="text-right text-gray-800">
        <p>Current Step: <span class="font-bold">{{ mFormData.currentStep }}</span>/{{ mFormData.totalStep }}</p>
    </div>
    <div class="flex justify-between mt-5 ">
        <button class="btn btn-outline w-36" :disabled="mFormData.currentStep > 1 ? false : true" type="button"
            @click="mFormData.prevStep()">Back</button>
        <button class="btn w-36" type="button" @click="mFormData.nextStep()"
            :disabled="mFormData.currentStep >= mFormData.totalStep ? true : false">Next</button>
    </div>
</template>
<script setup>
import { mForm } from '@/stores/multiForm';

const mFormData = mForm()

console.log(mFormData.currentStep)
</script>