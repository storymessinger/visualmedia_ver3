// mySql + Knex + Bookshelf setup
const dbConfig = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'visualmedia',
    database: 'o2',
    charset: 'utf8'
  }
};

const knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);
