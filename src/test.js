// import Vue from 'vue';
// import App from './App.vue';
// import Router from 'vue-router'
//
// Vue.use(Router);
//
// const router =  new Router({
//     mode: 'history',
//     routes: [
//         { path: '/', component: import(/* webpackChunkName: "home" */'./components/Home.vue') },
//         { path: '/about', component: () => import(/* webpackChunkName: "about" */'./components/About.vue') }
//     ]
// });
//
// const app = new Vue({
//     router,
//     render: h => h(App)
// });

import { createApp } from './app'

// 客户端特定引导逻辑……

const { app, router, store } = createApp();


router.onReady(() => {

    // 这里假定 App.vue 模板中根元素具有 `id="app"`
    app.$mount('#app');
});