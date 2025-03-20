import { computed, getCurrentInstance } from "vue";
import { useStore } from "vuex";

export function useQiankunState() {
  const store = useStore();
  const { proxy } = getCurrentInstance();

  // 获取全局状态
  const globalState = computed(() => store.state.globalState.globalState);

  // 更新全局状态
  const setGlobalState = (state: Record<string, any>) => {
    store.dispatch("globalState/updateGlobalState", state);
  };

  return {
    globalState,
    setGlobalState,
  };
}
