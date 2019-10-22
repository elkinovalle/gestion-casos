'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { preguntaNew } = req.body
    const { Pregunta } = await db()
    const result = await Pregunta.createPregunta(preguntaNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { preguntaUpdate } = req.body
    const { Pregunta } = await db()
    const result = await Pregunta.updatePregunta(uuid, preguntaUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Pregunta } = await db()
    const result = await Pregunta.deletePregunta(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Pregunta } = await db()
    const result = await Pregunta.findPregunta()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
// prueba
router.get('/presupuesto', async function(req, res, next){
  try {
    const { Pregunta } = await db()
    const result = await Pregunta.presupuesto()
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.get('/proyecto', async function(req, res, next){
  try {
    const { Pregunta } = await db()
    const result = await Pregunta.proyectos()
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.get('/servicio', async function(req, res, next){
  try {
    const { Pregunta } = await db()
    const result = await Pregunta.servicio()
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.get('/contabilidad', async function(req, res, next){
  try {
    const { Pregunta } = await db()
    const result = await Pregunta.contabilidad()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
//fin
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Pregunta } = await db()
    const result = await Pregunta.findPreguntaUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router