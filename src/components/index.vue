<template>
  <div class="">
    
    <headn />
    <simplifica class="animated fadeInDown" />
    <inicio id="inicio" class="animated fadeInDown" />
    <quees id="quees" class="animated fadeInDown" />
    
  </div>
</template>

<script>
import headn from '../resources/header.vue'
import inicio from '../components/inicio.vue'
import simplifica from '../components/simplifica.vue'
import quees from '../components/quees.vue'
export default {
  name: 'index',
  components: {
    headn,
    inicio,
    quees,
    simplifica
  }
}
</script>

<style scoped>
</style>
