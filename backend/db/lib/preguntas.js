'use strict'

function setupPregunta(preguntaModel) {
  async function createPregunta(pregunta) {
    const result = await preguntaModel.create(pregunta)
    return result.toJSON()
  }
  async function updatePregunta(uuid, pregunta) {
    const cond = { where : { uuid } }
    const result = await preguntaModel.update(pregunta, cond)
    return result ? preguntaModel.findOne(cond) : new Error('No se actualizo ninguna pregunta ')
  }
  async function deletePregunta(uuid) {
    const cond = { where : { uuid } }
    const result = await preguntaModel.destroy( cond)
    return result ? true : false
  }
  function findPregunta() {
    return preguntaModel.findAll()
  }
  function findPreguntaUuid(uuid) {
    const cond = { where : { uuid } }
    return preguntaModel.findOne(cond)
  }
  return {
    createPregunta,
    updatePregunta,
    deletePregunta,
    findPregunta,
    findPreguntaUuid
  }
}

module.exports = setupPregunta