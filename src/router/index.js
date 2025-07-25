import { createRouter, createWebHistory } from 'vue-router'
import MasterComponent from '@/components/MasterComponent.vue' // Прямой импорт

const router = createRouter({
  history: createWebHistory('/kaliningrad-recycle/'),
  routes: [{ 
      path: '/', 
      component: MasterComponent // Используем напрямую импортированный компонент
    }]
})

export default router // Меняем на default export