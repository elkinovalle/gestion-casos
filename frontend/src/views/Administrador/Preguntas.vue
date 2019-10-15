<template>
  <div>
    <br />
    <br />
    <div class=" centro">Preguntas</div>
    <v-form ref="form" class="form">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-combobox v-model="editedItem.Tema" :items="temaItems" label="Tema"></v-combobox>
          </v-flex>
          <v-flex xs12 sm6>
            <v-combobox v-model="editedItem.correcta" :items="correctaIt" label="Respuesta Correcta"></v-combobox>
          </v-flex>
          <v-flex xs12 sm6>
            <v-textarea v-model="editedItem.Pregunta" box label="Pregunta" clearable ></v-textarea>
          </v-flex>

          <v-flex xs12 sm6>
            <v-textarea v-model="editedItem.A" box label="Respuesta A" clearable></v-textarea>
          </v-flex>
          <v-flex xs12 sm4>
            <v-textarea v-model="editedItem.B" box label="Respuesta B" clearable></v-textarea>
          </v-flex>
          <v-flex xs12 sm4>
            <v-textarea v-model="editedItem.C" box label="Respuesta C" clearable></v-textarea>
          </v-flex>
          <v-flex xs12 sm4>
            <v-textarea v-model="editedItem.contexto" box label="Contexto" clearable></v-textarea>
          </v-flex>
          

          <v-flex xs12 sm6>
            <v-btn
              color="green darken-4"
              class="botones white--text headline"
              @click="save"
            >{{ btnText }}</v-btn>
            <v-btn
              color="red darken-4"
              class="botones white--text headline"
              @click="resetForm"
            >Cancelar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md12>
          <v-card color="blue darken-4">
            <v-card-title color="blue darken-4">
              <v-toolbar-title class="titulo2">Preguntas</v-toolbar-title>
              <v-divider class="mx-2" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Buscar"
                hide-details
                single-line
                color="accent"
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="preguntas" :search="search" class="elevation-1">
              <template v-slot:items="props">
                <td class="text-xs-center">{{ props.item.Tema }}</td>
                <td class="text-xs-left">{{ props.item.Pregunta }}</td>
                <td class="text-xs-left">{{ props.item.A }}</td>
                <td class="text-xs-left">{{ props.item.B }}</td>
                <td class="text-xs-left">{{ props.item.C }}</td>
                <td class="text-xs-left">{{ props.item.contexto }}</td>
                <td class="text-xs-left">{{ props.item.correcta }}</td>
                <td class="justify-center layout px-0">
                  <v-btn
                    class="font-weight-black white--text body-2"
                    color="blue darken-1"
                    @click="editItem(props.item)"
                  >Editar</v-btn>
                  <v-btn
                    class="font-weight-black white--text body-2"
                    color="red darken-4"
                    @click="deleteItem(props.item)"
                  >Eliminar <v-icon class="material-icons">delete</v-icon></v-btn>
                </td>
              </template>
              <v-alert
                v-slot:no-results
                :value="true"
                color="error"
                icon="warning"
              >Tu busqueda para "{{ search }}" no se encontró</v-alert>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>

