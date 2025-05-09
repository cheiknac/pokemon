import { Model, DataTypes } from 'sequelize';
import { client } from '../client.js';

class Type extends Model {}

Type.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncremet: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    color: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: client,
    tableName: 'type'

})

export { Type }