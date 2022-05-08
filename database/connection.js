const knex = require('knex');
const env = require('dotenv');

const config = 'mysql://b8f3f7e797f977:b0421dd6@us-cdbr-east-05.cleardb.net/heroku_b00cd2e0a91fa0c?reconnect=true';

const connection = knex(config);

module.exports = connection;