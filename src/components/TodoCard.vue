<template>
  <div class="todo-card" :class="{ done: this.todo.isDone }">
    
    <div class="check-box-wrapper" @click="markAsDone">
      <div class="check-box">
        <img src="../assets/check.png" alt="">
      </div>
    </div>

    <div class="info-box">
        <h2 class="todo-title">{{ todo.title }}</h2>
        <p class="desc">{{ todo.desc }}</p>
        <div class="name-date">
          <span class="author">{{ todo.author }}</span>
          <span class="time">{{ todo.time }}</span>
        </div>  
    </div>

    <div class="button-box">
        <div class="todo-btn up" @click="moveUp"><span>U</span></div>
        <div class="todo-btn down" @click="moveDown"><span>D</span></div>
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
    margin: .1rem;
    padding: .8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }

  .info-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
  }

  .button-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15%;
  }

  .check-box-wrapper {
    display: flex;
    width: 10%;
    justify-content: flex-start;
    align-items: center;
    margin-right: .5rem;
  }

  .check-box {
    position: relative;
    width: 30px;
    height: 30px;
    border: 1px solid black;
    cursor: pointer;
  }

  .check-box > img {
    display: none;
    position: absolute;
    bottom: .3rem;
    left: .2rem;
    width: 100%;
    transform: scale(1.2);
  }

  .todo-title {
    font-size: 1.1rem;
    letter-spacing: .05rem;
    margin-bottom: .1rem;
    font-family: 'Courier New', Courier, monospace
  }

  .author {
    color: #555;
    font-weight: 500;
    font-size: .9rem;
    font-family: monospace;
    margin-bottom: .4rem;
    margin-right: .5rem;
  }

  .desc {
    font-family: monospace;
    font-size: 1rem;
    margin-bottom: .4rem;
    color: #222;
  }

  .time {
    font-family: monospace;
    font-size: .8rem;
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
    border-radius: 5px;
  }

  .done > div > .check-box > img {
    display: initial;
  }

  @media screen and (min-width: 600px) {
    .todo-card {
      display: flex;
      margin: .1rem 1.4rem;
    }


    .check-box-wrapper {
      margin-right: 0;
    }

    .button-box {
      margin-left: auto;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }


</style>