import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curPage: '首页'
  },
  modules: {
    tab
  },
  mutations:{
    changePage(state, data){
      state.curPage = data
    }
  }
})