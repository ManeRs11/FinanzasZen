<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import index from './components/index.vue'

export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>

#app {
  font-family: "Vonique";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

@font-face {
  font-family: "Vonique";
  src: local("Vonique"), url(./assets/fonts/vonique_92/Vonique92_D.otf) format("truetype");
}
</style>
