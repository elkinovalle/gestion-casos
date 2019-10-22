<template >
  <div class="fondo">
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 md4>
          <img src="../../assets/boss.png" class="imagen" alt />
        </v-flex>
        <v-flex xs12 sm6 md6 lg>
          <!-- <component :is="`caso${this.cont}`"></component>
          <v-btn id="0" class="text" color="blue darken-4 " @click="contador">Siguiente</v-btn>-->
          <v-card>
            <v-card-title class="display-1">¿{{this.preguntas[this.cont].Pregunta}}?</v-card-title>
            <v-radio-group class="group" v-model="Rcorrecta">
              <v-radio :label="`${this.preguntas[this.cont].A}`" color="blue" value="A"></v-radio>
              <v-radio :label="`${this.preguntas[this.cont].B}`" color="blue" value="B"></v-radio>
              <v-radio :label="`${this.preguntas[this.cont].C}`" color="blue" value="C"></v-radio>
            </v-radio-group>
            <v-card-actions>
              <v-btn color="blue darken-4 " @click="contador">Siguiente</v-btn>
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
    this.servicio()
  },
  data: () => ({
    preguntas: [],
    cont: 0,
    Rcorrecta: "",
    rand: ""
  }),
  methods: {
    async servicio() {
      const { data:preguntas } = await api.get("/pregunta/servicio");
      this.preguntas = preguntas;
      console.log(this.preguntas);

    //   this.rand = preguntas[Math.floor(Math.random() * preguntas.length)];
    },
    contador() {
     this.cont++;
     console.log(this.cont);
     if (this.Rcorrecta === this.preguntas[this.cont-1].RESPUESTA) {
       console.log("Es correcta");
        console.log(this.preguntas[this.cont].RESPUESTA);
       
     } else {
        console.log("incorrecta");
       
     } 
    }
  },
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
.fondo {
  background-image: url("../../assets/questions.jpg") !important;
  margin-top: -14px;
}
</style>
