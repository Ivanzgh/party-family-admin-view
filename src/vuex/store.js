import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    userInfo: {
      username: '',
      password: '',
      avatar: '',
      sex: '',
      desc: ''
    },
    token: ''
  },
  mutations: {
    'CHANGE_USERINFO'(state, payload) {
      state.userInfo = payload
    },
    'SET_TOKEN'(state, token) {
      state.token = token;
    },
    'DEL_TOKEN'(state) {
      state.token = '';
      sessionStorage.removeItem('token')
    }

  },
  actions: {},

  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key),
      },
    }),
  ],
})

export default store;
