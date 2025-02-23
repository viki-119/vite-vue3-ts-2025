<template>
  <div>detial</div>
  <ElButton @click="handleChildEvent">自动导入ElButton返回</ElButton>
  <el-input v-model="modeValue" />
  <div>{{ modeValue }}</div>
  <br />
  <FormElement v-model:inputValue="modelInput" />
  <div>{{ modelInput }}</div>
  <el-button @click="handleChildEvent">自动导入el-button返回</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import FormElement from './form/index.vue'

const router = useRouter();
const store = useStore();
const { params, query } = useRoute();
const modeValue = ref(store.state.userDetail.name);
const modelInput = ref('');

const handleChildEvent = () => {
  store.dispatch('userDetail/saveUserInfo', { name: modeValue });
  router.back(); //等同于router.go(-1) 或者 history.back()
}
</script>
<style></style>