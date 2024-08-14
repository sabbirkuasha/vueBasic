<template>
    <div class="prose max-w-full">
        <div class="mt-5 mx-auto text-center">
            <NameItem :data="information" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import NameItem from "./NameItem.vue"


let information = ref([
    {
        name: "ABC",
        department: "Marketing",
        salary: 35000
    },
    {
        name: "XYZ",
        department: "Engineering",
        salary: 75000
    },
    {
        name: "MNO",
        department: "Executive",
        salary: 135000
    }])

console.log(information)
</script>