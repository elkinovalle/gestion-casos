<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 md3>
          <img src="../../assets/Slide1_Pic1_636256342167862599.png" class="imagen" alt />
        </v-flex>
        <v-flex xs12 sm6 md6 lg>
          <!-- <component is="caso1"></component>
          <v-btn id="0" class="text" color="blue darken-4 " @click="contador">Siguiente</v-btn> -->
          <v-card>
      <v-card-title class="display-1">¿{{this.preguntas[0].Pregunta}}?</v-card-title>
      <v-radio-group class="group" v-model="Rcorrecta">
        <v-radio :label="`${this.preguntas[0].A}`" color="blue" value="A"></v-radio>
        <v-radio :label="`${this.preguntas[0].B}`" color="blue" value="B"></v-radio>
        <v-radio :label="`${this.preguntas[0].C}`" color="blue" value="C"></v-radio>
      </v-radio-group>
      <v-card-actions>
        <v-btn color="blue darken-4 " to="">Siguiente</v-btn>
      </v-card-actions>
    </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import api from "@/plugins/service";
import caso2 from "../../componets/caso2";
import caso1 from "../../componets/caso1";
export default {
  created() {
    this.getPreguntas();
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  data: () => ({
    preguntas: [],
  }),
  methods: {
    async getPreguntas() {
      const { data: preguntas } = await api.get("/pregunta");
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
    contador(){
     var a=0;
     a++
     console.log(a);
     
    }
  },
  components: {
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
.imagen {
}
</style>
