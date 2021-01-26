import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Todo title 1',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
      },
      {
        title: 'Todo title 2',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum culpa atque, totam optio suscipit nam et rem excepturi,',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
      },
      {
        title: 'Todo title 3',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
      },
      {
        title: 'Todo title 4',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum culpa atque,',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
      },
    ]
  },
  mutations: {
    removeTodo(state, deleteTodo) {
      state.todos = state.todos.filter(todo => todo !== deleteTodo);
    },
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    markAsDone(state, todoIndex) {
      if (state.todos[todoIndex].isDone === false) {
        state.todos[todoIndex].isDone = !state.todos[todoIndex].isDone;
        const moveToBottom = state.todos.splice(todoIndex, 1);
        state.todos.push(...moveToBottom);
      } else {
        state.todos[todoIndex].isDone = !state.todos[todoIndex].isDone;
      } 
    },
    moveUp(state, todoIndex) {
      if (todoIndex > 0) {
        const todoUp = state.todos.splice(todoIndex, 1);
        state.todos.splice(todoIndex - 1, 0, ...todoUp);
      }
    },
    moveDown(state, todoIndex) {
      if (todoIndex < state.todos.length) {
        const todoDown = state.todos.splice(todoIndex, 1);
        state.todos.splice(todoIndex + 1, 0, ...todoDown);
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
