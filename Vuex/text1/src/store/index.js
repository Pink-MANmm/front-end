import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    showNum(state) {
      return '当前最新的数量是[' + state.count + ']'
    }
  },
  // 只有mutations中定义的函数，才有权利修改state中的数据的权利
  mutations: {
    add(state) {
      // 不要再mutations函数中，执行异步操作
      // setTimeout(() => { state.count++ }, 1000)
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在actions中，不能直接修改state中的数据
        // 必须通过context.commit来触发某个mutation才可以
        context.commit('add')
      }, 1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        // 在actions中，不能直接修改state中的数据
        // 必须通过context.commit来触发某个mutation才可以
        context.commit('addN', step)
      }, 1000)
    }
  },
  modules: {
  }
})
