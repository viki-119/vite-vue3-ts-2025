import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import { resolve } from 'path'

// https://vite.dev/config/
// https://element-plus-docs.bklab.cn/zh-CN/guide/quickstart.html
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus()
  ],
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
