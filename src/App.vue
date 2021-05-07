<template>
  <div id="app">
    <headn />
    <index/>
  </div>
</template>

<script>
import headn from './resources/header.vue'
import index from './components/index.vue'

export default {
  name: 'App',
  components: {
    headn,
    index
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
