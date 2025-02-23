<template>
  <div >
    <div class="child-Item-container">
      <el-select
        v-model="roleType"
        placeholder="请选择角色类型"
        class="role-select"
        clearable
        filterable
        @change="handleRoleChange"
        >
        <ElOption 
          v-for="val in roleList"
          :key="val"
          :value="val"
          :label="val"
        />
      </el-select>
      <ChildItem v-for="item in userList" :key="item.id" :userInfo="item" :name="item.name"
      @callFromChild="handleChildEvent" >
        <template #header="slotProps">
          <div>头部{{ slotProps.userInfo.id}}</div>
        </template>
        <template #footer>
          <div>底部</div>
        </template>
      </ChildItem>
    </div>

    <div :class="$style.myText">
      <div :class="$style.myXX">xxxx</div>
    </div>
    <div class="myText" @click.capture="handleParent">
      <div>你好</div>
      <div class="myXX" @click="handleChild">yyyy</div>
    </div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://vite.dev" target="_blank">
      你好，Vite + Vue!
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'
  import ChildItem from '@/pages/homePage/item/index.vue'
  import { ListItemType } from './item/types'

  const { state, dispatch } = useStore();
  const router = useRouter();
  dispatch('user/queryUserList'); // 调用action方法查询用户列表
  const roleType = ref<string>('');
  const userList = computed(() => {
    return state.user.userList.filter((item) => {
      return roleType.value ? item.role === roleType.value : true;
    });
  });

  const handleParent = () => {
    console.log('父组件');
  }

  const handleChild = () => {
    console.log('子组件');
  }

  const roleList = computed(() => {
    const tmpArr: string[] = state.user.userList.map((item: ListItemType): string => item.role);
    return Array.from(new Set(tmpArr));
  })

  const handleRoleChange = (role) => {
    roleType.value = role;
  }

  const handleChildEvent = (userInfo) => {
    router.push({ path: `/detail/${userInfo.id}`, query: { name: userInfo.name } });
  }

</script>

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
    align-items: center;

    .role-select {
      margin: 0 30px;
    }
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
