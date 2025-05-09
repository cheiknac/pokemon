import { Router } from 'express';

import { PokemonController } from './controllers/pokemonController.js';

const router = Router();

router.get('/pokemons', PokemonController.pokeList);
router.get('/pokemons/:id', PokemonController.onePokemon);


export default router;