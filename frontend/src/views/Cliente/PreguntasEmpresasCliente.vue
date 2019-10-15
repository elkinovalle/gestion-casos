<template >
  <div class="fondo">
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 md4>
          <img src="../../assets/boss.png" class="imagen" alt />
        </v-flex>
        <v-flex xs12 sm6 md6 lg>
          <!-- <component :is="`caso${this.cont}`"></component>
          <v-btn id="0" class="text" color="blue darken-4 " @click="contador">Siguiente</v-btn> -->
          <v-card>
      <v-card-title class="display-1">¿{{this.preguntas[0].Pregunta}}?</v-card-title>
      <v-radio-group class="group" v-model="Rcorrecta">
        <v-radio :label="`${this.preguntas[0].A}`" color="blue" value="A"></v-radio>
        <v-radio :label="`${this.preguntas[0].B}`" color="blue" value="B"></v-radio>
        <v-radio :label="`${this.preguntas[0].C}`" color="blue" value="C"></v-radio>
      </v-radio-group>
      <v-card-actions>
        <v-btn color="blue darken-4 "  @click="contador">Siguiente</v-btn>
      </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import api from "@/plugins/service";
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
    this.getPreguntasEmpresas();
  },
  data: () => ({
    preguntas: [],
    cont: 0,
    Rcorrecta: ""
  }),
  methods: {
    async getPreguntasEmpresas() {
      const { data: preguntas } = await api.get("/preguntas_reconocimiento");
      this.preguntas = preguntas;
      var rand = preguntas[Math.floor(Math.random() * preguntas.length)];
      let randas = Object.assign({}, rand);
      console.log(randas.Pregunta);
      console.log(randas.A);
      console.log(this.preguntas[0].Pregunta);

      //       ${this.preguntas[1].C}`
      //       ${this.preguntas[1].A}`
      //       ${this.preguntas[1].B}`
    },
    ff(rand) {
      return (rand = this.preguntas[
        Math.floor(Math.random() * this.preguntas.length)
      ]);
    },
    contador() {
     if (this.Rcorrecta === this.preguntas[0].RESPUESTA) {
       console.log("Es correcta");
        console.log(this.preguntas[0].RESPUESTA);
       
     } else {
        console.log("incorrecta");
       
     }
      
    }
  },
  components: {
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
