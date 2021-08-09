import { createStore } from 'vuex'
import auth from './modules/auth.module'
import request from './modules/request.module'

export default createStore({
  state(){
    return{
      message:null,
      sidebar:false
    }
  },
  getters:{
    message(state){
      return state.message
    }
  },
  mutations: {
    setMessage(state,message){
      state.message = message
    },
    clearMessage(state){
      state.message = null
    },
    openSidebar(state){
      state.sidebar = true
    },
    closeSidebar(state){
      state.sidebar = false
    }
  },
  actions: {
    setMessage({commit},message){
      commit('setMessage',message)
      setTimeout(() => commit('clearMessage'),6000)
    }
  },
  modules: {
    auth,
    request
  }
})
