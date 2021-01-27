<template>
  <div class="todo-card" :class="{ done: this.todo.isDone, moved: this.todo.isMoved }">
    
    <div class="check-box-wrapper" >
      <div class="check-box" @click="markAsDone">
        <img src="../assets/check.png" alt="todo checkbox">
      </div>
      <div class="update-btn">
        <img src="../assets/edit.png" alt="edit button" @click="updateIndex">
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

    <div class="update-form">

    </div>

    <div class="button-box">
        <div class="todo-btn up" @click="moveUp"><img src="../assets/up.png" alt=""></div>
        <div class="todo-btn down" @click="moveDown"><img src="../assets/down.png" alt=""></div>
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
    },
    updateIndex() {
      this.$store.commit('updateIndex', this.index);
      this.$router.push('/update-todo');
    }
  }
}
</script>

<style scoped>
  .todo-card {
    margin: .1rem;
    padding: .5rem .8rem;
    min-height: 105px;
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
    position: relative;
    top: .2rem;
    display: flex;
    width: 10%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: .6rem;
  }

  .check-box {
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
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
    font-size: .9rem;
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
    margin: 0 .2rem;
    cursor: pointer;
  }

  .remove {
    font-size: 1.3rem;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    width: 20px;
    display: flex;
    justify-content: center;
    margin-top: .8rem;
    opacity: .8;
  }

  .down,
  .up {
    width: 20px;
    margin-top: .3rem;
  }

  @keyframes flash {
    0% { background-color: initial; }
    20% { background-color: rgba(209, 203, 191, 0.167); }
    100% {background-color: initial; }
  }

  .moved {
    animation-name: flash;
    animation-duration: .4s;
  }

  .down:active,
  .up:active,
  .remove:active {
    transform: scale(1.2);
  }

  .down > img,
  .up > img {
    width: 100%;
    opacity: .7;
  }

  .done > div > .check-box > img {
    display: initial;
  }

  .update-btn {
    cursor: pointer;
    position: relative;
    left: .05rem;
    width: 1.6rem;
    margin-top: .6rem;
  }

  .update-btn > img {
    width: 100%;
  }
  
  .done > .info-box * {
    color: #777;
  }


  @media screen and (min-width: 600px) {
    .todo-card {
      display: flex;
      margin: .1rem 1.4rem;
    }

    .todo-title {
      font-size: 1.1rem;
    }

    .check-box-wrapper {
      margin-right: 0;
    }

    .info-box {
      margin-right: .8rem;
    }

  }

  @media screen and (min-width: 700px) {
    .button-box {
      margin-left: auto;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }

    .remove {
      font-size: 1.5rem;
      margin-left: 1.5rem;
      margin-top: 0;
    }

    .down,
    .up {
      margin-top: 0;
      width: 20px;
    }

    .down > img,
    .up > img {
      width: 100%;
      opacity: .8;
    }
  }


</style>