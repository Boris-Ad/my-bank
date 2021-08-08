import requestAxios from "../../axios/request";
import store from '../index'

export default {
  namespaced: true,
  state() {
    return {
        requests:[]
    };
  },
  getters:{
    requests(state){
        return state.requests
    }
  },
  mutations:{
    setRequests(state,requests){
        state.requests = requests
    },
    addRequest(state,request){
        state.requests.push(request)
    }
  },
  actions:{
    async create({commit,dispatch},payload){
        try {
            const { data } = await requestAxios.post('/request.json?auth=' + store.getters['auth/token'],payload)
            commit('addRequest',{...payload,id:data.name})
            dispatch('setMessage',{
                value:'Order created',
                type:'primary'
            },{root:true})
        } catch (err) {
            dispatch('setMessage',{
                value:err.message,
                type:'danger'
            },{root:true})
        }
    },
    async load({commit,dispatch}){
        try {
            const { data } = await requestAxios.get('/request.json?auth=' + store.getters['auth/token'])
            const response = Object.keys(data).map(id => ({...data[id],id}))
            commit('setRequests',response)
          } catch (err) {
            dispatch('setMessage',{
                value:err.message,
                type:'danger'
            },{root:true})
        }
    }
  },

};
