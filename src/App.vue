<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    
    <headn />
    <index />
    <footern />
    
  </div>
</template>

<script>
import headn from './resources/headn.vue'
import index from './components/index.vue'
import footern from './resources/footern.vue'

export default {
  name: 'App',
  components: {
    headn,
    index,
    footern
  }
}
</script>

<style>

#app {
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"), url(./assets/fonts/Montserrat/Montserrat-Light.ttf) format("truetype");
}
</style>
