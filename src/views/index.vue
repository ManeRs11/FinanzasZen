<template>
  <div id="inicio" class="index">

    <div class="simplifica animated fadeInDown">
      <div class="block">
        <img class="portada" src="./../assets/img/simplifica.png" alt="">
      </div>
    </div>

    <div class="prioridades animated fadeInUp">

      <div>
        <h3 class="title"><strong>ORDENA TUS PRIORIDADES PARA GANAR MÁS</strong></h3>
      </div>

      <b-container class="circles">
        <b-row>
          <b-col>
            <div class="mb-2">
              <b-avatar src="https://firebasestorage.googleapis.com/v0/b/finanzaszen-e2129.appspot.com/o/zen1.jpeg?alt=media&token=9dce5050-55c5-433c-8703-483cb2285e5f" size="14rem"></b-avatar>
              <div class="footerCircle">
                <h2 class="subtitle"><strong>SEGURIDAD</strong></h2>
                <h5>Con conocimiento para buscar <br> alternativas para escoger</h5>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="mb-2">
              <b-avatar src="https://firebasestorage.googleapis.com/v0/b/finanzaszen-e2129.appspot.com/o/zen2.jpeg?alt=media&token=a26c24e2-bc56-4b8d-909c-35cf31d431da" size="14rem"></b-avatar>
              <div class="footerCircle">
                <h2 class="subtitle"><strong>CLARIDAD</strong></h2>
                <h5>Con herramientas transparentes <br> y gratuitas para comparar</h5>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="mb-2">
              <b-avatar src="https://firebasestorage.googleapis.com/v0/b/finanzaszen-e2129.appspot.com/o/zen3.jpeg?alt=media&token=dfb81356-aea8-4ecf-bd86-b13f98bbb312" size="14rem"></b-avatar>
              <div class="footerCircle">
                <h2 class="subtitle"><strong>CONFIANZA</strong></h2>
                <h5>A través de principios simples <br> que te darán consistencia</h5>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>    
      
    </div>

    <div class="webinar animated fadeInDown">
      <div class="block">
          <h3> 
            <strong class="title">
              WEBINAR PARA INICIARSE COMO INVERSIONISTA <br>
              EN LA BOLSA MEXICANA DE VALORES
            </strong>
          </h3>

          <div class="container questions">
            <b-row style="padding-top:23px">
              <b-col>¿Como empezar con menos de $100,000 MXN?</b-col>
              <b-col>¿Cuando comprar y vender?</b-col>
            </b-row>
            
            <b-row style="padding-top:23px">
              <b-col>¿Donde encuentro un bróker?</b-col>
              <b-col>¿Como armo mi portafolio?</b-col>
            </b-row>

            <b-row style="padding-top:23px">
              <b-col>¿Herramientas para elegir una inversión?</b-col>
              <b-col>¿Como registro mis inversiones para mejorar?</b-col>
            </b-row>

            <div style="padding-top: 23px;">
              <b-button class="inscribete rounded-pill" variant="primary" size="lg" @click="showModal()">
                <strong>
                  ¡ INSCRÍBETE <br> AQUÍ ! 
                </strong>
              </b-button>
            </div>

          </div>
          
      </div>
    </div>

    <div class="include animated fadeInUp">

      <div style="padding-top: 70px;">
        
        <div class="title">
          <strong>
            <h1>¿ QUE INCLUYE ?</h1>
          </strong>
        </div>

        <div class="container info">
          
          <b-row style="padding-top:30px">
            <b-col>&#9899; MAS DE 10 VIDEOS CON INFORMACION ORDENADA</b-col>
            <b-col>&#9899; SESIONES SEMANALES PARA ACLARAR DUDAS</b-col>
          </b-row>
          <b-row style="padding-top:30px">
            <b-col>&#9899; MAS DE 11 FUENTES GRATUITAS EN INTERNET ÚTILES INVESTIGAR INVERSIONES EN MÉXICO</b-col>
            <b-col>&#9899; SUSCRIPCIÓN A WHATSAPP Y FORO PRIVADO PARA RESOLVER POSTERIORES DUDAS Y TIPS EXCLUSIVOS</b-col>
          </b-row>
          <b-row style="padding-top:30px">
            <b-col>&#9899; DIARIO EN EXCEL PARA DAR SEGUIMIENTO A CADA INVERSIÓN PARA MEJORAR ESTRATEGIAS</b-col>
            <b-col>&#9899; ENLACES PARA CONSULTAR PORTAFOLIOS DE ETF'S</b-col>
          </b-row>

        </div>

        <div class="ebook">
          <b-button style="padding:30px;" class="rounded-pill" variant="dark" size="lg"> <strong>E-BOOK</strong> <br> ! Descarga Gratuita ¡</b-button>
        </div>
      </div>


    </div>

    <div class="contact animated fadeInDown">
      <div class="container" style="padding-top: 70px; padding-button: 70px;">
        

        <b-row style="padding-top:23px">
          <b-col>
            <div>
              <div>
                <img style="float: left;" class="logo" src="./../assets/logos/FinanzazZenLogo2.png" alt=""> 
              </div>

              <div class="data">

                <div class="title">
                  <h3> <strong>CONTACTO</strong> </h3>
                </div>

                <b-row style="padding-top:23px">
                  
                  <b-col>
                    <div class="subtitle">
                      <h3>FACEBOOK</h3>
                    </div>
                    <div class="subdata">
                      <a :href="facebook" target="_blank">{{facebook}}</a>
                    </div>
                  </b-col>
                  
                </b-row>
          
                <b-row style="padding-top:23px">
                  
                  <b-col>
                    <div class="subtitle">
                      <h3>EMAIL</h3>
                    </div>
                    <div class="subdata">
                      <a :href="'mailto:' + mail ">{{mail}}</a>
                    </div>
                  </b-col>
                  
                </b-row>

                <b-row style="padding-top:23px">
                  
                  <b-col>
                    <div class="subtitle">
                      <h3>WHATSAPP</h3>
                    </div>
                    <div class="subdata">
                      <a :href="'https://wa.me/'+ whatsappNum +'?text=' + whatsappTxt " target="_blank">{{whatsappNumParse}}</a>
                    </div>
                  </b-col>
                  
                </b-row>

              </div>

            </div>
          </b-col>
          <b-col>
            <div>
              <img class="alan" src="./../assets/img/contacto.png" alt="">
            </div>
          </b-col>
        </b-row>

      </div>
    </div>


    <div v-if="modalSh" class="floatModals">
      <register v-bind:modal="modalSh" />
    </div>
  </div>
