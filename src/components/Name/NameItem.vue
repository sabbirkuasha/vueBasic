<template>
    <div v-for="(data, index) in data" :key="index" class="p-5">
        <div class="card card-side bg-base-100 shadow-xl border px-5">
            <figure class="">
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie" />
            </figure>
            <div class="card-body ">
                <h2 class="card-title">{{ data.name }}</h2>
                <p class=" text-left">{{ data.department }}</p>
                <p class=" text-left text-xl">{{ data.salary }}</p>
                <div class="card-actions justify-end w-full">
                    <button class="btn btn-outline w-full ">Contact</button>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import { watchEffect } from "vue"

let { data } = defineProps({
    data: Object
})

// console.log(data)
watchEffect(() => {
    console.log(data)
})
</script>