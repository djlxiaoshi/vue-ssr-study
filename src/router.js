// router.js
import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(Router);

// 按需加载
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import(/* webpackChunkName: "home" */ './components/Home.vue') },
      { path: '/about', component: () => import(/* webpackChunkName: "about" */ './components/About.vue') }
    ]
  })
}
