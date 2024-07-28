import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AboutUs from './views/AboutUs.vue';
import Contact from './views/Contact.vue';
// import New from './views/New.vue';
// import Bestsellers from './views/Bestsellers.vue';
// import SummerTop from './views/SummerTop.vue';
// import SpecialPrices from './views/SpecialPrices.vue';
// import Skincare from './views/Skincare.vue';
// import Haircare from './views/Haircare.vue';
// import Bodycare from './views/Bodycare.vue';
// import Gifts from './views/Gifts.vue';
// import Packs from './views/Packs.vue';


const routes = [
  { path: '/', name: 'Home',component: Home },
  { path: '/AboutUs', component: AboutUs },
  { path: '/contact', component: Contact }
//   { path: '/new', component: New },
//   { path: '/bestsellers', component: Bestsellers },
//   { path: '/summerTop', component: SummerTop },
//   { path: '/specialprices', component: SpecialPrices },
//   { path: '/skincare', component: Skincare },
//   { path: '/haircare', component: Haircare },
//   { path: '/bodycare', component: Bodycare },
//   { path: '/gifts', component: Gifts },
//   { path: '/packs', component: Packs }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;