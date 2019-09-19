'use strict'

const pkg = require('../package.json')

const config = {
  db: {
    database: process.env.DB_NAME || 'gestion',
    username: process.env.DB_USER || 'gestion',
    password: process.env.DB_PASS || 'gestioncasos123',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}

Object.assign(config, { pkg })

module.exports = config