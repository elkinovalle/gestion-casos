import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'principal-layout',
    users: [],
    preguntas: [],
  },
  mutations: {
    SET_LAYOUT (state, newLayout) {
      state.layout = newLayout
    },
    SET_USERS (state, newUser) {
      state.users = newUser
    },
    SET_PREGUNTAS (state, newPregunta) {
      state.preguntas = newPregunta
    },
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
