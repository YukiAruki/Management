import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curPage: '首页',
    userProfile:{}
  },
  modules: {
    tab
  },
  mutations:{
    changePage(state, data){
      state.curPage = data
    },
    userProfile(state, data){
      state.userProfile = data
    }
  }
})