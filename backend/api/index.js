'use strict'

const { getLogger } = require('@chons-gym/utils')
const user = require('./user')
const pregunta = require('./pregunta')
const preguntas_reconocimiento = require('./preguntas_reconocimiento')
const log = getLogger(__dirname, __filename)
// prueba
module.exports = {
  home (req, res) {
    res.send({
      user: '/user',
    })
  },
  user,
  pregunta,
  preguntas_reconocimiento,
  
  errorHandler (err, req, res, next) {
    if (err) {
      let code = err.code || 500
      const { id } = req
      const { message, stack } = err
      log.debug({ id, message: stack })
      log.error({ id, message })
      res.status(code).send({ error: message })
      return
    }

    next()
  }
}
