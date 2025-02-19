import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';
import '@/styles/style.css';

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');