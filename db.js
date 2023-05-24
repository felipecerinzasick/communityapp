const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'database-1.cg3rowuxngcp.eu-north-1.rds.amazonaws.com',
  database: 'database-1',
  password: 'R!cardo123',
  port: '5432',
});

client.connect();

module.exports = client;
