import { Router } from 'express';

import { PokemonController } from './controllers/pokemonController.js';
import { teamController } from './controllers/teamController.js';
import { typeController } from './controllers/typeController.js';

const router = Router();

router.get('/pokemons', PokemonController.pokeList);
router.get('/pokemons/:id', PokemonController.onePokemon);

router.get('/teams', teamController.teamList);
router.get('/teams/:id', teamController.oneTeam);
router.post('/teams', teamController.teamPlus);
router.patch('/teams/:id', teamController.teamUpdate);
router.delete('/teams/:id', teamController.teamDelete);

router.get('/teams/:team_id/pokemons', teamController.getPokemonFromTeam)
router.put('/teams/:team_id/pokemons/:pokemon_id', teamController.associatePokemonToTeam);
router.delete('/teams/:team_id/pokemons/:pokemon_id', teamController.desassociatePokemonToTeam);

router.get('/types', typeController.typesList);
router.get('/types/:id', typeController.oneType);


export default router;