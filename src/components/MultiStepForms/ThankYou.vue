<template>
    <div class=" h-full flex flex-col justify-center items-center prose ">
        <img :src="thankYouImage" alt="Thank You">
        <h1 class="text-gray-800">Thank you </h1>
        <p class="text-center text-gray-700">Thanks for confirming your subscription! We hope you have fun using our
            platform. If you
            ever need support,
            please feel free to email us at support@loremgaming.com</p>
    </div>
</template>
<script setup>
import thankYouImage from '../../assets/images/icon-thank-you.svg';
</script>