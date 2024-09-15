import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  //开发环境和生产环境
  base: env.NODE_ENV === 'production' ? '/learn-babylonjs/' : '/',
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  }
  
})
