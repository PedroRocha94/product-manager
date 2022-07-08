import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home';
import About from '../pages/About'
import ProductDetails from '../pages/ProductDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "product" */ '../pages/Product.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/:id/details',
    name: 'details',
    component: ProductDetails,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
