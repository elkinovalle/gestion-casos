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
    login: 'login',
    users: [],
    preguntas: [],
    preguntasReconocimiento:[]
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
    SET_PREGUNTAS_RECONOCIMIENTO (state, newPreguntaReconocimiento) {
      state.preguntasReconocimiento = newPreguntaReconocimiento
    },
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
