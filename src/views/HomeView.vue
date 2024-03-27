<template>
  <div id="home">

    <div class="img-home">
      <img src="../assets/pngegg (10).png" alt="tripulação">
    </div>

    <div class="conteudo-home">
      <h1>One Piece</h1>
      <p>Conheça a tripulação do chapeu de palha </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',

}
</script>

<style scoped>
  #home {
    background-image: url('C:\Users\pedro\OneDrive\Documentos\github\tripulacao-one-piece\src\assets\d7a12cf1106ee202c717b2617d457b95.jpeg');
    background-position: center;
    background-position: 0 -100px;
    background-size: cover;
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: red;
  }

  .img-home img {
    height: 70%;
    width: 25%;
  }

  .conteudo-home {
    background-color: rgba(0, 0, 0, 0.432);
    padding: 20px;
    margin-right: 20px;
    border-radius: 10px;
  }

  .conteudo-home h1, p {
    color: aqua;
  }
</style>
