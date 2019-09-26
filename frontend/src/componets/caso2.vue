<template>
  <div>
          <v-card>
            <v-card-title class="display-1">¿{{this.preguntas[1].Pregunta}}?</v-card-title>
            <v-radio-group class="group" v-model="Rcorrecta">
              <v-radio :label="`${this.preguntas[1].A}`" color="blue" value="A"></v-radio>
              <v-radio :label="`${this.preguntas[1].B}`" color="blue" value="B"></v-radio>
              <v-radio :label="`${this.preguntas[1].C}`" color="blue" value="C"></v-radio>
            </v-radio-group>
            <v-card-actions>
              <br>
              <br>
            </v-card-actions>
          </v-card>
  </div>
</template>

<script>
import api from "@/plugins/service";
export default {
  created() {
    this.getPreguntas();
  },
  data: () => ({
    preguntas: []
  }),
  methods: {
    async getPreguntas() {
      const { data: preguntas } = await api.get("/pregunta");
      this.preguntas = preguntas;
      var rand = preguntas[Math.floor(Math.random() * preguntas.length) ];
      let randas = Object.assign({}, rand);
      console.log(randas.Pregunta);
      console.log(randas.A);
      console.log(this.preguntas[0].Pregunta);

      //       ${this.preguntas[1].C}`
      //       ${this.preguntas[1].A}`
      //       ${this.preguntas[1].B}`
    },
         ff(rand){
          return rand = this.preguntas[Math.floor(Math.random() * this.preguntas.length) ];
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
}
.imagen{
  
}
</style>
