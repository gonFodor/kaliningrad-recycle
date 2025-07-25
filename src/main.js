import '@/assets/css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Теперь импортируем default export

const app = createApp(App)
app.use(router)
app.mount('#app')