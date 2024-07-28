<template>
  <main class="pb-5">
    <article class="mt-6 mx-20">
      <div class="w-full flex flex-row">
        <img src="https://www.elryan.com/img/600/600/resize/catalog/product/6/4/64d88d2eaf1b950012da509554710ss-92703.jpg" alt="theOrdinary" class="w-1/3 object-cover rounded-t-lg">
        <img src="https://cdn.quicksell.co/-MUxuOSLYI_vuyCq_qUm/products/-NiwCa2uPSv2Ii1lODBZ.jpg" class="w-1/3 object-cover rounded-t-lg">
        <img src="https://cdn.basler-beauty.de/out/pictures/generated/product/3/1200_1200_100/2593297-The-Ordinary-Natural-Moisturizing-Factors-PhytoCeramides-100-ml.aa73cefa.jpg" alt="theOrdinary" class="w-1/3 object-cover rounded-t-lg">
      </div>
      <div class="flex flex-col justify-center rounded-b-lg">
        <h2 class="font-light text-black text-center text-6xl mt-3">An Evolving Collection of Treatments</h2>
        <p class="mt-2 mb-3 text-2xl text-center pt-4 text-lime-600">
          The Ordinary is born to disallow commodity to be disguised as ingenuity. The Ordinary is "Clinical formulations with integrity".
        </p>
      </div>
    </article>
    <section class="ml-20 mr-20">
      <div class="grid grid-cols-6 justify-center gap-x-5 gap-y-10 my-20">
        <div v-for="product in products" :key="product.id" class="flex flex-col shadow-lg shadow-slate-200 hover:shadow-sm rounded-b-lg rounded-t-lg border-gray-100 border-2 hover:border-slate-50">
          <div class="w-full">
            <img :src="product.image" :alt="product.name" class="w-full object-cover rounded-t-lg item-image">
          </div>
          <div>
            <h2 class="item-title mt-2 mx-2 font-bold">{{ product.name }}</h2>
            <h3 class="text-sm text-slate-900 ml-2 mr-10">{{ product.description }}</h3>
            <ul class="flex justify-between">
              <li class="mx-2 mt-2 mb-2">
                <p class="item-price">{{ product.price }}</p>
              </li>
              <li class="mx-2 mb-2">
                <button @click="addToCart(product)" class="item-button addToCart mx-2 rounded-lg bg-neutral-800 text-white px-2 pt-1 pb-1 hover:bg-lime-200">🛒</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <ShoppingCart :cart="cart" ref="shoppingCart"/>
  </main>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart.vue'

export default {
  name: 'Home',
  components: {
    ShoppingCart
  },
  data() {
    return {
      products: [],
      cart: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch('http://localhost:3002/api/products')
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          this.products = data;
        })
        .catch(error => {
          console.error("There was an error fetching the products:", error);
        });
    },
    addToCart(product) {
      const found = this.cart.find(item => item.id === product.id);
      if (found) {
        found.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.$refs.shoppingCart.openCart();
    }
  }
};
</script>