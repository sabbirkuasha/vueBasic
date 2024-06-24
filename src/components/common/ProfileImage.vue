<script setup>
let imageLink = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
</script>

<template>
  <div class="avatar placeholder">
    <div class="bg-neutral text-neutral-content rounded-full w-12">
      <img v-bind:src="imageLink" alt="ProfileImage" />
    </div>
  </div>
</template>
