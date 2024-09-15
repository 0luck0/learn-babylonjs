import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  //开发环境和生产环境
  base:'/learn-babylonjs/',
  plugins: [vue()],
  server: {
    open: true
  },
  build: {
    outDir: 'docs'
  }
   
  
})
