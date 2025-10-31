import { createStore } from 'vuex'

export default createStore({
  state: {
    signUpFormData: null,
  },
  getters: {
    getSignUpFormData(state){
      return state.signUpFormData;
    },
  },
  mutations: {
    updateSignUpFormData(state, payload){
      state.signUpFormData = payload
    },
  },
  actions: {

  },
  modules: {
  }
})
