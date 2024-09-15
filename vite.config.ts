import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import process from 'process'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode}) => {

  // const env = loadEnv(mode, process.cwd(), '')
  const isProd:boolean = mode === 'production'
  return {
    base:  isProd?'/learn-babylonjs/': '/',
    plugins: [vue()],
    resolve: {
      alias: {
          // @ 替代为 src
        '@': resolve(__dirname, 'src'),
         // @component 替代为 src/component
        '@components': resolve(__dirname, 'src/components'),
      },
    },
    server: {
      open: true
    },
    build: {
      outDir: 'docs'
    }
  }


})
