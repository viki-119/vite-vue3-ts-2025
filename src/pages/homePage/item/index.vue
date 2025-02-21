<template>
  <div class="item-container" @click="callFromParent">
    <div>{{userInfo.id}}</div>
    <div>{{props.name}}</div>
    <div>{{userInfo.role}}</div>
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
  const callFromParent = () :void => {
    emit('callFromChild', props.userInfo)
  }
  
</script>

<style scoped lang="scss">
  .item-container {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    border: 1px solid gray;
  }
</style>