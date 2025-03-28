<script setup lang="ts">
import { computed, ref } from "vue";
import { useCartStore } from "@/piniaStore/index";

const cartStore = useCartStore();
cartStore.items[0] = 999;
cartStore.addItem({ id: 1, name: "apple", price: 10 });
</script>

<template>
  <div v-for="val in cartStore.items">
    {{ val }}
  </div>
</template>

<style scoped></style>
