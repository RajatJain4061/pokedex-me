import { Router } from 'express';
import * as PokemonController from '../controllers/pokemon.controller';
const router = new Router();

// Get all Pokemons
router.route('/pokemons').get(PokemonController.getPokemons);

// Get one pokemon by id
router.route('/pokemons/:id').get(PokemonController.getPokemon);

export default router;
