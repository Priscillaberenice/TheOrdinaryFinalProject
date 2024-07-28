<template>
  <div class="fixed top-5 right-5">
    <button @click="toggleCart" class="bg-lime-100 mx-2 rounded-full text-white px-5 pt-3 pb-3 flex items-center">
      🛒
    </button>
    <div v-if="isOpen" class="w-80 bg-white rounded-lg shadow p-4 mt-2 relative">
      <button @click="isOpen = false" class="absolute right-1 top-1 font-bold text-gray-600">
        ❎
      </button>
      <h2 class="mb-3 font-bold">MY CART</h2>
      <div :class="{'max-h-60 overflow-y-auto': cart.length > 3}" class="mb-4">
        <div v-for="(item, index) in cart" :key="index" class="flex mb-4 items-center">
          <img :src="item.image" alt="" class="w-24 h-24 object-cover rounded">
          <div class="ml-2 flex-grow">
            <p class="font-bold">{{ item.name }}</p>
            <p class="text-gray-600">EUR {{ item.price }}</p>
            <div class="flex gap-2 mt-2">
              <button @click="increaseQuantity(index)" class="bg-lime-200 rounded-full text-white text-xl px-2 py-1">
                ➕
              </button>
              <div class="mt-1 font-bold text-xl text-gray-600">{{ item.quantity }}</div>
              <button @click="decreaseQuantity(index)" class="bg-lime-200 rounded-full text-white text-xl px-2 py-1">
                ➖
              </button>
              <button @click="removeFromCart(index)" class="text-white px-2 py-1">
                🗑️
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <p class="font-bold text-lime-300">TOTAL</p>
        <p class="font-bold text-slate-950 mb-2">EUR {{ totalPrice }}</p>
        <button class="w-full rounded-lg bg-neutral-800 text-white pt-1 pb-1 hover:bg-lime-200">CHECK OUT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: ['cart'],
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    totalItems() {
      return this.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalPrice() {
      return this.cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
    },
  },
  methods: {
    toggleCart() {
      this.isOpen = !this.isOpen;
    },
    increaseQuantity(index) {
      this.cart[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.removeFromCart(index);
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    openCart() {
      this.isOpen = true;
    }
  }
};
</script>