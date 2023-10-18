const Sequelize = require("sequelize");

const bd_username = process.env.bd_username;
const db_password = process.env.db_password;
const db_name = process.env.db_name;
const db_host = process.env.db_host;
const dialect = process.env.db_dialect;
const port = process.env.db_port;

const Connection = new Sequelize(db_name, bd_username, db_password, {
  host: db_host,
  dialect: dialect,
  port: port,
  operatorAliases: false,
});

module.exports = Connection;
