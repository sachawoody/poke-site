<template>
    <!-- display pokemon infos -->
    <div v-if="pokemon">
        <div v-if="pokemon" class="pokemon">
            <h2>{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h2>
            <div class="details">
                <div class="apparence">
                    <p>Poké-id: {{ pokemon.id }}</p>
                    <p>Height: {{ pokemon.height / 0.1 }} cm</p>
                    <p>Weight: {{ pokemon.weight / 10 }} kg</p>
                    <p>Number of moves: {{ pokemon.moves.length }}</p>
                    <p>{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }} type(s) :

                        <span v-for="pokeType in pokemon.types" :key="pokeType">
                            <br>
                            {{ pokeType.type.name.charAt(0).toUpperCase() + pokeType.type.name.slice(1) }}
                        </span>
                    </p>
                </div>
                <div>
                    <img v-if="sprite" :src="sprite" :alt="pokemon.name">
                    <img v-else :src=pokemon.sprites.front_default :alt="pokemon.name">
                </div>

                <!-- Select a sprite from list -->
                <!-- <select v-model="sprite">
                    <option v-for="sprite in pokemon.sprites" :key="sprite" class="pill">
                    {{ sprite }}
                    </option>
                </select> -->

            </div>

            <div class="other">
                <h3>{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }} already appears in those games: </h3>
                <div v-for="game in pokemon.game_indices" :key="game">
                    {{ game.version.name.charAt(0).toUpperCase() + game.version.name.slice(1) }}</div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    // use pokemon object from views/pokedex (display poke-card for one pokemon)
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    }
}
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