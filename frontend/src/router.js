import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Cliente/Login.vue'
import RegistroCliente from './views/Cliente/RegistroCliente.vue'
import MiPerfilCliente from './views/Cliente/MiPerfilCliente.vue'
import EditarPerfilCliente from './views/Cliente/EditarPerfilCliente.vue'
import PreguntasEmpresas from './views/Administrador/PreguntasEmpresas.vue'
import Pregunta from './views/Administrador/Preguntas.vue'
import ModuloCasos from './views/Cliente/ModuloCasos.vue'
import Mision from './views/Cliente/Mision.vue'
import Inicio from './views/Cliente/inicio.vue'
import OfertasEmpresas from './views/Cliente/OfertasEmpresas.vue'
import Bienvenido from './views/Cliente/Bienvenido.vue'
import infoRealizarPreguntas from './views/Cliente/infoRealizarPreguntas.vue'
import PreguntasEmpresasCliente from './views/Cliente/PreguntasEmpresasCliente.vue'
import seleccionarCaso from './views/Cliente/seleccionarCaso.vue'
import preguntasPresupuesto from './views/Cliente/preguntasPresupuesto.vue'
import preguntasProyecto from './views/Cliente/preguntasProyecto.vue'
import preguntasServicio from './views/Cliente/preguntasServicio.vue'
import preguntasContabilidad from './views/Cliente/preguntasContabilidad.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Cliente/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Cliente/registro-cliente',
      name: 'registro-cliente',
      component: RegistroCliente
    },
    {
      path: '/Cliente/mi-perfil-cliente',
      name: 'mi-perfil-cliente',
      component: MiPerfilCliente
    },
    {
      path: '/Cliente/Editar-Perfil-Cliente',
      name: 'Editar-Perfil-Cliente',
      component: EditarPerfilCliente
    },
    {
      path: '/Administrador/pregunta',
      name: 'pregunta',
      component: Pregunta
    },
    {
      path: '/Administrador/preguntas-empresas',
      name: 'preguntas-empresas',
      component: PreguntasEmpresas
    },
    {
      path: '/Cliente/Modulo-Casos',
      name: 'Modulo-Casos',
      component: ModuloCasos
    },
    {
      path: '/Cliente/Mision',
      name: 'Mision',
      component: Mision
    },
    {
      path: '/Cliente/Inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/Cliente/Ofertas-Empresas',
      name: 'Ofertas-Empresas',
      component: OfertasEmpresas
    },
    {
      path: '/Cliente/Bienvenido',
      name: 'Bienvenido',
      component: Bienvenido
    },
    {
      path: '/Cliente/infoRealizar-Preguntas',
      name: 'infoRealizar-Preguntas',
      component: infoRealizarPreguntas
    },
    {
      path: '/Cliente/preguntas-empresas-cliente',
      name: 'preguntas-empresas-cliente',
      component: PreguntasEmpresasCliente
    },
    {
      path: '/Cliente/seleccionar-caso',
      name: 'seleccionar-caso',
      component: seleccionarCaso
    },
    {
      path: '/Cliente/preguntas-presupuesto',
      name: 'preguntas-presupuesto',
      component: preguntasPresupuesto
    },
    {
      path: '/Cliente/preguntas-proyecto',
      name: 'preguntas-proyecto',
      component: preguntasProyecto
    },
    {
      path: '/Cliente/preguntas-contabilidad',
      name: 'preguntas-contabilidad',
      component: preguntasContabilidad
    },
    {
      path: '/Cliente/preguntas-servicios',
      name: 'preguntas-servicios',
      component: preguntasServicio
    },
  ]
})

