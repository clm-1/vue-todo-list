import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'This is the first thing I need to do',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
      },
      {
        title: 'Another thing to do...',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
      },
      {
        title: 'And a third one...',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
      },
      {
        title: 'How many things do I have to do?',
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
