<template>
  <div class="qiankun-state-demo">
    <h2>乾坤状态通信示例</h2>

    <div class="state-container">
      <h3>当前全局状态：</h3>
      <pre>{{ JSON.stringify(globalState, null, 2) }}</pre>
    </div>

    <div class="actions">
      <h3>更新全局状态：</h3>
      <el-form>
        <el-form-item label="Key">
          <el-input v-model="stateKey" placeholder="输入状态的键" />
        </el-form-item>
        <el-form-item label="Value">
          <el-input v-model="stateValue" placeholder="输入状态的值" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateGlobalState"
            >更新全局状态</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <div class="state-history">
      <h3>状态变更历史：</h3>
      <ul>
        <li v-for="(item, index) in stateHistory" :key="index">
          {{ item.timestamp }}: {{ JSON.stringify(item.state) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useQiankunState } from "../hooks/useQiankunState";
import { getEventBus } from "@/utils/eventBus";

const { globalState, setGlobalState } = useQiankunState();
const stateKey = ref("");
const stateValue = ref("");
const stateHistory = ref([]);

// 监听全局状态变化
watch(
  globalState,
  (newState) => {
    stateHistory.value.push({
      timestamp: new Date().toLocaleTimeString(),
      state: { ...newState },
    });

    // 只保留最近的10条记录
    if (stateHistory.value.length > 10) {
      stateHistory.value.shift();
    }
  },
  { deep: true },
);

// 更新全局状态
const updateGlobalState = () => {
  if (stateKey.value) {
    const eventBus = getEventBus();
    eventBus.emit("subapp:message", { name: "子应用" });
    setGlobalState({
      [stateKey.value]: stateValue.value,
    });
    stateKey.value = "";
    stateValue.value = "";
  }
};
</script>

<style scoped>
.qiankun-state-demo {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 20px 0;
}

.state-container {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

pre {
  white-space: pre-wrap;
  word-break: break-all;
}

.actions {
  margin-bottom: 20px;
}

.state-history {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 5px;
}

.state-history ul {
  list-style-type: none;
  padding: 0;
}

.state-history li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
</style>
