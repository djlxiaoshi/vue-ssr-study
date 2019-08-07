import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';

export function createApp (context) {

  // 创建 router 实例
  const router = createRouter();

  // 创建store 实例
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  // 返回 app 和 router
  return { app, router, store }
}
