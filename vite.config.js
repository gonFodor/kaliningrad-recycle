import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/kaliningrad-recycle/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})