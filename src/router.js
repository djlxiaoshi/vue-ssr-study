// router.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// 按需加载
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/home', component: () => import('./components/Home.vue') },
      { path: '/about', component: () => import('./components/About.vue') }
    ]
  })
}
