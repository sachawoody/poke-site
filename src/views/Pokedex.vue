<template>
  <div v-if="error">{{ error }}</div>
  <h1>Pokédex</h1>

  <!-- Search for pokemons -->
  <input type="text" v-model="search" placeholder="Search for a pokemon...">
  <p>Searching for: {{ search }}</p>

  <!-- Display pokedex -->
  <div class="pokedex" v-if="inputEmpty">
    <div v-for="pokemon in filteredList" :key="pokemon.id" :class="'pokemon-' + pokemon.name + ' pokemon'">
      <Pokemon :pokemon="pokemon" />
    </div>
  </div>

  <!-- Display pokemon matching search -->
  <div v-else class="search-pokedex">
    <p>Number of match: {{ filteredList.length }}</p>
    <div class="pokedex">
      <div v-for="(pokemon) in filteredList" :key="pokemon.id" :class="'pokemon-' + pokemon.name + ' pokemon'">
        <Pokemon :pokemon="pokemon" />
      </div>
    </div>


  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import getPokedex from '@/composables/getPokedex'
import { useRoute } from 'vue-router'
import Pokemon from '@/components/Pokemon.vue'


export default {

  props: ['id'],
  components: {Pokemon},
  setup(props) {
    const route = useRoute()
    const { error, list, load } = getPokedex(route.params.id)
    load()

    const search = ref('')
    const inputEmpty = ref(true)

    const filteredList = ref([])

    watch(list, () => {
      if (list.value && list.value.results) {
        filteredList.value = list.value.results.map((pokemon, index) => ({
          ...pokemon,
          id: index + 1
        }))
      }
    })

    const computedFilteredList = computed(() => {
      if (!search.value) {
        inputEmpty.value = true
        return filteredList.value
      } else {
        inputEmpty.value = false
        if (search.value.length > 2) {
          const newList = filteredList.value.filter(pokemon => pokemon.name.toLowerCase().includes(search.value.toLowerCase()))
          return newList
        } else {
          inputEmpty.value = true
          return filteredList.value
        }

      }
    })

    return { error, list, search, inputEmpty, filteredList: computedFilteredList }
  }
}
</script>

<style scoped>
.pokedex {
  display: grid;
  grid-template-areas:
    "poke1 poke2 poke3"
    "poke1 poke2 poke3";
  gap: 15px;
  width: 90%;
  justify-content: center;
}

.pokemon {
  background: #ddd;
  color: #444;
  border-radius: 10px;
  font-size: 16px;
}



a {
  color: #333;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
</style>