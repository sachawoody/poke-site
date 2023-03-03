<template>
  <div v-if="error">{{ error }}</div>
  <PokemonDetails :pokemon="pokemon" :error="error" />
</template>
  
<script>
import PokemonDetails from "../components/PokemonDetails.vue";
import getPokemon from "../composables/getPokemon";
import { useRoute } from "vue-router";

// component imports

export default {
  props: ["id"],
  components: { PokemonDetails },
  setup(props) {
    const route = useRoute();
    const { error, pokemon, load } = getPokemon(route.params.id);
    load();
    return { error, pokemon };
  },
};
</script>
  
<style scoped>
</style>