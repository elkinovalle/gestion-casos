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
  function presupuesto(){
    const cond = { where : { Tema: "PRESUPUESTO" } }
    return preguntaModel.findAll(cond)
  }
  function contabilidad(){
    const cond = { where : { Tema: "CONTAB. Y FINANZAS" } }
    return preguntaModel.findAll(cond)
  }
  function proyectos(){
    const cond = { where : { Tema: "PROYECTOS" } }
    return preguntaModel.findAll(cond)
  }
  function servicio(){
    const cond = { where : { Tema: "SERV. AL CLIENTE" } }
    return preguntaModel.findAll(cond)
  }
  return {
    createPregunta,
    updatePregunta,
    deletePregunta,
    findPregunta,
    findPreguntaUuid,
    presupuesto,
    contabilidad,
    proyectos,
    servicio
  }
}

module.exports = setupPregunta