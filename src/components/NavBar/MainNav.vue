<script>
export default {
  name: 'MainNav',
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
        }
      },
      menuItemsArray: ['Home', 'About']
    }
  }
}
</script>

<template>
  <ul class="menu menu-horizontal bg-base-200 w-full justify-between">
    <li>
      <a>{{ company }}</a>
    </li>
    <ul class="menu-horizontal">
      <li v-for="menuItem in menuItems" :key="menuItem">
        <a :href="menuItem.url">{{ menuItem.name }}</a>
      </li>
    </ul>
  </ul>
</template>
