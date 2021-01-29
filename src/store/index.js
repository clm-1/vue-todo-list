import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
        time: '2021-01-26 18:11',
        isDone: false,
        isMoved: false,
      },
      {
        title: 'Another thing to do...',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        author: 'Ipsum Persson',
        time: '2021-01-26 19:46',
        isDone: false,
        isMoved: false,
      },
      {
        title: 'And a third one...',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
        author: 'Ipsum Persson',
        time: '2021-01-26 11:17',
        isDone: false,
        isMoved: false,
      },
      {
        title: 'How many things do I have to do?',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem sit amet.',
        author: 'Ipsum Persson',
        time: '2021-01-26 14:29',
        isDone: false,
        isMoved: false,
      },
    ],
  },
  mutations: {
    removeTodo(state, deleteTodo) {
      state.todos = state.todos.filter(todo => todo !== deleteTodo);
    },

    // Add or update todo
    // Used in both TodoForm and UpdateForm
    addUpdate(state, newTodo) {
      const today = new Date();
      const date = today.toLocaleDateString('sv-SE');
      const zero = today.getMinutes() < 10 ? 0 : '';
      const time = `${today.getHours()}:${zero}${today.getMinutes()}`
      newTodo.time = `${date} ${time}`;

      if (!newTodo.edited) {
        state.todos.unshift(newTodo);
      } else {
        const i = state.updateTodo.index;
        state.todos[i].title = newTodo.title;
        state.todos[i].desc = newTodo.desc;
        state.todos[i].author = newTodo.author;
        state.todos[i].time = `${newTodo.time} (Edited)`;
        state.updateTodo.index = -1;
      }
  
      window.scrollTo(0, 0);
    },

    // Mark/unmark todo as done
    // Move todo to bottom if done
    // If unmarked, move up (before first marked as "done")
    markAsDone(state, todoIndex) {
      let markedTodo = null;
      const markAndMove = () => {
        state.todos[todoIndex].isDone = !state.todos[todoIndex].isDone;
        markedTodo = state.todos.splice(todoIndex, 1);
      };

      let insertIndex = null;
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].isDone) {
          insertIndex = i;
          break;
        }
      }

      if (!state.todos[todoIndex].isDone) {
        markAndMove();
        state.todos.push(...markedTodo);
      } else {
        markAndMove();
        if (insertIndex === 0) {
          state.todos.unshift(...markedTodo);
        } else if (insertIndex) {
          state.todos.splice(insertIndex, 0, ...markedTodo);
        } else {
          state.todos.push(...markedTodo);
        }
      } 
    },

    // Move todo based on direction (set in component)
    // Indicate which todo is moved with css-class based on isMoved
    moveTodo(state, moveInfo) {
      const i = moveInfo.index;
      const iShift = moveInfo.direction === 'up' ? -1 : 1;

      const todoMover = () => {
        state.todos[i].isMoved = true;
          setTimeout(() => {
            state.todos[i + iShift].isMoved = false;
          }, 400);
        const todoToMove = state.todos.splice(i, 1);
        state.todos.splice(i + iShift, 0, ...todoToMove);
      };

      if (moveInfo.direction === 'up') {
        if (i > 0) {
          todoMover();    
        }
      } else if (i < state.todos.length - 1 && !state.todos[i + 1].isDone) {
          todoMover(); 
      }
    },

    // Sets updateTodo to track which todo to edit currently
    updateIndex(state, todoIndex) {
      state.updateTodo = {
        title: state.todos[todoIndex].title,
        desc: state.todos[todoIndex].desc,
        author: state.todos[todoIndex].author,
        index: todoIndex,
      };
    },

    // Insert todos from local storage to state.todos
    insertTodos(state) {
      const stored = JSON.parse(localStorage.getItem('todos'));
      stored.forEach(todo => { todo.isMoved = false });
      state.todos = stored;
    },

    // Sets the local storage to current todo-list each time it's updated
    // This is tracked from App.vue
    setStorage(state) {
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
})
