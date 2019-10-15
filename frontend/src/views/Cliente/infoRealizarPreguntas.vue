<template>
  <div>
    <v-container>
      <v-layout justify-end>
        <v-flex xs12 sm4></v-flex>
        <v-flex xs12 sm8>
          <img src="../../assets/Modelamiento sw.png" class="imagen2" />
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <img src="../../assets/boss.png" class="imagen" />
        </v-flex>
        <v-flex m-flex xs12 sm6 md6>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card>
                <v-card-text>
                  <span class="text-xs black--text subheading justify">Te voy a realizar un serie de preguntas</span>
                  <p></p>
                  <span class="text-xs black--text subheading justify">acerca de nuestra empresa para saber si </span>
                  <p></p>
                  <span
                    class="text-xs black--text subheading justify"
                  >tiene claro algunos aspectos a cerca de ella</span>
                  <p></p>
                </v-card-text>
                <v-card-actions>
                  <v-btn class="white--text" color="blue darken-1" to="/Cliente/preguntas-empresas-cliente" >Siguiente<v-icon right class="material-icons">chevron_right</v-icon></v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
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
    this.$store.commit("SET_LAYOUT", "principal-layout");
    this.getPreguntas();
  },
  data: () => ({
    preguntas: []
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
    contador() {
      var a = 0;
      a++;
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
.imagen2 {
  width: 100%;
  height: 100px;
}
.imagen {
  margin-top: -50px !important;
}
</style>
