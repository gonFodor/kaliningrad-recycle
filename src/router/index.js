import { createRouter, createWebHashHistory  } from 'vue-router'
import MasterComponent from '@/components/MasterComponent.vue'

const router = createRouter({
  history: createWebHashHistory(), // Просто замените эту строку!
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