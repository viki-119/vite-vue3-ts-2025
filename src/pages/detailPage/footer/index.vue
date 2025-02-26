<script setup lang='ts'>
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
const handleInput = (value: string) => {
  emits('update:modelValue', value)
}
</script>

<template>
    <el-input :model-value='modelValue' @input='handleInput' />
</template>

<style scoped></style>