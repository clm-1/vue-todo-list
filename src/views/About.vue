<template>
  <div class="about">

    <h2>{{ title }}</h2>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum culpa atque, totam optio suscipit nam et rem excepturi, molestiae laudantium ratione aliquam officia esse vitae nesciunt incidunt sit! Libero beatae error commodi veniam quos magnam voluptatem odit veritatis natus facere culpa tenetur earum voluptas amet iste non, quae esse architecto.</p>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum culpa atque, totam optio suscipit nam et rem excepturi, molestiae laudantium ratione aliquam officia esse vitae nesciunt incidunt sit! Libero beatae error commodi veniam quos magnam voluptatem odit.</p>

    <p class="sign">Ipsum Andersson</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'About',
    }
  }
}
</script>

<style scoped>
  .about {
    max-width: 620px;
    margin: .1rem auto;
    padding: 0 .5rem;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 3rem;
    text-decoration: underline;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.5;
    font-family: monospace;
    margin-bottom: 1.4rem;
  }

  .sign {
    font-weight: bold;
    text-align: right;
    margin-right: 1rem;
    margin-top: 3rem;
  }

  @media screen and (min-width: 330px) {
    h2 {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 400px) {
    h2 {
      font-size: 1.4rem;
    }
  } 
</style>