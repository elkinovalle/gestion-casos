<template>
<v-app
    id="inspire"
  >
  <v-toolbar class="desplegable" color="blue lighten-1">
    <img src="../assets/logo seep hd.png" alt="">
    <v-toolbar-title class="font-weight-black font-italic white--text display-1">Gestion Casos</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="white--text"  to="/Administrador/pregunta">pregunta</v-btn>
      <v-btn flat class="white--text"  to="/Cliente/Modulo-Casos">casos</v-btn>
       <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
        <v-btn
          class=""
          dark
          v-on="on"
          flat
        >
          MI PERFIL
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click="clickMenu(item)"
        >
        <v-icon class="conexion_icon" color="black">{{ item.icon }}</v-icon>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <router-view></router-view>
  </v-content>
 <!-- <v-footer dark height="auto" color="blue darken-4">
   <v-container fluid>
      <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2>
          <v-card color="blue darken-4" dark flat>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm3 md4>
          <v-card color="blue darken-4" dark flat>
            <img src="../assets/lofo-fondo-blanco.png" class='footer_imagen' alt="">
            <v-card-title flat tile class="blue darken-4 white--text text-xs-center-justify body-1">En Chon's Gym contamos con un gimnasio de buen amplitud donde podrás realizar rutinas de ejercicios y encontrar un equipo perfecto para obtener el cuerpo que deseas.</v-card-title>
            <v-card-title flat tile class="blue darken-4 white--text text-xs-center font-weight-black">SÍGUENOS EN NUESTRAS REDES:</v-card-title>
            <v-card-text>
                <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 >
          <v-card color="carta blue darken-4" dark flat>
                 <v-btn
        color="white"
        flat
        round
        class="title font-italic font-weight-black"
        to="/login"
      >
     HOME
      </v-btn>
         <v-btn
        color="white"
        flat
        round
        class="title font-italic font-weight-black"
        to="/Cliente/planes-cliente"
      >
      PLANES Y TARIFAS
      </v-btn>
         <v-btn
        color="white"
        flat
        round
        class="title font-italic font-weight-black"
        to="/Cliente/clases-grupales-cliente"
      >
     CLASES GRUPALES
      </v-btn>
         <v-btn
        color="white"
        flat
        round
        class="title font-italic font-weight-black"
        to="/Cliente/horarios-cliente"
      >
      HORARIOS
      </v-btn>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2>
                  <v-card color="carta blue darken-4" dark flat>
                 <v-btn
        color="white"
        flat
        round
        class="title font-italic font-weight-black"
        to="/Cliente/tips-cliente"
      >
     TIPS
      </v-btn>
         <v-btn
        color="white"
        flat
        round
        class="title font-italic font-weight-black"
        to="/Cliente/instalaciones-cliente"
      >
      NUESTRAS INSTALACIONES
      </v-btn>
         <v-btn
        color="white"
        flat
        round
        class="title font-italic font-weight-black"
        to="/Cliente/trabaja-con-nosotros-cliente"
      >
     TRABAJA CON NOSOTROS
      </v-btn>
         <v-btn
        color="white"
        flat
        round
        class="title font-italic font-weight-black"
        to="/Cliente/lo-nuevo-cliente"
      >
      LO NUEVO
      </v-btn>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="transparent" dark flat >
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm12 md12 child-flex >
      <v-divider></v-divider> <br>
        </v-flex>
            <v-flex class="font-weight-black white--text caption"
        primary
        py-3
        text-xs-center
        white--text
        xs12
      >
       COPYRIGHT CHON'S GYM © 2019 · Desarrollo de página web y posicionamiento SEO por ADSI-GROUP · TODOS LOS DERECHOS RESERVADOS · POLÍTICA DE PRIVACIDAD.
      </v-flex>
      </v-layout>
    </v-container>
  </v-footer> -->
</v-app>
</template>
<script>
import api from "@/plugins/service";
export default {
  created(){

  },
  methods: {
    clickMenu (value) {
      this.$router.push(value.link)
    }
  },
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-youtube',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-instagram'
    ],
    links: [
      'Home',
      'Planes y Tarifas',
      'Dietas',
      'Clases Grupales',
      'Horarios',
      'Lo Nuevo'
    ],
    links2: [
      'Tips',
      'Nuestras instalaciones',
      'Productos',
      'Trabaja con nosotros',
      'Contacto',
      'Reglamento de usuario'
    ],
    items: [
      { title: 'Editar Perfil', icon: 'edit', link: '/Cliente/Editar-Perfil-Cliente' },
      { title: 'Cerrar Sesión', icon: 'close', link: '/Cliente/login' }
    ]
  })
}
</script>
<style lang="stylus" scoped>
 .v-btn{
    font-size: 16px !important
    font-family: Helvetica
    font-style: italic
  }
  img{
    width: 150px !important
    height: 100%
  }
  .desplegable{
    z-index: 900000
  }
  .carta{
    padding 30px
  }
</style>
