<template>
  <div>

      <div>
        <b-navbar fixed="top" toggleable="lg" type="info" variant="info" class="border-bottom">
          <div class="container">
            <b-navbar-brand href="#">
              <img src="./../assets/logos/FinanzazZenLogo.png" style="width: 222px;" alt="">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
             <b-collapse id="nav-collapse" is-nav>              
              <b-navbar-nav class="ml-auto">
                <b-nav-form>

                  <b-nav-item><router-link to="/"><strong>Inicio</strong></router-link></b-nav-item>
                  <b-nav-item><router-link to="/about"><strong>¿Que es Finanzas Zen?</strong></router-link></b-nav-item>
                  <b-nav-item><router-link to="/course"><strong>Temario</strong></router-link></b-nav-item>
                  <b-nav-item><router-link to="/blog"><strong>Blog</strong></router-link></b-nav-item>
                  
                </b-nav-form>
              </b-navbar-nav>
             </b-collapse>
          </div>
        </b-navbar>
      </div>
        

  </div>
</template>

<script>
export default {
  name: 'headn'
}
</script>

<style scoped>
.bg-info {
    background-color: #ffffff !important;
    color: #012d33 !important;
}
a {
    color: #0ba3ad;
    text-decoration: none;
    background-color: transparent;
}
a:hover {
    color: #0ba3ad;
    text-decoration: none;
    background-color: transparent;
}

</style>
