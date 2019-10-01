'use strict'

function setupPreguntaReconocimiento(PreguntasReconocimientoModel) {
  async function createPreguntaReconocimiento(PreguntasReconocimiento) {
    const result = await PreguntasReconocimientoModel.create(PreguntasReconocimiento)
    return result.toJSON()
  }
  async function updatePreguntaReconocimiento(uuid, PreguntasReconocimiento) {
    const cond = { where : { uuid } }
    const result = await PreguntasReconocimientoModel.update(PreguntasReconocimiento, cond)
    return result ? PreguntasReconocimientoModel.findOne(cond) : new Error('No se actualizo ninguna pregunta ')
  }
  async function deletePreguntaReconocimiento(uuid) {
    const cond = { where : { uuid } }
    const result = await PreguntasReconocimientoModel.destroy( cond)
    return result ? true : false 
  }
  function findPreguntaReconocimiento() {
    return PreguntasReconocimientoModel.findAll()
  }
  function findPreguntaReconocimientoUuid(uuid) {
    const cond = { where : { uuid } }
    return PreguntasReconocimientoModel.findOne(cond)
  }
  return {
    createPreguntaReconocimiento,
    updatePreguntaReconocimiento,
    deletePreguntaReconocimiento,
    findPreguntaReconocimiento,
    findPreguntaReconocimientoUuid
  }
}

module.exports = setupPreguntaReconocimiento