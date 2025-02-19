<template>
  <div>message: {{message}}</div>
  <div>userInfo: {{userInfo}}</div>
  <div>userList: {{JSON.stringify(user.userList)}}</div>
  <button @click="getUserList">获取用户信息</button>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    data() {
      return {
        message: 'Hello Vue!'
      };
    },
    beforeCreate() {
      console.log('beforeCreate: 实例初始化之后');
    },
    created() {
      console.log('created: 实例创建完成');
    },
    beforeMount() {
      console.log('beforeMount: 挂载开始之前');
    },
    async mounted() {
      this.getUserList();
      // this.$store.dispatch('user/getUserList', { name: '张三' });
      console.log('mounted: 挂载到 DOM 完成');
    },
    beforeUpdate() {
      console.log('beforeUpdate: 数据更新之前');
    },
    updated() {
      console.log('updated: 数据更新之后，DOM 重新渲染');
    },
    // beforeDestroy() {// vue3 已废弃，使用 beforeUnmount 替代
    //   console.log('beforeDestroy: 组件销毁之前');
    // },
    // destroyed() { // vue3 已废弃，使用 unmounted 替代
    //   console.log('destroyed: 组件销毁完成');
    // },
    beforeUnmount() {
      console.log('beforeUnmount: 组件销毁之前');
    },
    unmounted() {
      console.log('unmounted: 组件销毁完成');
    },

    computed: {
      ...mapState('user', ['id', 'name']),
      
      ...mapState('user', {
        user: (state) => state
      }),
      /**
       * 获取当前用户信息
       * @returns {Object} 当前用户信息对象
       */
      user() {
        return this.$store.state.user;
      },

      userInfo() {
        // const parameter = mapState('user', ['id', 'name']);
        const {id, name} = this.user;
        return `${name} (${id})`;
        // return `${this.name} (${this.$store.state.user.id})`;
      },
    },

    methods: {
      ...mapActions('user', ['queryUserList']),
      getUserList() {
        this.queryUserList({ name: '张三' });
        // 直接调用action
        // this.$store.dispatch('user/getUserList', { name: '张三' });
        // 直接调用mutation
        // this.$store.commit('user/setUserName', { name: '李四' })
      },
    },
  };
</script>