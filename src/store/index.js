import { createStore } from 'vuex'

export default createStore({
  state: {
    search_word: '',
  },
  getters: {
  },
  mutations: {
    setSearch_word(state, sw) {
      state.search_word = sw
    },
  },
  actions: {
  },
  modules: {
  }
})
