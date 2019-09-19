'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('user', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    cedula: {
      type: Sequelize.TEXT
    },
    nombre: {
      type: Sequelize.TEXT,
    },
    apellido: {
      type: Sequelize.TEXT
    },
    perfil: {
      type: Sequelize.ENUM('Aprendiz','Instructor')
    },
    telefono: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    edad: {
      type: Sequelize.INTEGER,
    },
    password: {
      type: Sequelize.TEXT,
    },
    foto:{
      type: Sequelize.JSON
    }
  })
}
