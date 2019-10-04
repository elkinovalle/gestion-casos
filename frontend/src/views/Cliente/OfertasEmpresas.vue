<template>
  <div>
    <v-container>
    <v-layout justify-end>
    <v-flex xs12 sm6 >
            <img src="../../assets/logo seep hd.png" class="imagen2" />
          </v-flex>
    </v-layout>  
    </v-container>   
    <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <img src="../../assets/Slide1_Pic1_636256342167862599.png" class="imagen" alt />
      </v-flex>
      <v-flex m-flex xs12 sm6 md6>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card>
              <v-card-title class="display-2 ">Felicidades</v-card-title>
              <v-card-text class="texto">
                  Acabas de recibir dos ofertas de empleo para realizar tu contrato de aprendizaje para la etapa productiva 
               </v-card-text>
               
            </v-card>
          </v-flex>
          <v-flex d-flex>                
               <!-- <v-img :src="require('../../assets/motos.png')" class="spinning"  @click="clickPush()" /> -->
               <img :src="require('../../assets/motos.png')" class="spinning" @click="clickPush()">
            </v-flex>
            <v-flex d-flex> 
              <img :src="require('../../assets/Modelamiento sw.png')" class="spinning" @click="clickPush('/Cliente/Bienvenido')">               
            </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>  
    </v-container>
    <!-- <v-container>
      <v-layout>
        <v-flex xs12 sm6 md3>
          <img src="../../assets/Slide1_Pic1_636256342167862599.png" class="imagen" alt />
        </v-flex>
        <v-flex xs12 sm6 md6 lg>
          <v-card>
            <v-card-title class="display-1">¿{{this.preguntas[1].Pregunta}}?</v-card-title>
            <v-radio-group class="group" v-model="Rcorrecta">
              <v-radio :label="`${this.preguntas[1].A}`" color="blue" value="A"></v-radio>
              <v-radio :label="`${this.preguntas[1].B}`" color="blue" value="B"></v-radio>
              <v-radio :label="`${this.preguntas[1].C}`" color="blue" value="C"></v-radio>
            </v-radio-group>
            <v-card-actions>
               <v-btn  class="text" color="blue darken-4 " @click="contador">Siguiente</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->
  </div>
</template>

<script>
import api from "@/plugins/service";

export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'principal-layout');
    this.getPreguntas();
  },
  data: () => ({
    preguntas: [],
     
  }),
  methods: {
    clickPush (value) {
      this.$router.push(value)
    }
  },
};
</script>
<style lang="stylus" scoped>
.group {
  margin-left: 15px;
}
.centro{
    text-align: center !important
}
.imagen2 {
    width: 100%;
    height: 100px;
}
.texto{
    font-size 25px
}
 .spinning{ 
   height 250px
   width 100px
  }
</style>
