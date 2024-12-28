import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginOrRegisterView.vue')
    },
    {
      path: '/account/:hello',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    }
  ]
})

export default router
