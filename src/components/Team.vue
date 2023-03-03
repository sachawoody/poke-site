<template>
  <div v-if="pokeTeam.length">
    <h2>My team</h2>
    <ul>
      <li v-for="pokemon in pokeTeam" :key="pokemon.id" :item="pokemon">
        <p>{{ pokemon.name }}</p>
        <img :src="
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
          pokemon.id +
          '.png'
        " :alt="pokemon.name" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokeTeam: [
      ]
    }
  },
  props: {
    pokemons: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addPokemon(e) {
      console.log(e)
      this.pokeTeam.push(e);
    }
  },

};
</script>

<style></style>
