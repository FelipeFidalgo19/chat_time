const knex = require('knex');
const env = require('dotenv');

const config = 'mysql://b89ada163df3c0:53e751ad@us-cdbr-east-05.cleardb.net/heroku_9d83b4e78b13644?reconnect=true';

const connection = knex(config);

module.exports = connection;