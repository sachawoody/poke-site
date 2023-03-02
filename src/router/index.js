import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Pokedex from '../views/Pokedex.vue'
import Pokemon from '../views/PokemonDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    component: Pokedex
  },
  {
    path: '/pokedex/:id',
    name: 'Pokemon',
    component: Pokemon,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
