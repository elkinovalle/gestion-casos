<template>
  <div>
    <v-container align-content-end>
      <v-layout row  wrap align-content-end justify-end>
        <v-flex xs12 sm6 md6 >
          <v-card >
            <v-card-title class="display-1"> ¿{{this.preguntas[2].Pregunta}}? </v-card-title>
            <v-radio-group class="group">
              <v-radio :label="`${this.preguntas[2].A}`" color="blue" value="A"></v-radio>
              <v-radio :label="`${this.preguntas[2].B}`" color="blue" value="B"></v-radio>
              <v-radio :label="`${this.preguntas[2].C}`" color="blue" value="C"></v-radio>
            </v-radio-group>
            <v-card-actions>
              <v-btn  color="blue darken-4">Siguiente</v-btn>
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
  created(){
    this.getPreguntas()
  },
  data:() => ({
    preguntas:[]
  }),
 methods: {
    async getPreguntas() {
      const { data: preguntas } = await api.get("/pregunta");
      this.preguntas = preguntas;
        
      console.log(this.pregunta);   
      console.log(this.preguntas[0].Pregunta);
    },
 }
};
</script>
<style scoped>
  .group{
    margin-left: 15px;
  }
 
</style>
