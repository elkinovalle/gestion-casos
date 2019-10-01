'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { preguntas_reconocimientoNew } = req.body
    const { PreguntasReconocimiento } = await db()
    const result = await PreguntasReconocimiento.createPreguntaReconocimiento(preguntas_reconocimientoNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { preguntas_reconocimientoUpdate } = req.body
    const { PreguntasReconocimiento } = await db()
    const result = await PreguntasReconocimiento.updatePreguntaReconocimiento(uuid, preguntas_reconocimientoUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { PreguntasReconocimiento } = await db()
    const result = await PreguntasReconocimiento.deletePreguntaReconocimiento(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { PreguntasReconocimiento } = await db()
    const result = await PreguntasReconocimiento.findPreguntaReconocimiento()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { PreguntasReconocimiento } = await db()
    const result = await PreguntasReconocimiento.findPreguntaReconocimientoUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router