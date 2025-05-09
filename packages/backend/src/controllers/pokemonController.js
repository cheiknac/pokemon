import { Pokemon } from '../models/IndexJoin.js';

const PokemonController = {
    async pokeList(req, res) {
        const pokemons = await Pokemon.findAll();

        return res.json(pokemons);
    },

    async onePokemon(req, res) {
        const { id } = req.params;
        const pokemon = await Pokemon.findByPk(id);

        if(!pokemon) {
            return next();
        }
        return res.json(pokemon);
    },
};

export { PokemonController }