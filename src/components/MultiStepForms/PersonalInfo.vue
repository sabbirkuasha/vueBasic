<template>
    <div
        class="prose prose-h1:text-slate-900 prose-h1:mb-0 prose-p:mt-0 prose-p:mb-0  prose-label:text-slate-900 w-full px-4 h-full flex flex-col">
        <!-- <div class="">
            <h1 class="">Personal Info</h1>
            <p class="">Please provide your Name, email address, and phone number.</p>
        </div> -->
        <MShead heading="Personal Info" subHeading="Please provide your Name, email address, and phone number." />
        <form class="flex flex-col flex-grow gap-5 justify-between mt-5">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col w-full gap-2">
                    <div class="flex items-center justify-between">
                        <label class="text-slate-800" for="name">Name</label>
                        <p class=" text-rose-700" v-if="mFormData.requiredField">This field is
                            required</p>
                    </div>
                    <input type="text" id="name" v-model="mFormData.newUser.formPersonalinfo.name"
                        class="w-full rounded text-black" placeholder="Lorem Ipsum">
                </div>
                <div class="flex flex-col w-full gap-2">
                    <div class="flex items-center justify-between">
                        <label class="text-slate-800" for="email">Email Address</label>
                        <p class=" text-rose-700 ">This field is required</p>
                    </div>
                    <input type="email" class="w-full rounded" placeholder="example@example.com">
                </div>
                <div class="flex flex-col w-full gap-2">
                    <div class="flex items-center justify-between">
                        <label class="text-slate-800" for="phoneNumber">Phone Number</label>
                        <p class=" text-rose-700 ">This field is required</p>
                    </div>
                    <input type="number" id="phoneNumber" class="w-full rounded" placeholder="e.g. +12345678">
                </div>
            </div>

            <!-- <div class="flex justify-between">
                <button class="btn btn-outline w-36">Back</button>
                <button class="btn w-36">Next</button>
            </div> -->
            <div>
                <SetpForwardBackward />
            </div>
        </form>
    </div>
</template>

<script setup>
import MShead from './Common/MShead.vue';
import SetpForwardBackward from './Common/SetpForwardBackward.vue';
import { mForm } from '@/stores/multiForm';

const mFormData = mForm()


// console.log(mFormData.$state)
// console.log(mFormData.currentStep)

</script>