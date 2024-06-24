<template>
    <div
        class="prose prose-h1:text-slate-900 prose-h1:mb-0 prose-p:mt-3 prose-p:text-slate-600 prose-label:text-slate-900 w-full px-4 h-full  flex flex-col">
        <!-- <div class="">
            <h1 class="">Personal Info</h1>
            <p class="">Please provide your Name, email address, and phone number.</p>
        </div> -->
        <MShead heading="Personal Info" subHeading="Please provide your Name, email address, and phone number." />
        <form class="flex flex-col flex-grow gap-5  justify-between ">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col w-full gap-2">
                    <label class="text-slate-800" for="name">Name</label>
                    <input type="text" id="name" v-model="name" class="w-full rounded" placeholder="Lorem Ipsum">
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label class="text-slate-800" for="email">Email Address</label>
                    <input type="email" class="w-full rounded" placeholder="example@example.com">
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label class="text-slate-800" for="phoneNumber">Phone Number</label>
                    <input type="number" id="phoneNumber" class="w-full rounded" placeholder="e.g. +12345678">
                </div>
            </div>

            <div class="flex justify-between">
                <button class="btn btn-outline w-36">Back</button>
                <button class="btn w-36">Next</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import MShead from './Common/MShead.vue';

</script>