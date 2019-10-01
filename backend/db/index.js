'use strict'

const { db:config } = require('@chons-gym/config')

//contraladores
const setupUser = require('./lib/users')
const setupPregunta = require('./lib/preguntas')
const setupPreguntas_Reconocimiento = require('./lib/preguntas_reconocimientos')


const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupFichaModel = require('./models/ficha.model')
const setupUsufichaModel = require('./models/usuficha.model')
const setupPreguntaModel = require('./models/pregunta.model')
const setupPreguntas_ReconocimientoModel = require('./models/preguntas_reconocimiento.model')



// const setupAgent = require('./lib/agent')

module.exports = async function () {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const FichaModel = setupFichaModel(config)
  const UsufichaModel = setupUsufichaModel(config)
  const PreguntaModel = setupPreguntaModel(config)
  const PreguntasReconocimientoModel = setupPreguntas_ReconocimientoModel(config)

  // relaciones de resevas a usuario
  UsufichaModel.belongsTo(UserModel)
  UsufichaModel.belongsTo(FichaModel)
  //fin de las relaciones

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }
 
  const User = setupUser(UserModel)
  const Pregunta = setupPregunta(PreguntaModel)
  const PreguntasReconocimiento = setupPreguntas_Reconocimiento(PreguntasReconocimientoModel)
  
  return {
    async setup() {
      await sequelize.sync({ force: true })
    },
    User,
    Pregunta,
    PreguntasReconocimiento
  }
}
