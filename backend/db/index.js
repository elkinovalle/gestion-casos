'use strict'

const { db:config } = require('@chons-gym/config')

//contraladores
const setupUser = require('./lib/users')


const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupFichaModel = require('./models/ficha.model')
const setupUsufichaModel = require('./models/usuficha.model')
const setupPreguntaModel = require('./models/pregunta.model')



// const setupAgent = require('./lib/agent')

module.exports = async function () {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const FichaModel = setupFichaModel(config)
  const UsufichaModel = setupUsufichaModel(config)
  const PreguntaModel = setupPreguntaModel(config)


  // relaciones de resevas a usuario
  UsufichaModel.belongsTo(UserModel)
  UsufichaModel.belongsTo(FichaModel)
  //fin de las relaciones

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }
 
  const User = setupUser(UserModel)
  
  return {
    async setup() {
      await sequelize.sync({ force: true })
    },
    User,
  
  }
}
