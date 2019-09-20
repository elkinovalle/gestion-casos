'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('pregunta', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    Tema: {
      type: Sequelize.TEXT
    },
    Pregunta: {
      type: Sequelize.TEXT,
    },
    A: {
      type: Sequelize.TEXT
    },
    B: {
        type: Sequelize.TEXT
    },
    C: {
      type: Sequelize.TEXT,
    },
    contexto: {
      type: Sequelize.TEXT,
    },
    correcta: {
      type: Sequelize.TEXT,
    }
  })
}
