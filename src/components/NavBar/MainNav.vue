<script>
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
      },
      menuItemsArray: ['Home', 'About']
    }
  }
}
</script>

<template>
  <ul class="menu menu-horizontal bg-base-200 w-full justify-between items-center">
    <li>
      <a>{{ company }}</a>
    </li>
    <li></li>
    <ul class="menu-horizontal items-center">
      <li v-for="menuItem in menuItems" :key="menuItem">
        <a :href="menuItem.url">{{ menuItem.name }}</a>
      </li>
      <ActionButton />
    </ul>
  </ul>
</template>
