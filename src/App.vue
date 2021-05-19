<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <headn />
    <router-view/>
    <footern />
    
  </div>
</template>

<script>
import headn from './components/headn.vue'
import footern from './components/footern.vue'
export default {
  name: 'App',
  components: {
    headn,
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
}

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"), url(./assets/fonts/Montserrat/Montserrat-Light.ttf) format("truetype");
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
