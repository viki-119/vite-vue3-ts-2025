<template>
  <div class="item-container" @click="callFromParent">
    <slot name="header" :userInfo="userInfo">如果没有提供内容，则显示这个默认文本</slot>
    <div>{{ userInfo.id }}</div>
    <div>{{ props.name }}</div>
    <div>{{ userInfo.role }}</div>
    <slot name="footer">如果没有提供内容，则显示这个默认文本</slot>
  </div>
</template>

<script setup lang="ts">
import { ListItemType } from './types';
// 使用 defineProps 接收父组件传递过来的 props
const props = defineProps<{
  userInfo: ListItemType;
  name: string;
}>();

const emit = defineEmits(['callFromChild']);
const callFromParent = (): void => {
  emit('callFromChild', props.userInfo)
}
</script>

<style scoped lang="scss">
.item-container {
  width: 100px;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
  border: 1px solid gray;
}
</style>