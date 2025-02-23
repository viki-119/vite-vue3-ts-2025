<template>
  <input type="text" :value="inputValue" @input="handleClick" />
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps<{
  inputValue: string;
}>()
const emit = defineEmits(['update:inputValue'])
const handleClick = (event) => {
  emit('update:inputValue', event.target.value)
}
</script>

<style></style>