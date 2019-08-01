// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
export function createStore () {
  return new Vuex.Store({
    state: {
      data: {}
    },
    actions: {
      getData ({ commit }, key) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return axios.get('https://easy-mock.com/mock/5cc3ce1b928aac6b3a70b2a6/data/getData').then(data => {
          const value = data.data.name;
          commit('setData', { key, value })
        })
      }
    },
    mutations: {
      setData (state, { key, value }) {
        Vue.set(state.data, key, value)
      }
    }
  })
}
