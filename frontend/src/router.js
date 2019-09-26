import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Cliente/Login.vue'
import RegistroCliente from './views/Cliente/RegistroCliente.vue'
import MiPerfilCliente from './views/Cliente/MiPerfilCliente.vue'
import EditarPerfilCliente from './views/Cliente/EditarPerfilCliente.vue'
import Pregunta from './views/Cliente/Preguntas.vue'
import ModuloCasos from './views/Cliente/ModuloCasos.vue'
import Mision from './views/Cliente/Mision.vue'

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
      path: '/Cliente/pregunta',
      name: 'pregunta',
      component: Pregunta
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
    
    
  ]
})

