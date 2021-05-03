<template>
  <div class="">
    
    <headn />
    <inicio id="inicio" class="animated fadeInDown" />
    <quees id="quees" class="animated fadeInDown" />
    
  </div>
</template>

<script>
import headn from '../resources/header.vue'
import inicio from '../components/inicio.vue'
import quees from '../components/quees.vue'
export default {
  name: 'index',
  components: {
    headn,
    inicio,
    quees
  }
}
</script>

<style scoped>
</style>
