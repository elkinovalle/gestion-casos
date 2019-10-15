<template>
  <v-app
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
      color="blue darken-1"
    >
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.text" :to="item.link" active-class="activo--text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-1"
      dense
      fixed
      clipped-left
      app
    >

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <img src="../assets/lofo-fondo-blanco.png" alt=""> -->
      <v-toolbar-title class="mr-5 align-center">
      <span class="title ">SEEP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
            <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'admin',
  methods: {
    clickButon (value) {
      this.$router.push(value.link)
    }
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'edit', text: 'Preguntas Casos', link: '/Administrador/pregunta' },
      { icon: 'business', text: 'Preguntas Empresas', link: '/Administrador/preguntas-empresas' },
      { icon: 'close', text: 'Cerrar Sesión', link: '/Cliente/Login' },
    ],
    props: {
      source: String
    }
  })
}
</script>
<style scoped>
 img{
  width: 60px;
  height: 45px;
  }
  
  span.title{
    font-size: 40px !important;
    color: white
  }
  .v-navigation-drawer > .v-list:not(.v-list--dense) .v-list__tile {
    font-size: 18px !important;
    height: 57.7px;
    color: white;
  }
  div.v-content{
    background-color: white !important
  }
  .container.fill-height {
   background-color: white
  }
  .act{
    background-color: white !important
  }
  .v-icon{
    color: white
  }
  .theme--light.v-icon {
    color: white;
  }
  .v-toolbar__content > *:first-child.v-btn--icon, .v-toolbar__extension > *:first-child.v-btn--icon {
      color: white;
  }
  .lista{
    background-color: grey !important
  }
   aside.v-navigation-drawer{
    background-color:#1E88E5 !important
  }
</style>
  