</template>

<script>

import register from '../components/register.vue'
export default {
  name: 'index',
  components: {
    register
  },
  methods: {
    async showModal () {
      if (!this.modalSh) {
        this.modalSh = true
      } else {
        this.modalSh = await false
        this.modalSh = await true
      }
    },
    async hideModal () {
      this.modalSh = false
    }
  },
  data: function () {
    return {
      modalSh: false,
      whatsappNum: '+5214423475712',
      whatsappNumParse: '+52 1 (442) 347 5712',
      whatsappTxt: 'Hola estoy interesado en tomar el curso de Finanzas Zen',
      mail: 'contacto@finanzaszen.com',
      facebook: 'https://www.facebook.com/finanzaszen'
    }
  }
}
</script>

<style scoped>


@media (max-width:768px) and (orientation : portrait) {
    .simplifica .portada {
      padding: 0px 0px 0px 30px !important;
      width: 410px !important;
      padding-bottom: 30px !important;
    }
    .simplifica .block {
      padding-top: 100px !important;
    }


    .prioridades {
      background-image: url("./../assets/img/portada.png");
      background-repeat: no-repeat;
      color: #ffffff;
      padding-top: 30px !important;
      padding-bottom: 0px !important;
      width: 440px !important;
    }
    .prioridades .circles {
      padding-top: 10px !important;
    }
    .prioridades .title {
      font-size: 21px !important;
    }
    .prioridades .subtitle {
      font-size: 20px !important;
    }
    .prioridades .footerCircle {
      padding-top: 30px !important;
    }


    
    .webinar {
      width: 440px !important;
    }
    .webinar .block {
      padding-top: 40px !important; 
      padding-bottom: 40px !important;
    }
    .webinar .title {
      font-size: 20px !important;
    }
    .webinar .inscribete {
      width: 90% !important;
    }
    .webinar .row {
      display: flow-root !important;
    }
    .webinar .row .col {
      padding-bottom: 30px !important;
    }

    .include {
      width: 440px !important;
    }
    .include .row {
      display: flow-root !important;
    }
    .include .row .col {
      padding-bottom: 30px !important;
    }

    .contact {
      width: 440px !important;
    }
    .contact .logo {
      width: 390px !important;
    }
    .contact .alan {
      width: 100% !important; 
      float: right;
    }

    .b-avatar {
      width: 12rem !important;
      height: 12rem !important;
    }
}


.simplifica .portada {
  width: 1024px;
}
.simplifica .block {
  padding-top: 150px;
}

.prioridades {
  background-image: url("./../assets/img/portada.png");
  background-repeat: no-repeat;
  color: #ffffff;
  padding-top: 100px;
  padding-bottom: 80px;
}
.prioridades .circles {
  padding-top: 57px;
}
.prioridades .footerCircle {
  padding-top: 60px;
}
.prioridades .title {
  font-size: 40px;
}
.prioridades .subtitle {
  font-size: 35px;
}
.webinar .block {
  padding-top: 70px; 
  padding-bottom:40px
}
.webinar .inscribete {
  width: 30%;
  font-size: 23px;
  padding: 30px;
  margin-top: 23px;
}
.webinar .questions {
  padding-top: 20px;
  font-size: 23px;
  font-weight: bolder;
}
.webinar .btn-primary {
  color: #fff;
  background-color: #0ba3ad;
  border-color: #0ba3ad;
}
.webinar .title {
  color: #0ba3ad; 
  font-weight: bold
}
.include {
  background-image: url("./../assets/img/wall2.jpg");
  background-repeat: no-repeat;
  color: #ffffff;
  padding-bottom: 80px;
}
.include .title {
  color: #000000; 
  font-weight: bolder;
}
.include .info {
  padding-top: 30px;
  font-weight: bolder;
  color: #000000;
  text-align: left;
  font-size: 18px;
}
.include .ebook {
  padding-top: 50px;;
}

.include .btn-dark {
  color: #fff;
  background-color: #000000;
  border-color: #000000;
}

.contact {
  padding-bottom: 10px;
}
.contact .title {
  text-align: left;
  color: rgb(35, 177, 186);
  padding-bottom: 30px;
  text-decoration: underline;
}
.contact .logo {
  width: 373px;
}
.contact .alan {
  width: 130%; 
  float: right;
} 
.contact .subtitle {
  text-align: left;
  color: #000000;
  font-weight: bold;
}
.contact .subdata {
  text-align: left;
  font-weight: bold;
  color: #23b1ba;
}
.contact .data {
  padding-top: 170px;;
}
</style>
