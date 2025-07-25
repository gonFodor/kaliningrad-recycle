import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/kaliningrad-recycle/'),
  routes: [{ 
      path: '/', 
      component: () => import('@/components/MasterComponent.vue') // Укажите ваш компонент для главной страницы
    }]
})

export { router } 