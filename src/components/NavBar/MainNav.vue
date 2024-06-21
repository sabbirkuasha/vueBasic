<!-- <script>
import ActionButton from '@/components/common/ActionButton.vue'

export default {
  name: 'MainNav',
  components: {
    ActionButton
  },
  data() {
    return {
      company: 'Sabbirz',
      menuItems: {
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
      },
      menuItemsArray: ['Home', 'About']
    }
  }
}
</script> -->

<script setup>
import { ref } from 'vue';
import ActionButton from '@/components/common/ActionButton.vue';

const company = ref('Sabbirz');
const menuItems = ref({
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
});
</script>

<template>
  <ul class="menu menu-horizontal bg-base-200 w-full justify-between items-center">
    <li>
      <a>{{ company }}</a>
    </li>
    <li></li>
    <ul class="menu-horizontal items-center">
      <li v-for="menuItem in menuItems" :key="menuItem">
        <router-link :to="menuItem.url" class="">{{ menuItem.name }}</router-link>
        <!-- <a :href="menuItem.url">{{ menuItem.name }}</a> -->
      </li>
      <ActionButton />
    </ul>
  </ul>
</template>
