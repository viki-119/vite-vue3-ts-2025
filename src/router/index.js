import {createRouter, createWebHashHistory} from 'vue-router';

const Home = () => import('@/pages/homePage/index.vue');
const Demo = () => import('@/pages/demo/index.vue');

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {
            path: '/demo',
            name: 'Demo',
            component: Demo
        }
    ],
});

