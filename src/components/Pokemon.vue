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
    </div>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true,
        },
    }
};
</script>

<style></style>