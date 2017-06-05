const pg = require('pg')
const connectionString = process.env.DATABASE_URL;

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
    'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR NOT NULL, complete BOOLEAN)');
query.on('end', () => { client.end(); });
