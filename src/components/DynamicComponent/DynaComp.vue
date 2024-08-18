<template>
    <div class="p-5">
        <h1>Dynamic Component Example</h1>

        <div class="flex gap-5 py-5">
            <button class="btn btn-primary" @click="currentComponent = 'VcardA'">Load First Component</button>
            <button class="btn btn-primary" @click="currentComponent = 'VcardB'">Load Second Component</button>
        </div>

        <!-- Dynamic component rendering -->
        <component :is="componentMap[currentComponent]" />
    </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
import VcardA from '../common/Cards/VcardA.vue';
import VcardB from '../common/Cards/VcardB.vue';

// Define the mapping of component names to actual components
const componentMap = {
    VcardA: VcardA,
    VcardB: VcardB,
};

// The component to be displayed is determined by this variable
const currentComponent = ref(componentMap.VcardA);

// Watch for changes in currentComponent and log it to the console
watch(currentComponent, (oldValue, newValue) => {
    console.log('currentComponent updated to:', newValue);
    console.log('PreviousComponent was:', oldValue);
});

watchEffect(() => {
    console.log('watchEffect: ', currentComponent)
})
</script>