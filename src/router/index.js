import { createRouter, createWebHistory } from 'vue-router'
import MasterComponent from '@/components/MasterComponent.vue'

const router = createRouter({
  history: createWebHistory('/kaliningrad-recycle/'), // Совпадает с base в vite.config.js
  routes: [
    { 
      path: '/',
      name: 'Home',
      component: MasterComponent
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/' // Редирект для всех несуществующих путей
    }
  ]
})

export default router