<template>
  <ElConfigProvider :locale='currentLocale'>
    <!-- 你的应用内容 -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'Demo' }">Demo</router-link>
      <button @click="switchLanguage">切换为{{currentLanguage === Languages.zh_cn ? '英语' : '中文'}}</button>
    </nav>
    <router-view></router-view>
  </ElConfigProvider>

</template>

<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import { currentLocale, getCurrentLocale, Languages, currentLanguage, setCurrentLanguage } from '@/utils/language'

const switchLanguage = () => {
  const lang = currentLanguage.value === Languages.zh_cn ? Languages.en_us : Languages.zh_cn;
  setCurrentLanguage(lang);
  currentLocale.value = getCurrentLocale(lang);
}
// 全局逻辑的处理可以放在这里面;
</script>

<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
