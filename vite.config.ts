import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  // mode: 'development',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`, // 自动注入全局 SCSS 变量
      },
    },
    // postcss: {
    //   plugins: [
    //     require('autoprefixer'), // 可选：直接在这里配置 PostCSS 插件
    //   ],
    // },
  },
})
