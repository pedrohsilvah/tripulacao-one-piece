<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'


export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
