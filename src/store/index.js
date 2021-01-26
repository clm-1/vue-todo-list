import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Todo title 1',
        desc: 'Description',
        author: 'Ipsum Persson',
        time: null,
      },
      {
        title: 'Todo title 2',
        desc: 'Description',
        author: 'Ipsum Persson',
        time: null,
      },
      {
        title: 'Todo title 3',
        desc: 'Description',
        author: 'Ipsum Persson',
        time: null,
      },
      {
        title: 'Todo title 4',
        desc: 'Description',
        author: 'Ipsum Persson',
        time: null,
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
