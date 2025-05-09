import 'dotenv/config';
import { Sequilize } from 'sequelize';

const pg_url = process.env.PG_URL;

const client = new Sequelize(pg_url, {
    dialect: 'postgres',
    define: {
        timestamps: false,
        underscored: true;
    }
});

export { client }