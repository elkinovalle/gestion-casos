<template>
  <div class="fondo">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <img src="../../assets/Slide1_Pic1_636256342167862599.png" class="imagen" alt />
        </v-flex>
        <v-flex  xs12 sm6 md6>
          <v-layout row wrap>
            <v-flex sm12 md12>
              <img src="../../assets/logo seep hd.png" class="imagen2" />
            </v-flex>
            <v-flex xs12 sm3 md6 >
              <v-btn class="btn" color="blue darken-1" @click="clickPush('/Cliente/preguntas-presupuesto')">Presupuesto</v-btn>
            </v-flex>
            <v-flex xs12 sm3 md6>
              <v-btn class="btn" color="blue darken-1" @click="clickPush('/Cliente/preguntas-proyecto')">Proyectos</v-btn>
            </v-flex>
            <v-flex xs12 sm3 md6>
              <v-btn class="btn" color="blue darken-1" @click="clickPush('/Cliente/preguntas-servicios')">Servicio al Cliente</v-btn>
            </v-flex>
            <v-flex xs12 sm3 md6>
              <v-btn class="btn" color="blue darken-1" @click="clickPush('/Cliente/preguntas-contabilidad')">Contabilidad y Finanzas</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import api from "@/plugins/service";
export default {
  created (){
    this.$store.commit('SET_LAYOUT', 'principal-layout');
    this.getPreguntas();
  },
  data: () => ({
    preguntas: [],
    re: [],
    cont: 0
  }),
   methods: {
    async getPreguntas() {
      const { data: preguntas } = await api.get("/pregunta");
      this.preguntas = preguntas;
    },
    clickPush (value) {
      this.$router.push(value)
    },
   }
};
</script>

<style>
.imagen2 {
  width: 100%;
  height: 100px;
}
.btn {
  width: 100%;
  height: 100px;
}

</style>