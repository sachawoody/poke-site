<template>
  <Navbar />
  <!-- <Team /> -->
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Team from './components/Team.vue'
export default {
  components: { Navbar, Team },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  },
}

</script>

<style>

/* @font-face {
  font-family: 'Pokemon Font';
  font-style: normal;
  font-weight: normal;
  src: local('Pokemon Font'), url('pokefont.ttf') format('tff');
}

body {
  font-family: Pokemon Font;

} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
