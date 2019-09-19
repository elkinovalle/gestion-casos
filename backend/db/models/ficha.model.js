'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('ficha', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    NmroPrograma: {
      type: Sequelize.TEXT
    },
    NbrePrograma: {
      type: Sequelize.TEXT,
    },
    
  })
}
