import { ref } from 'vue'

const getPokedex = () => {

  const list = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      if (!data.ok) {
        throw Error('no available data')
      }
      list.value = await data.json()


    }
    catch (err) {
      error.value = err.message
    }
  }

  return { list, error, load }
}

export default getPokedex