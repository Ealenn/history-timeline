import Vue from 'vue'
import Vuex from 'vuex'
import En from './content/content.en'
import Fr from './content/content.fr'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Content: En,
    Lang: 'en'
  },
  mutations: {
    CHANGE_LANG(state, lang) {
      switch(lang) {
        case 'fr': state.Content = Fr; break;
        case 'en': state.Content = En; break;
        default:
          return;
      }
      state.Lang = lang
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    sections: state => {
      return state.Content
    },
    lang: state => {
      return state.Lang
    }
  }
})
