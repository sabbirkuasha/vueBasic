<template>
    <div v-if="hasAnyProps">
        <h1 v-if="heading">{{ heading }}</h1>
        <p v-if="subHeading">{{ subHeading }}</p>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    heading: {
        type: String,
        default: ''
    },
    subHeading: {
        type: String,
        default: ''
    }
});

const hasAnyProps = computed(() => props.heading !== '' || props.subHeading !== '');
</script>
