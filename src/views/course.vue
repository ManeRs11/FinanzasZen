<template>
  <div class="course">

    <div class="container">

      <div style="padding: 20px;">
        <h1><strong>TEMARIO</strong></h1>
      </div>

      <div style="padding: 20px;">

        <b-row class="animated fadeInLeft">
            <b-col class="border rounded squareSeq shadow">
                <strong class="title">Módulo #1</strong> <br><br>
                <p> 
                  <strong>
                    La Bolsa Mexicana de Valores. Sus participantes; nuestro papel como inversionistas; Inflación; índice
                  </strong>
                </p>
            </b-col>
            <b-col class="border rounded squareSeq shadow">
                <strong class="title">Módulo #2</strong> <br><br>
                <p> 
                  <strong>
                    Casa de Bolsa. Abre tu cuenta; Enlazar tus cuentas; realizar tu primer depósito; Estado de Cuenta; Retiros a tu cuenta.
                  </strong>
                </p>
            </b-col>
            <b-col class="border rounded squareSeq shadow">
                <strong class="title">Módulo #3</strong> <br><br>
                <p> 
                  <strong>
                    Índices, Sectores y ETF.  
                  </strong>
                </p>
            </b-col>
        </b-row>

        <hr>

        <b-row class="animated fadeInRight">
            <b-col class="border rounded squareSeq shadow">
                <strong class="title">Módulo #4</strong> <br><br>
                <p> 
                  <strong>
                    Plan Financiero. Identificar el Capital para invertir; Rastrear ETF; Ventanas de Oportunidad; Duración; Riesgo; y Recompensas.
                  </strong>
                </p>
            </b-col>
            <b-col class="border rounded squareSeq shadow">
                <strong class="title">Módulo #5</strong> <br><br>
                <p> 
                  <strong>
                    <code>Primer Acto</code>: <br> La Compra. Orden; precio, títulos, tiempo, registro
                  </strong>
                </p>
            </b-col>
            <b-col class="border rounded squareSeq shadow">
                <strong class="title">Módulo #6</strong> <br><br>
                <p> 
                  <strong>
                    <code>Segundo Acto</code>: <br> La Espera. Seguimiento del plan, registro de dividendos, Splits, Fuentes de noticias.
                  </strong>
                </p>
            </b-col>
        </b-row>

        <hr>

        <b-row class="animated fadeInLeft">
            <b-col class="border rounded squareSeq shadow">
                <strong class="title">Módulo #7</strong> <br><br>
                <p> 
                  <strong>
                    <code>Tercer Acto</code>: <br> La Venta. Revisar plan, Stop Loss, Take Profit, Registro Final
                  </strong>
                </p>
            </b-col>
            <b-col class="border rounded squareSeq shadow">
                <strong class="title">Módulo #8</strong> <br><br>
                <p> 
                  <strong>
                    <code>Kaizen</code>: <br> Registro de Avance, Análisis.
                  </strong>
                </p>
            </b-col>
        </b-row>



        <div style="padding-top: 23px;">
          <b-button class="inscribete rounded-pill" variant="primary" size="lg" @click="showModal()">
            <strong>
              ¡ INSCRÍBETE <br> AQUÍ ! 
            </strong>
          </b-button>
        </div>

        <div v-if="modalSh" class="floatModals">
          <register v-bind:modal="modalSh" />
        </div>

      
      </div>
    </div>


  </div>
</template>

<script>
import register from '../components/register.vue'
export default {
  name: 'course',
  data: function () {
    return {
      modalSh: false
    }
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
  components: {
    register
  }
}
</script>

<style scoped>
@media (max-width:850px) and (orientation : landscape) {
  .course {
    padding-top: 100px !important;
    width: 850px !important;
  }
  .course .inscribete {
    width: 90% !important;
  }
  .container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
    padding-right: 35px;
  }
}
@media (max-width:768px) and (orientation : portrait) {
  .course {
    padding-top: 100px !important;
    width: 440px !important;
  }
  .course .inscribete {
    width: 90% !important;
  }
  .container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
    padding-right: 35px;
  }
}

.course {
  padding-top: 140px;
  padding-bottom: 40px;
}

.course .title {
    font-size: 20px;
    color: rgb(0, 156, 164);
    font-weight: bolder;
}
.course .squareSeq {
    margin: 10px;
    text-align: center;
    padding-top: 13px;
    padding-bottom: 13px;;
}

.course .inscribete {
  width: 30%;
  font-size: 23px;
  padding: 30px;
  margin-top: 23px;
}

.course .btn-primary {
  color: #fff;
  background-color: #0ba3ad;
  border-color: #0ba3ad;
}

.course .shadow {
  box-shadow: cadetblue;
}
  
</style>
