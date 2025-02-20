<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'
  import ChildItem from '@/pages/homePage/item/index.vue'
  const { state, dispatch } = useStore();
  const router = useRouter();

  dispatch('user/queryUserList'); // 调用action方法查询用户列表

  const userList = computed(() => state.user.userList);
  const handleChildEvent = (userInfo) => {
    router.push({ path: `/detail/${userInfo.id}`, query: { name: userInfo.name } });
  }

</script>

<template>
  <div >
    <div class="child-Item-container">
      <ChildItem v-for="item in userList" :key="item.id" :userInfo="item" :name="item.name" @callFromChild="handleChildEvent"></ChildItem>
    </div>
    <a href="https://vite.dev" target="_blank">
      你好，Vite + Vue!
    </a>
    <div :class="$style.myText">
      <div :class="$style.myXX">xxxx</div>
    </div>
    <div class="myText">
      <div class="myXX">yyyy</div>
    </div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style module>
  .myText {
    color: green;
  }

  .myXX {
    color: brown;
  }
</style>

<style lang="scss">
  .child-Item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .myText {
    .myXX {
      color: red;
    }
  }
</style>

<style lang="scss" scoped>
  @use './style.module.scss'; // 引入样式文件
</style>
