<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// import ActionButton from '@/components/common/ActionButton.vue'
import FooterSection from '@/components/common/FooterSection.vue'
import { ref } from 'vue';

// Static data can be defined directly
// const pageTitle = 'This is home view'
const pageInfo = {
  description: 'Welcome to our website. Feel free to browse around and learn more about us.',
  year: 2024
}

const topicItems = ref({
  item1: {
    name: 'Home',
    url: '/'
  },
  item2: {
    name: 'About',
    url: '/about'
  },
  item3: {
    name: 'Form',
    url: '/multi'
  },
  item4: {
    name: 'Counter',
    url: '/counter'
  },
  item5: {
    name: 'Props',
    url: '/name'
  },
  item6: {
    name: 'Dynamic Component',
    url: '/component'
  },
});
</script>

<template>
  <main class="max-w-full text-center h-screen">
    <div class="flex flex-col justify-between h-full">
      <div id="pageContent" class="py-2">
        <h1 class="text-xl font-bold">Topics</h1>
        <p>{{ pageInfo.description }}</p>


        <div class="flex gap-5 flex-wrap justify-center py-4">
          <!-- <button v-for="item, index in topicItems" :key="index" class="btn btn-outline">{{ item.name }}</button> -->
          <router-link class="btn btn-outline" v-for="item, index in topicItems" :key="index" :to="item.url">{{
            item.name
          }}</router-link>
        </div>
      </div>

      <FooterSection />
    </div>
  </main>
</template>
