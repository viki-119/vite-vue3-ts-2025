import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";
import { resolve } from "path";
// import legacy from "@vitejs/plugin-legacy";

// https://vite.dev/config/
// https://element-plus-docs.bklab.cn/zh-CN/guide/quickstart.html
export default defineConfig({
  server: {
    // port: 3000, // 指定服务器端口号
    open: true, // 在启动服务时自动打开浏览器
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({
      useSource: true, // 启用源码模式解析
    }),
  ],
  base: "./",
  // mode: 'development',
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
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
  // legacy({
  //   // targets: ['defaults', 'not IE 11'],
  //   additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
  // })
});
