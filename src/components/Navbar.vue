<template>
  <nav>

    <div id="div-logo">
      <router-link to="/" class="logo">
          <img src="" alt="logo">
      </router-link>
    </div>
    
    <div id="div-option">
      <router-link to="/">Home</router-link> |
      <router-link to="/tripulacao">Tipulação</router-link> |
      <router-link to="/contato">Contato</router-link>
    </div>

  </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

</style>