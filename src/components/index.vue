<template>
  <div class="index">

    <div class="simplifica animated fadeInDown">
      <div style="padding-top: 150px;">
        <img class="portada" src="./../assets/img/simplifica.png" alt="">
      </div>
    </div>

    <div class="prioridades animated fadeInDown">

      <div style="padding-top: 100px; padding-bottom:40px">
        <h3> <strong>ORDENA TUS PRIORIDADES PARA GANAR MÁS</strong></h3>
      </div>

      <b-container class="circles">
        <b-row>
          <b-col>
            <div class="mb-3">
              <b-avatar src="./../assets/img/seguridad.jpeg" size="14rem"></b-avatar>
              <div class="footerCircle">
                <h4><strong>SEGURIDAD</strong></h4>
                <p>Con conocimiento para buscar <br> alternativas para escoger</p>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="mb-3">
              <b-avatar src="./../assets/img/claridad.jpeg" size="14rem"></b-avatar>
              <div class="footerCircle">
                <h4><strong>CLARIDAD</strong></h4>
                <p>Con herramientas transparentes <br> y gratuitas para comparar</p>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="mb-3">
              <b-avatar src="./../assets/img/confianza.jpeg" size="14rem"></b-avatar>
              <div class="footerCircle">
                <h4><strong>CONFIANZA</strong></h4>
                <p>A través de principios simples <br> que te darán consistencia</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>    
      
    </div>

    <div class="webinar animated fadeInDown">
      <div style="padding-top: 100px; padding-bottom:40px">
          <h3> <strong>WEBINAR PARA INICIARSE COMO INVERSIONISTA</strong></h3> <br>
          <h3> <strong>EN LA BOLSA MEXICANA DE VALORES</strong></h3>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'index',
  components: {
  }
}
</script>

<style scoped>

.simplifica .portada {
  width: 1024px;
}
.prioridades {
  background-image: url("./../assets/img/portada.png");
  background-repeat: no-repeat;
  color: #ffffff;
  padding-bottom: 80px;
}
.prioridades .circles {
  padding-top: 57px;
}
.prioridades .footerCircle {
  padding-top: 60px;
}

</style>
