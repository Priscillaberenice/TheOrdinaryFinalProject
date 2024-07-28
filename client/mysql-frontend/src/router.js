import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AboutUs from './views/AboutUs.vue';
import Contact from './views/Contact.vue';
// import Perfume from './views/Perfume.vue';
// import Moisturizer from './views/Moisturizer.vue';
// import Shampoo from './views/Shampoo.vue';
// import GiftCards from './views/GiftCards.vue';
// import Toner from './views/Toner.vue';
// import FaceOils from './views/FaceOils.vue';
// import Foundation from './views/Foundation.vue';
// import Suncare from './views/Suncare.vue';
// import Tools from './views/Tools.vue';

const routes = [
  { path: '/', name: 'Home',component: Home },
  { path: '/AboutUs', component: AboutUs },
  { path: '/contact', component: Contact }
//   { path: '/perfume', component: Perfume },
//   { path: '/moisturizer', component: Moisturizer },
//   { path: '/shampoo', component: Shampoo },
//   { path: '/gift-cards', component: GiftCards },
//   { path: '/toner', component: Toner },
//   { path: '/face-oils', component: FaceOils },
//   { path: '/foundation', component: Foundation },
//   { path: '/suncare', component: Suncare },
//   { path: '/tools', component: Tools }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;