import { Team, Pokemon } from '../models/IndexJoin.js';

const teamController = {
    async teamList(req, res) {
        const team = await Team.findAll();

        return res.json(team);
    },

    async oneTeam(req, res) {
        console.log('BODY:', req.body);
        const { id } = req.params;
        const team = await Team.findByPk(id);

        if (!team) {
            return next();
        }
        return res.json(team);
    },

    async teamPlus(req, res, next) {
        const { name, description } = req.body;
        const newTeam = await Team.create({ name: name, description: description });

        res.status(201).json(newTeam);
    },

        async teamUpdate(req, res, next) {

        const { id } = req.params;
        const { name, description } = req.body;

        const teamToUpdate = await Team.findByPk(id);

        if (!teamToUpdate) {
            return next();
        }
        const updateTeam = await teamToUpdate.update({
            name: name || teamToUpdate.name,
            description: description || teamToUpdate.description,
        });

        res.json(updateTeam);
    },

    async teamDelete(req, res, next) {
        const { id } = req.params;
        const teamD = await Team.findByPk(id)

        if (!teamD) {
            return next();
        }
        await teamD.destroy();
        res.status(204).end();
    },
    
     async getPokemonFromTeam(req, res) {
        const { team_id } = req.params;
        try  {
            const team = await Team.findByPk(team_id, {include: { model: Pokemon, as: 'pokemons'}});
            if (!team) {
                return res.status(404).json({ error: 'Team non trouvé' });
            }

        res.json(team.pokemons);
     } catch (error) {
        next(error);
     } 
},

    async associatePokemonToTeam(req, res, next) {
        const { pokemon_id, team_id } = req.params;
    
        const pokemon = await Pokemon.findByPk(pokemon_id);
        if (!pokemon) {
            return res.status(404).json({ error: 'Pokemon non trouve' });
        }
    
        const team = await Team.findByPk(team_id, {
            include: { model: Pokemon, as: 'pokemons' }
        });
        if (!team) {
            return res.status(404).json({ error: 'Team non trouve' });
        }
    
        // Vérifie si le Pokémon est déjà dans la team
        const alreadyInTeam = team.pokemons.some(p => p.id === pokemon.id);
        if (alreadyInTeam) {
            return res.status(400).json({ error: 'Pokemon est déjà dans cette équipe' });
        }
    
        // Vérifie si la team a déjà 6 Pokémon
        if (team.pokemons.length >= 6) {
            return res.status(400).json({ error: 'Cette équipe a déjà 6 Pokemon' });
        }
    
        // Ajoute le Pokémon à la team via l'association
        await team.addPokemon(pokemon);
    
        const updatedTeam = await Team.findByPk(team_id, {
            include: { model: Pokemon, as: 'pokemons' }
        });
    
        res.json(updatedTeam);
    },


    async desassociatePokemonToTeam(req, res, next) {
        const { team_id, pokemon_id } = req.params;

    try {
        const team = await Team.findByPk(team_id, {
            include: {
                model: Pokemon,
                as: 'pokemons',
            }
        });

        if (!team) {
            return res.status(404).json({ error: 'Team on trouve' });
        }

        const pokemon = await Pokemon.findByPk(pokemon_id);

        if (!pokemon) {
            return res.status(404).json({ error: 'Pokemon non trouve' });
        }

        // Vérifie si le Pokémon est bien dans l'équipe
        const isInTeam = team.pokemons.some(p => p.id === parseInt(pokemon_id));
        if (!isInTeam) {
            return res.status(400).json({ error: 'Ce Pokemon n\'est pas dans l\'équipe'});
        }

        // Supprime l'association dans la table intermédiaire
        await team.removePokemon(pokemon);

        return res.json({ message: 'Pokemon retiré de l\'équipe avec succès' });
    } catch (error) {
        next(error);
    } }
};



export { teamController }