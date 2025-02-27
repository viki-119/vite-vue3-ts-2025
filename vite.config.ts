import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";
import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
// https://element-plus-docs.bklab.cn/zh-CN/guide/quickstart.html
export default defineConfig({
  server: {
    // port: 3000, // 指定服务器端口号
    open: true, // 在启动服务时自动打开浏览器
  },
  build: {
    // chunkSizeWarningLimit: 1000, // 默认 500，单位 KB
    rollupOptions: {
      // external: ["vue", "element-plus"],
      output: {
        manualChunks: {
          // 将 Vue 相关库单独打包
          vue: ["vue", "vue-router"],
          // 将 Element Plus 单独打包
          element: ["element-plus"],
          // 将 lodash 单独打包（如有使用）
          // lodash: ['lodash-es']
        },
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
          vuex: "Vuex",
          "element-plus": "ElementPlus",
        },
      },
    },
  },
  plugins: [
    legacy({
      targets: ["> 1%", "last 2 versions"],
      modernPolyfills: ["es.array.iterator", "es.promise"],
      renderLegacyChunks: false,
    }),
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
    visualizer({
      open: true, // 构建完成后自动打开报告
      gzipSize: true, // 显示 Gzip 压缩后大小
      brotliSize: true, // 显示Brotli压缩后大小
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
});
