const knex = require('knex');
const env = require('dotenv');

const config = 'mysql://b4ca38b7b81a43:3ad2c379@us-cdbr-east-05.cleardb.net/heroku_fc9f2aeda300078?reconnect=true';

const connection = knex(config);

module.exports = connection;