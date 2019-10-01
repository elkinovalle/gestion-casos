'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('preguntas_reconocimiento', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    NO_EMPRESA: {
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
    RESPUESTA: {
      type: Sequelize.TEXT,
    }
  })
}
