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

    addUpdate(state, newTodo) {
      // Add or update todo
      // Function is used in both UpdateForm.vue and TodoForm.vue

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

    markAsDone(state, todoIndex) {
      // Mark/unmark a todo as "done"
      // Moves todo to bottom if marked as done, to top if unmarked

      let markedTodo = null;
      const markAndMove = () => {
        state.todos[todoIndex].isDone = !state.todos[todoIndex].isDone;
        markedTodo = state.todos.splice(todoIndex, 1);
      };

      if (state.todos[todoIndex].isDone === false) {
        markAndMove();
        state.todos.push(...markedTodo);
      } else {
        markAndMove();
        state.todos.unshift(...markedTodo);
      } 
    },

    moveTodo(state, moveInfo) {
      const i = moveInfo.index;
      const iShift = moveInfo.direction === 'up' ? -1 : 1;

      // Indicate the todo that has moved with css-class
      // Splice and insert todo to move it

      const todoMover = () => {
        state.todos[i].isMoved = true;
          setTimeout(() => {
            state.todos[i + iShift].isMoved = false;
          }, 400);
        const todoToMove = state.todos.splice(i, 1);
        state.todos.splice(i + iShift, 0, ...todoToMove);
      };

      // Check move-direction and if the todo is moveable (not first or last)

      if (moveInfo.direction === 'up') {
        if (i > 0) {
          todoMover();    
        }
      } else if (i < state.todos.length - 1 && !state.todos[i + 1].isDone) {
          todoMover(); 
      }
    },

    updateIndex(state, todoIndex) {
      // This function sets updateTodo to track which todo to edit currently

      state.updateTodo = {
        title: state.todos[todoIndex].title,
        desc: state.todos[todoIndex].desc,
        author: state.todos[todoIndex].author,
        index: todoIndex,
      };
    },

    resetUpdate(state, index) {
      // This function resets updateTodo to no todo

      if (state.updateTodo.index === index) {
        state.updateTodo.index = -1;
      } 
    },

    insertTodos(state) {
      // Insert todos from local storage to store.state

      const stored = JSON.parse(localStorage.getItem('todos'));
      stored.forEach(todo => { todo.isMoved = false });
      state.todos = stored;
    },

    setStorage(state) {
      // Sets the local storage to current todo-list each time it's updated
      // This is tracked from App.vue

      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
})
