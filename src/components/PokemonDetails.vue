<template>
  <!-- display pokemon infos -->
  <div v-if="pokemon">
    <div v-if="pokemon" class="pokemon">
      <h2>
        {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
      </h2>
      <div class="details">
        <div class="apparence">
          <p>Number: {{ pokemon.id }}</p>
          <p>Height: {{ pokemon.height / 0.1 }} cm</p>
          <p>Weight: {{ pokemon.weight / 10 }} kg</p>
          <!-- <p class="pokemon-moves">
            Number of moves: {{ pokemon.moves.length }}
            <span v-for="move in slicedMoves" :key="move">
              <br />
              {{ move.move.name }}
            </span>
          </p>

          <button @click="currentPage--" :disabled="currentPage === 1">
            Previous
          </button>
          <p>Page {{ currentPage }} / {{ totalPages }}</p>
          <button @click="currentPage++" :disabled="currentPage * pageSize >= pokemon.moves.length">
            Next
          </button> -->

          <p>
            {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
            type(s) :
            <span v-for="pokeType in pokemon.types" :key="pokeType">
              <br />
              -
              {{
                pokeType.type.name.charAt(0).toUpperCase() +
                pokeType.type.name.slice(1)
              }}
            </span>
          </p>
        </div>
        <div>
          <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>{{ error }}</div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: [Object, null],
      required: true,
    },
    error: {
      type: [String, null],
      required: false,
    },
  },
  // data() {
  //   return {
  //     currentPage: 1,
  //     pageSize: Math.min(Math.ceil((this.pokemon.moves || []).length / 10), 10),
  //   };
  // },
  // methods: {
  //   sortMoves() {
  //     if (this.pokemon && this.pokemon.moves) {
  //       this.pokemon.moves.sort((a, b) => {
  //         return a.move.name.localeCompare(b.move.name);
  //       });
  //     }
  //   },
  // },
  // computed: {
  //   slicedMoves() {
  //     const start = (this.currentPage - 1) * this.pageSize;
  //     const end = start + this.pageSize;
  //     return this.pokemon.moves.slice(start, end);
  //   },
  //   totalPages() {
  //     return Math.ceil(this.pokemon.moves.length / this.pageSize);
  //   },
  // },
  // mounted() {
  //   this.sortMoves();
  // },
};
</script>

<style>
.pokemon {
  background: #ddd;
  border-radius: 10px;
  padding: 20px;
}

.details {
  padding-left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  background: #eee;
  border-radius: 10px;
}

.details img {
  height: 300px;
}
</style>