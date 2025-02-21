import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css'
import '@/styles/style.css';

import App from './App.vue';

const app = createApp(App);
app.use(router); // 注册路由
app.use(store); // 注册vuex
// app.use(ElementPlus); // 注册element-plus组件库
app.mount('#app');