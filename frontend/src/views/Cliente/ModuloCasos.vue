<template>
  <div class="fondo">
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 md3>
          <img src="../../assets/Slide1_Pic1_636256342167862599.png" class="imagen" alt />
        </v-flex>
        <v-flex xs12 sm6 md6 lg>
          <component :is="`caso${this.cont}`"></component>
          <v-btn id="0" class="text" color="blue darken-4 " @click="contador">Siguiente</v-btn>
          <!-- <v-card>
      <v-card-title class="display-1">¿{{this.preguntas[0].Pregunta}}?</v-card-title>
      <v-radio-group class="group" v-model="Rcorrecta">
        <v-radio :label="`${this.preguntas[0].A}`" color="blue" value="A"></v-radio>
        <v-radio :label="`${this.preguntas[0].B}`" color="blue" value="B"></v-radio>
        <v-radio :label="`${this.preguntas[0].C}`" color="blue" value="C"></v-radio>
      </v-radio-group>
      <v-card-actions>
        <v-btn color="blue darken-4 "  @click="contador">Siguiente</v-btn>
      </v-card-actions>
    </v-card> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import api from "@/plugins/service";
import caso1 from "../../componets/caso2";
import caso2 from "../../componets/caso3";
import caso0 from "../../componets/caso1";
export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'principal-layout');
    this.getPreguntas();
  },
  data: () => ({
    preguntas: [],
    caso0: caso0,
    caso1: caso1,
    caso2: caso2,
    cont: 0
  }),
  methods: {
    async getPreguntas() {
      const { data: preguntas } = await api.get("/pregunta");
      this.preguntas = preguntas;
    },
    
    contador(){
     this.cont++;
     console.log(this.cont);
      if (this.Rcorrecta === this.rand.correcta) {
       console.log("Es correcta");
        console.log(this.rand.RESPUESTA);
       
     } else {
        console.log("incorrecta");
        console.log(this.rand.correcta);
     }
     
    }
  },
  components: {
    caso0,
    caso1,
    caso2
  }
};
</script>
<style scoped>
.group {
  margin-left: 15px;
}
.text {
  color: white;
  margin-top: -100px;
}
.fondo{
      background-image: url('../../assets/questions.jpg') !important;
      margin-top: -14px
  }

</style>
