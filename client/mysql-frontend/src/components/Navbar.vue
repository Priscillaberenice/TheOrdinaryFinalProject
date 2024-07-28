<template>
  <nav v-if="isVisible">
    <div class="pt-6">
      <h2 class="text-2xl font-bold text-slate-950 ml-20 mr-20">Browse by categories</h2>
      <ul class="flex justify-between items-center pt-6 ml-20 mr-20">
        <li v-for="item in menuItems" :key="item.text" class="hover:bg-transparent hover:text-lime-300 hover:border-lime-100 border rounded-full px-4 py-2 mx-1 text-center border-slate-950 text-amber-950 bg-transparent shadow-lg shadow-slate-950 hover:shadow-sm opacity-75 hover:opacity-100">
          <router-link :to="item.path">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuItems: [
        { text: 'New', path: '/new' },
        { text: 'Bestsellers', path: '/bestsellers' },
        { text: 'Summer Top', path: '/summerTop' },
        { text: 'Special Prices', path: '/specialPrices' },
        { text: 'Skincare', path: '/skincare' },
        { text: 'Haircare', path: '/haircare' },
        { text: 'Bodycare', path: '/bodycare' },
        { text: 'Gifts', path: '/gifts' },
        { text: 'Packs', path: '/packs' }
      ]
    };
  },
  computed: {
    isVisible() {
      return this.$route.name === 'Home';
    }
  }
};
</script>