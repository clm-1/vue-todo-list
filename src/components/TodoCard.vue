<template>
  <div class="todo-card" :class="{ done: this.todo.isDone }">
    <div class="left">
      <h2 class="todo-title">{{ todo.title }}</h2>
      <p class="author">{{ todo.author }}</p>
      <p class="desc">{{ todo.desc }}</p>
      <p class="time">{{ todo.time }}</p>
    </div>

    <div class="right">
 
        <div class="todo-btn up" @click="moveUp"><span>+</span></div>
        <div class="todo-btn down" @click="moveDown"><span>-</span></div>
   
        <div class="todo-btn done-btn" @click="markAsDone"><span>Y</span></div>
        <div class="todo-btn remove" @click="removeTodo"><span>X</span></div>
    
    </div>

  </div>
</template>

<script>
export default {
  props: ['todo', 'index'],
  data() {
    return {
      
    }
  },
  methods: {
    removeTodo() {
      this.$store.commit('removeTodo', this.todo);
    },
    markAsDone() {
      this.$store.commit('markAsDone', this.index);
    },
    moveUp() {
      this.$store.commit('moveUp', this.index);
    },
    moveDown() {
      this.$store.commit('moveDown', this.index);
    }
  }
}
</script>

<style scoped>
  .todo-card {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: rgb(250, 249, 249);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.219);;
  }

  .left {
    padding: .4rem .7rem;
    width: 85%;
    border-radius: 10px 0 0 10px;
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 15%;
    align-items: center;
    justify-content: center;
    padding: .4rem;
  }

  .todo-title {
    margin-bottom: -.1rem;
    text-transform: capitalize;
    font-family: Arial, Helvetica, sans-serif
  }

  .author {
    font-weight: 600;
    position: relative;
    left: 2px;
    margin-bottom: .4rem;
  }

  .desc {
    position: relative;
    left: 2px;
    margin-bottom: .5rem;
    color: #222;
  }

  .time {
    position: relative;
    left: 2px;
    font-size: .9rem;
    color: #555;
  }

  .todo-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    margin: .2rem;
    padding: .1rem .4rem;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5px;
  }

  .todo-btn:active {
    transform: scale(1.05);
  }

  .done-btn {
    border: none;
    background-color: rgba(112, 211, 112, 0.699);
  }

  .remove {
    border: none;
    background-color: rgba(240, 91, 71, 0.582);
  }

  .done {
    
  }

  .done > .right > .done-btn {
    background-color: rgb(7, 158, 7);
  }

  .done > .left {
    
  }

  @media screen and (min-width: 600px) {
    .todo-card {
      display: flex;
      justify-content: space-between;
    }

    .left {
      width: 65%;
    }

    .right {
      width: 35%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .todo-btn {
      padding: .6rem 1rem;
      margin: .4rem;
      cursor: pointer;
      width: 40px;
    }
  }


</style>