import uuid from "uuid/v4";
import api from "@/plugins/service";
import { mapState } from "vuex";
import Swal from "sweetalert2";
export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
    this.getPreguntas();
  },
  data: () => ({
    dialog: false,
    Tema: "",
    temaItems: [
      "PRESUPUESTO",
      "SERV. AL CLIENTE",
      "CONTAB. Y FINANZAS",
      "PROYECTOS",
    ],
    correcta: '',
    correctaIt: [
      'A','B','C'
    ],
    search: "",
    btnText: "Agregar Pregunta",
    headers: [
      {
        text: "Tema",
        align: "center",
        sortable: false,
        value: "Tema"
      },
      { text: "Pregunta", value: "Pregunta" },
      { text: "Respuesta A", value: "A" },
      { text: "Respuesta B", value: "B" },
      { text: "Respuesta C", value: "C" },
      { text: "Contexto", value: "contexto" },
      { text: "Correcta", value: "correcta" }
    ],
    editedIndex: -1,
    editedItem: {
      Tema: "",
      Pregunta: "",
      A: "",
      B: "",
      C: "",
      contexto: "",
      correcta: ""
    },
    defaultItem: {
     Tema: "",
      Pregunta: "",
      A: "",
      B: "",
      C: "",
      contexto: "",
      correcta: ""
    },
  }),

  computed: {
    ...mapState(["preguntas"]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Editar Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    async getPreguntas() {
      const { data: preguntas } = await api.get("/pregunta");
      this.$store.commit("SET_PREGUNTAS", preguntas);
    },
    resetForm() {
      this.editedItem = {};
    },
    async save() {
      if (this.btnText === "Agregar Pregunta") {
        const { data: pregunta } = await api.post("/pregunta", {
          preguntaNew: {
            Tema: this.editedItem.Tema,
            Pregunta: this.editedItem.Pregunta,
            A: this.editedItem.A,
            B: this.editedItem.B,
            C: this.editedItem.C,
            contexto: this.editedItem.contexto,
            correcta: this.editedItem.correcta
          }
        });
        let clonPreguntas = [...this.preguntas];
        clonPreguntas.push(pregunta);
        this.$store.commit("SET_PREGUNTAS", clonPreguntas);
        this.snackbar = true;
        this.resetForm();
      } else {
        
        const { data: pregunta } = await api.put(`/pregunta/${this.editedItem.uuid}`, {
         preguntaUpdate: {
            Tema: this.editedItem.Tema,
            Pregunta: this.editedItem.Pregunta,
            A: this.editedItem.A,
            B: this.editedItem.B,
            C: this.editedItem.C,
            contexto: this.editedItem.contexto,
            correcta: this.editedItem.correcta
          }
        });
         let clonPreguntas = [...this.preguntas]
        clonPreguntas[this.editedIndex] = pregunta
        this.$store.commit('SET_PREGUNTAS', clonPreguntas)
        this.btnText = 'Agregar Pregunta'
        this.resetForm()
      }
    },
    
   
    initialize() {
      this.preguntas = [
        {
          Tema: "",
          Pregunta: "",
          A: "",
          B: "",
          C: "",
          contexto: "",
          correcta: ""
        }
      ];
    },
    editItem(item) {
      this.btnText = "Actualizar";
      this.editedIndex = this.preguntas.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    async deleteItem(item) {
      const sw = await Swal.fire({
        title: "Estas seguro?",
        text: `Eliminaras la pregunta ${item.Pregunta}`,
        type: "question",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar"
      });
      if (sw.value) {
        try {
          const { data: pregunta } = await api.delete(`/pregunta/${item.uuid}`);
          Swal.fire("Eliminado!", "La pregunta se elimino exitosamente", "success");
          let clonPreguntas = [...this.preguntas];
          const index = this.preguntas.indexOf(item);
          clonPreguntas.splice(index, 1);
          this.$store.commit("SET_PREGUNTAS", clonPreguntas);
        } catch (error) {
          console.error(error);
        }
      }
      // const { data: plan } = await api.delete(`/plan/${item.uuid}`)
      // const index = this.plans.indexOf(item)
      // confirm('¿Estás seguro que deseas elimiar este plan?') && this.plans.splice(index, 1)
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    }
  }
};
</script>
<style lang="stylus" scoped>


.container.fill-height {
  background-color: white;
}

.imagenq {
  width: 150px !important;
  height: 150px !important;
  margin: 0px 0px 0px -100px;
  border-radius: 0%;
}

.boton {
  margin: 110px 110px 0px 0px;
}


.titulo2 {
  color: white !important;
}

.centro {
  text-align: center !important;
  font-size 40px
  font-family 'Times New Roman', Times, serif
}

</style>
