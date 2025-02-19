<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      你好，Vite + Vue!
    </a>
    <div :class="$style.myText">
      <div :class="$style.myXX">xxxx</div>
    </div>
    <div class="myText">
      <div class="myXX">yyyy</div>
    </div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style module>
  .myText {
    color: green;
  }

  .myXX {
    color: brown;
  }
</style>

<style lang="scss">
  .myText {
    .myXX {
      color: red;
    }
  }
</style>

<style lang="scss" scoped>
  @use './style.module.scss'; // 引入样式文件
</style>
