import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    updateIndex: null,
    update: false,
    updateTodo: {
      title: '',
      desc: '',
      author: '',
      index: -1,
    },
    todos: [
      {
        title: 'This is the first thing I need to do',
        desc: 'Lorem ipsum dolor, sit amet consectetur.',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
        isMoved: false,
      },
      {
        title: 'Another thing to do...',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
        isMoved: false,
      },
      {
        title: 'And a third one...',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
        isMoved: false,
      },
      {
        title: 'How many things do I have to do?',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem sit amet.',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:07',
        isDone: false,
        isMoved: false,
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
        const moveToTop = state.todos.splice(todoIndex, 1);
        state.todos.unshift(...moveToTop);
      } 
    },
    moveUp(state, todoIndex) {
      if (todoIndex > 0) {
        state.todos[todoIndex].isMoved = true;
        setTimeout(() => {
          state.todos[todoIndex - 1].isMoved = false;
        }, 400);

        const todoUp = state.todos.splice(todoIndex, 1);
        state.todos.splice(todoIndex - 1, 0, ...todoUp);
      }
    },
    moveDown(state, todoIndex) {
      if (todoIndex < state.todos.length - 1) {
        state.todos[todoIndex].isMoved = true;
        setTimeout(() => {
          state.todos[todoIndex + 1].isMoved = false;
        }, 400);

        const todoDown = state.todos.splice(todoIndex, 1);
        state.todos.splice(todoIndex + 1, 0, ...todoDown);
      }
    },
    updateIndex(state, todoIndex) {
      state.updateTodo = {
        title: state.todos[todoIndex].title,
        desc: state.todos[todoIndex].desc,
        author: state.todos[todoIndex].author,
        index: todoIndex,
      };
    },
    resetUpdate(state) {
      state.updateTodo.index = -1;
    }
  },
  actions: {
  },
  modules: {
  }
})
