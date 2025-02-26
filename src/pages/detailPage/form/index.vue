<template>
  <span>lastName:</span>
  <input type="text" :value="parentValueOne" @input="handleClick" />
  <el-input :model-value="parentValueTwo" @input="handleElClick" />
  <div>{{ parentValueOne }}-{{ parentValueTwo }}</div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
// const props = defineProps<{
//   parentValueOne: string;
//   parentValueTwo: string;
// }>()
const props = defineProps(['parentValueOne', 'parentValueTwo'])
const emit = defineEmits(['update:parentValueOne', 'update:parentValueTwo'])
const handleClick = (event) => {
  emit('update:parentValueOne', event.target.value)
}
const handleElClick = (value) => {
  emit('update:parentValueTwo', value)
}
</script>

<style scoped></style>