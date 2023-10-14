const { Client } = require('pg');

const connection = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "dinilethu",
    database: "postgres"
});

module.exports = connection;
