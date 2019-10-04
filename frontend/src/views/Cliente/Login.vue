<template>
<div class="found">
    <v-content>
      <v-container>
        <h1 class="text-xs-center font-weight-bold white--text display-3">Iniciar sesión</h1>
        <v-layout wrap align-center justify-center>
          <v-flex xs12 sm8 md8>
              <v-card class="elevation-12">
                <v-toolbar color="blue darken-1" height="150">
                    <img src="../../assets/logo seep hd.png" alt="" class="symbol">
                </v-toolbar>
              <v-card-text class="contenedor white">
                <v-form class="black--text">
                  <v-text-field name="user" label="Usuario" type="text" :error-messages="matchPass" v-model="email"></v-text-field>
                  <v-text-field id="password" name="password" v-model="password" label="Contraseña"  :type="show1 ? 'text' : 'password'" :append-icon="show1 ? 'visibility' : 'visibility_off'"
             @click:append="show1 = !show1"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="white">
                <v-spacer></v-spacer>
               <v-checkbox class="checkbox-xs-center white--text" v-model="agreement" color="blue darken-4" >
              <template v-slot:label>
                <v-toolbar-title class="text-xs-center black--text body-1">Recordarme</v-toolbar-title>
               </template>
             </v-checkbox>
                </v-card-actions>
              <v-card class="carta" flat>
                <v-btn round color="blue darken-4" class="font-weight-black white--text black" @click="singin">Iniciar sesión</v-btn>
              </v-card>
              <br>
              <v-card class="carta" flat>
                 <v-flex xs12 order-lg2>
                  <v-dialog v-model="dialogPassword" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-card flat class="carta1">
        <v-btn dark v-on="on" color="black body-1" flat>¿Olvidó su contraseña?</v-btn>
          </v-card>
        </template>
        <v-card class="contenido">
          <v-card-title>
            <span class="headline">Recuperar contraseña</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Escribe tu e-mail*" :rules="rules.email" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
           <small>Verifique que todos los datos esten escritos correctamente</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-4" flat @click="dialogPassword = false">Cancelar</v-btn>
            <v-btn color="blue darken-4" flat @click="dialogPassword = false">Recuperar contraseña</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
        </v-flex>
              </v-card>
              <br>
               <v-divider></v-divider>
               <br>
              <v-card class="carta" flat>
              <a class="izquierda black--text subheading">¿No tienes cuenta?</a>
              <a href="#" class="derecha blue--text title" @click="clickPush('/Cliente/registro-cliente')"> Regístrate</a>
              </v-card>
              <br><br>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import api from '@/plugins/service'
export default {
  data: () => ({
    dialogEmail: false,
    dialogPassword: false,
    form: false,
    email: '',
    password: '',
    show1: false,
    rules: {
      email: [v => (v || '').match(/@/) || 'Por favor ingrese el e-mail de cuenta']
    }
  }),
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    clickPush (value) {
      this.$router.push(value)
    },
    passErrors() {
      const errors = [];
      if (!this.$v.user.$dirty) return errors;
      if (!this.$v.password.minLength) {
        errors.push("Contraseña debe tener mínimo 8 caracteres");
        return errors;
      }
      if (!this.$v.password.required) {
        errors.push("Contraseña requerida");
        return errors;
      }
      return errors;
    },
    async singin () {
      const { data } = await api.post('/user/singin', { email: this.email, password: this.password })
      if (data.login) {
        this.$router.push('/Cliente/inicio')
      }
      else{

      }
    }
  }
}
</script>

<style lang="stylus" scoped>
img.symbol {
  margin-right 5px
  height 100px
  width 300px !important
}
div.found{
      // background-image url('../../assets/gym.jpg');
      margin-bottom 1px
      margin-top 1px
}
h1 {
  margin-left: -10px
}
.contenedor{
  padding 10px 50px
}
.carta{
  text-align center
}
.derecha{
  margin-left 5px
}
.izquierda{
  margin-right 5px
}
.contenido{
  padding 30px
}
.carta1{
  padding-left 270px
}
</style>
