<template>
  <div>
    <v-card>
      <v-card-title class="display-1">¿{{this.rand.Pregunta}}?</v-card-title>
      <v-radio-group class="group" v-model="Rcorrecta">
        <v-radio :label="`${this.rand.A}`" color="blue" value="A"></v-radio>
        <v-radio :label="`${this.rand.B}`" color="blue" value="B"></v-radio>
        <v-radio :label="`${this.rand.C}`" color="blue" value="C"></v-radio>
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
    preguntas: [],
    rand: "",
    Rcorrecta: ""
  }),
  methods: {
    async getPreguntas() {
      const { data: preguntas } = await api.get("/pregunta");
      this.preguntas = preguntas;
      this.rand = preguntas[Math.floor(Math.random() * preguntas.length)];
      console.log(this.rand.Pregunta);
      console.log(this.rand.A);
      console.log(this.rand.B);
      console.log(this.rand.C);
    },
  }
};
</script>
<style scoped>
.group {
  margin-left: 15px;
}
.text {
  color: white;
}

</style>
