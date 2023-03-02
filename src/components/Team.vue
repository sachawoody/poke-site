<template>
  <div class="team">
    <h2>Team</h2>
    <ul>
      <li v-for="(pokemon, index) in team" :key="index">
        <span>{{ pokemon.name }}</span>
        <button @click="removePokemon(index)">Remove</button>
        <button @click="moveUp(index)" :disabled="index === 0">Move Up</button>
        <button @click="moveDown(index)" :disabled="index === team.length - 1">
          Move Down
        </button>
      </li>
    </ul>
    <div v-if="team.length === 0">No pokemon in team</div>
    <div v-else-if="team.length >= 6">Team is full</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  components: {},
  setup() {
    const team = ref([
      { name: "Pikachu" },
      { name: "Charizard" },
      { name: "Pikachu" },
      { name: "Moi" },
    ]);
    const pokemonList = ref([
      { name: "Pikachu" },
      { name: "Charizard" },
      { name: "Pikachu" },
      { name: "Moi" },
    ]);

    const selectedPokemon = ref(null);

    const addPokemon = () => {
      if (selectedPokemon.value && team.value.length < 6) {
        team.value.push(selectedPokemon.value);
        selectedPokemon.value = null;
      }
    };

    const removePokemon = (index) => {
      team.value.splice(index, 1);
    };

    const moveUp = (index) => {
      const temp = team.value[index];
      team.value[index] = team.value[index - 1];
      team.value[index - 1] = temp;
    };

    const moveDown = (index) => {
      const temp = team.value[index];
      team.value[index] = team.value[index + 1];
      team.value[index + 1] = temp;
    };

    return {
      team,
      selectedPokemon,
      pokemonList,
      addPokemon,
      removePokemon,
      moveUp,
      moveDown,
    };
  },
};
</script>

<style scoped>
.team {
  position: fixed;
  right: 0;
  width: 350px;
  height: 70vh;
  background: #ddd;
  border-radius: 10px;
}

.team h1 {
  text-align: center;
}

.team p {
  text-align: start;
}
</style>
