<template>
  <div>
    <v-container fluid>
      <v-layout wrap>
        <v-flex xs12 sm12 md12>
          <img :src="iconsecont" class="iconseacont" />
        </v-flex>
        <v-flex xs12 sm6 md6>
          <img :src="seacont" class="seacont" />
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-card flat>
            <v-card-title class="display-1"></v-card-title>
            <v-card-text
              class="font-weight-bold"
            >La empresa Servicio y Asesorias SEACONT S.A.S., está ubicada en la cra 8 n 4-6 de Chima Santander, tiene como objeto social principal, actividades de contabilidad, teneduría de libros, auditoría financiera y asesoría tributaria, fue creada por 2 contadores y un ingeniero financiero el 10 de Septiembre de 2014, tal como consta en el certificado de la cámara de comercio de Santander, con un patrimonio inicial de $30.000.000, los dos contadores tienen una participación del 40% respectivamente y el ingeniero financiero un 20%.</v-card-text>
          </v-card>
        </v-flex>
        <v-card>
          <v-layout justify-center>
            <v-flex d-flex xs12 sm6 md6>
                <v-card>
              <v-card-title class="display-1 margen">Misión</v-card-title>
              <v-card-text
                class="font-weight-bold"
              >Nos dedicamos a la prestación de servicios profesionales en las áreas contable, laboral, tributaria y financiera, cumpliendo normatividad, principios generalmente aceptados, pronunciamientos, conceptos, entre otros, y ofreciendo un servicio eficiente, confiable y oportuno, en permanente búsqueda de entregar soluciones integrales que satisfagan las necesidades de nuestros clientes, de tal forma que encuentren en la firma un aliado estratégico en su desarrollo empresarial.</v-card-text>
                </v-card>
            </v-flex>
             <v-flex xs12 sm6 md6>
                <v-card>
              <v-card-title class="display-1 margen">Misión</v-card-title>
              <v-card-text
                class="font-weight-bold"
              >Nos dedicamos a la prestación de servicios profesionales en las áreas contable, laboral, tributaria y financiera, cumpliendo normatividad, principios generalmente aceptados, pronunciamientos, conceptos, entre otros, y ofreciendo un servicio eficiente, confiable y oportuno, en permanente búsqueda de entregar soluciones integrales que satisfagan las necesidades de nuestros clientes, de tal forma que encuentren en la firma un aliado estratégico en su desarrollo empresarial.</v-card-text>
                </v-card>
            </v-flex>
          </v-layout>
        </v-card>
        <v-flex xs12 sm6 md6>
          <v-card>
            <v-card-title class="display-1">Visión</v-card-title>
            <v-card-text
              class="font-weight-bold"
            >Ser reconocida en el 2020 en Santander como una de las principales firmas prestadoras de servicios profesionales de consultoría; en las áreas contables y tributarias, mediante la investigación y el desarrollo permanente de competencias en nuestro recurso humano y tecnológico, siendo un aliado estratégico de nuestros clientes para alcanzar sus objetivos, brindando un continuo valor agregado, al acompañarlo en su gestión.</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import seacont from "@/assets/seacont.jpg";
import iconsecont from "@/assets/Modelamiento sw.png";
export default {
  created() {},
  data: () => ({
    seacont: seacont,
    iconsecont: iconsecont
  }),
  methods: {}
};
</script>
<style scoped>
.group {
  margin-left: 15px;
}
.text {
  color: white;
}
.seacont {
}
.iconseacont {
  height: 50px;
  width: 280px;
}
.mmargen {
  margin-right: 50px;
}
</style>
