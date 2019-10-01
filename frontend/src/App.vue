<template>
    <component :is="layout"></component>
</template>

<script>
import PrincipalLayout from './layout/Principal.vue'
import AdminLayout from './layout/Admin.vue'
import Login from './views/Cliente/Login.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  computed: mapState(['layout']),
  components: {
    PrincipalLayout,
    AdminLayout,
    Login
  }
}
</script>
<style >
  body {
    font-family: 'Roboto', sans-serif !important;
  }
</style>
