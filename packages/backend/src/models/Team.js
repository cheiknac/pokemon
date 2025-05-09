import { Model, DataTypes } from 'sequelize';
import { client } from '../client.js';

class Team extends Model {}

Team.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: client,
    tableName: 'team'
})

export { Team }