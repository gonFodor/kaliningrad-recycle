import '@/assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router' 

// 1. Создаём экземпляр приложения
const app = createApp(App)

// 2. Подключаем router к приложению
app.use(router)

// 3. Монтируем приложение
app.mount('#app')