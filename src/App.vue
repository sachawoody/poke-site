<template>
  <Navbar />
  <!-- <Team /> -->
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Team from './components/Team.vue'
export default {
  components: { Navbar, Team } ,
  props: {
    pokemons: {
      type: String,
    },
  } 
}

</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
