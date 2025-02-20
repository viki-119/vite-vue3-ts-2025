<template>
  <div>detial</div>
  <button @click="handleChildEvent">返回</button>
</template>

<script setup lang="ts"> 
  import {useRouter, useRoute} from 'vue-router'
  const router = useRouter();
  const { params, query } = useRoute(); 
  const handleChildEvent = () => {
    router.back(); //等同于router.go(-1) 或者 history.back()
  }

</script>
<style>

</style>