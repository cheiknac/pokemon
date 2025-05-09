import { Pokemon } from './Pokemon.js';
import { Type } from './Type.js';
import { Team } from './Team.js';

Team.belongsToMany(Pokemon, {
    through: 'team_pokemon',
    foreignKey: 'team_id',
    otherKey: 'pokemon_id',
    as: 'pokemons'
});


Pokemon.belongsToMany(Team, {
    through: 'team_pokemon',
    foreignKey: 'pokemon_id',
    otherKey: 'team_id',
    as: 'teams'
});

export { Pokemon, Type, Team }