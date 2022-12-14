require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.MYSQL_USER || process.env.MYSQLUSER,
    "password": process.env.MYSQL_PASSWORD || process.env.MYSQLPASSWORD,
    "database": process.env.MYSQL_DATABASE || process.env.MYSQLDATABASE,
    "host": process.env.MYSQL_HOST || process.env.MYSQLHOST,
    "dialect": process.env.MYSQL_DIALECT || 'mysq'
  },
  "test": {
    "username": process.env.MYSQL_USER || process.env.MYSQLUSER,
    "password": process.env.MYSQL_PASSWORD || process.env.MYSQLPASSWORD,
    "database": process.env.MYSQL_DATABASE || process.env.MYSQLDATABASE,
    "host": process.env.MYSQL_HOST || process.env.MYSQLHOST,
    "dialect": process.env.MYSQL_DIALECT || 'mysq'
  },
  "production": {
    "username": process.env.MYSQL_USER || process.env.MYSQLUSER,
    "password": process.env.MYSQL_PASSWORD || process.env.MYSQLPASSWORD,
    "database": process.env.MYSQL_DATABASE || process.env.MYSQLDATABASE,
    "host": process.env.MYSQL_HOST || process.env.MYSQLHOST,
    "dialect": process.env.MYSQL_DIALECT || 'mysq'
  }
}
