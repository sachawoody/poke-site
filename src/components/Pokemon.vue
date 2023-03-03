<template>
    <!-- display pokemon infos -->
    <div v-if="pokemon">
        <p>
            Pokemon:
            {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
        </p>
        <p>Number: {{ pokemon.id }}</p>
        <button>
            <router-link :to="{ name: 'Pokemon', params: { id: pokemon.name } }">En savoir plus</router-link>
        </button>
        <img :src="
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
            pokemon.id +
            '.png'
        " :alt="pokemon.name" />
        <button @click="addPokemonToTeam">
            Add to Team
        </button>
    </div>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true,
        },
    },
    methods: {
        addPokemonToTeam() {
            console.log('added', this.pokemon.name, 'to team')
            this.$emit('add-pokemon', this.pokemon);
        }
    }
};
</script>

<style></style>