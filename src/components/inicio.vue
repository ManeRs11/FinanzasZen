<template>
  <div class="finzen">

    <div style="padding-top: 140px; padding-bottom:40px">
      <h3> <strong>SIMPLIFICA TUS INVERSIONES</strong></h3>
    </div>

    <b-container class="circles">
      <b-row>
        <b-col>
          <div class="mb-3">
            <b-avatar src="https://placekitten.com/300/300" size="14rem"></b-avatar>
            <div class="footerCircle">
              <h4>SEGURIDAD</h4>
              <p>Con conocimiento para buscar alternativas para escoger</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="mb-3">
            <b-avatar src="https://placekitten.com/300/300" size="14rem"></b-avatar>
            <div class="footerCircle">
              <h4>CLARIDAD</h4>
              <p>Con herramientas, transparentes y gratuitas para comparar</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="mb-3">
            <b-avatar src="https://placekitten.com/300/300" size="14rem"></b-avatar>
            <div class="footerCircle">
              <h4>CONFIANZA</h4>
              <p>A traves de principios simples que te daran consistencia</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>    
    
  </div>
</template>

<script>
export default {
  name: 'inicio'
}
</script>

<style scoped>

.finzen {
   background-image: url("./../assets/portada.png");
   color: #ffffff;

}

.circles {
  padding-top: 57px;
}
.footerCircle {
  padding-top: 60px;
}
  
</style>
