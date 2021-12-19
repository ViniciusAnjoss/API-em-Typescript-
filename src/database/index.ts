import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === "development" ? ".env.development" : ".env"
});

const dbConfig = {
    client: 'mysql2',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
}

console.log(dbConfig)

const connection = knex(dbConfig);

export default connection;