import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [1, 2, 3],
  }),
  getters: {
    itemCount: (state) => state.items.length,
  },
  actions: {
    addItem(item) {
      this.items.push(item);
    },
  },
});
