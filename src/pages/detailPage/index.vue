<template>
  <div>detial</div>
  <ElButton @click="handleChildEvent">自动导入ElButton返回</ElButton>
  <span>firstName</span>

  <el-row>
    <el-col :span="12">
      <el-input prefix-icon="firstName" v-model="firstName" placeholder="请输入">
        <template #prepend>firstName</template>
      </el-input>
    </el-col>
    <el-col :span="12">
      <div>{{ firstName }}</div>
    </el-col>
  </el-row>
  <br />
  <el-row>
    <el-col :span="12">
      <FormElement v-model:parentValueOne="formNameOne" v-model:parentValueTwo="formNameTwo" />
    </el-col>
    <el-col :span="12">
      <div>{{ lastName }}</div>
    </el-col>
  </el-row>
  <br />

  <el-row>
    <el-col :span="12">
      <div>{{ fullName }}</div>
    </el-col>
  </el-row>

  <el-button @click="handleChildEvent">自动导入el-button返回</el-button>

  <el-row>
    <el-col :span="12">
      <FooterElement v-model="footerOne" />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import {
  ref, reactive, computed, watch, useAttrs, useSlots,
  // defineExpose, defineEmits
} from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import FormElement from './form/index.vue'
import FooterElement from './footer/index.vue'

// useAttrs();
const router = useRouter();
const store = useStore();
const { params, query } = useRoute();

const firstName = ref(store.state.userDetail.name);
const lastName = ref('');
const formNameOne = ref('');
const formNameTwo = ref('');
const footerOne = ref('');

// watch(lastName, (newLastName, oldLastName) => {
// })
const stop = watch(
  [firstName, lastName], // 监听多个 ref
  async ([newFirst, newLast], [oldFirst, oldLast]) => {
    store.dispatch('userDetail/saveUserInfo', { name: firstName });
    console.log(`全名从 ${oldFirst} ${oldLast} 变为 ${newFirst} ${newLast}`)
  }
)
// stop(); // 停止观察

// 计算属性，依赖响应式应用 纯函数
// const fullName = computed(() => {
//   return firstName.value + lastName.value;
// })

const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`;
  },
  set(newVal) {
    // 当修改 fullName 时，拆分并更新 firstName 和 lastName
    const [first, last] = newVal.split(' ')
    firstName.value = first;
    lastName.value = last;
  }
})

const handleChildEvent = () => {
  store.dispatch('userDetail/saveUserInfo', { name: firstName });
  router.back(); //等同于router.go(-1) 或者 history.back()
}
</script>
<style></style>