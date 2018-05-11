import { Router } from 'express';
import * as PokemonController from '../controllers/pokemon.controller';
const router = new Router();

// Get all Pokemons
router.route('/pokemons').get(PokemonController.getPosts);

// Get one pokemon by id
// router.route('/pokemons/:id').get(PokemonController.getPost);

export default router;
