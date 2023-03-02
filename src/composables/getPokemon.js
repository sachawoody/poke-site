import { ref } from 'vue'

const getPokemon = (id) => {

  const pokemon = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      if (!data.ok) {
        throw Error(`${id} not found`)
      }
      pokemon.value = await data.json()


    }
    catch (err) {
      error.value = err.message
    }
  }

  return { pokemon, error, load }
}

export default getPokemon