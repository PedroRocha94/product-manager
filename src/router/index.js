import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home';
import About from '../pages/About'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "product" */ '../pages/Product.vue'),
    children: [
      {
        path: ':id/details', 
        component: () => import(/* webpackChunkName: "product" */ '../pages/ProductDetails.vue'),
        props: true
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
