<template>
  <div class="register">
    <b-modal size="lg" ref="modal" id="modal" v-model="showModall" data-backdrop=”static” data-keyboard=”false” tabindex=”-1″ hide-footer hide-header>
        <div style="padding-top: 20px;">
            
            <form-wizard ref="wizard"
                :start-index="0"
                color="#11a199"
                title="¡Quiero Prosperar!"
                subtitle="Finanzas Zen">

                <tab-content title="Datos Personales">

                    <div style="padding-bottom: 20px; font-weight: bold;">Completa tu inscripción para que empieces a generar ingresos financieros de manera clara, simple y ordenada</div>

                        <form>

                            <div style="padding-bottom: 20px;">
                                <b-form-input v-model="usuario.nombre" placeholder="Ingresa tu nombre completo"></b-form-input>
                                <div class="mt-2"><span style="color: red;">*</span> Nombre: <span style="color: #e83e8c">{{ usuario.nombre }}</span> </div>
                            </div>
                            
                            <div style="padding-bottom: 20px;">
                                <b-form-input v-model="usuario.email" placeholder="Ingresa tu correo electrónico"></b-form-input>
                                <div class="mt-2"><span style="color: red;">*</span> Correo: <span style="color: #e83e8c">{{ usuario.email }}</span> </div>
                            </div>

                            <div style="padding-bottom: 20px;">
                                <b-form-input v-model="usuario.telephone" placeholder="Ingresa tu número de WhatsApp"></b-form-input>
                                <div class="mt-2"><span style="color: red;">*</span> WhatsApp: <span style="color: #e83e8c">{{ usuario.telephone }}</span> </div>
                            </div>

                        </form>
                    
                    <span style="font-weight: bold;">Tus datos privados son utilizados únicamente para enviarte información de valor y apoyarte en caso de dudas.</span>

                </tab-content>

                <tab-content title="Aparta tu lugar">
                    <div style="padding-top:0px; padding-bottom: 0px;">

                        <div style="text-align: center; font-size: 33px; color: #11a199;">
                            <div style="padding-bottom: 20px;">
                                <h4 style="font-size: 18px;">¡ LUGAR APARTADO !</h4>
                            </div>
                        </div>

                        <div style="padding-bottom: 20px;">
                            Estás a un paso de ser un Inversionista Zen y recibirás una invitación a la comunidad privada, 
                            sin embargo el cupo es limitado y para poder participar en el webinar es importante que realices 
                            el pago de tu suscripción. A continuación te dejo las siguientes alternativas:
                        </div>

                        <div class="row">
                            <div class="w-50 p-3 mb-1 text-dark" style="padding-bottom: 0px !important;">
                                <div style="font-size: 17px; padding-bottom: 10px;"> <strong>Opciones de Pagos</strong> </div>
                                <b-form-group label="" v-slot="{ ariaDescribedby }">
                                    <b-form-radio-group
                                        v-model="selected"
                                        :options="options"
                                        :aria-describedby="ariaDescribedby"
                                        name="radios-stacked"
                                        stacked>
                                    </b-form-radio-group>
                                </b-form-group>
                            </div>

                            <div class="w-50 p-3 mb-1 text-dark" style="padding-bottom: 0px !important;">
                                <div style="font-size: 17px; padding-bottom: 10px;"> <strong>Desglose</strong> </div>
                                <div>
                                    1 Pago <code>$1713.00</code>  IVA 16% = <code>$1987.08</code> <br>
                                    2 pagos <code>$942.12</code> IVA 16% = <code>$1092.8592</code> x 2 <br>
                                    3 Pagos <code>$697.05</code> IVA 16% = <code>$808.58</code> x 3 <br>
                                </div>
                            </div>

                            <div class="w-100 p-3 mb-1 text-dark" style="padding-bottom: 0px;">
                                
                                <b-row>
                                    <b-col class="border border-warning rounded squareSeq">
                                        <strong>Privacidad</strong><br>
                                        <span>Tu información esta 100% segura</span>
                                    </b-col>
                                    <b-col class="border border-warning rounded squareSeq">
                                        <strong>Compra Segura</strong><br>
                                        <span>Ambiente seguro y autenticado</span>
                                    </b-col>
                                    <b-col class="border border-warning rounded squareSeq">
                                        <strong>Entrega por E-Mail</strong><br>
                                        <span>Acceso al producto entregado</span>
                                    </b-col>
                                </b-row>
                                
                            </div>
                        </div>
  
                    </div>
                </tab-content>

                <template slot="footer" slot-scope="props">
                    <div class=wizard-footer-left>
                        <wizard-button  
                            v-if="props.activeTabIndex > 0 && !props.isLastStep" 
                            :style="props.fillButtonStyle">
                                Anterior
                        </wizard-button>
                    </div>

                    <div class="wizard-footer-right">
                        <wizard-button 
                            v-if="!props.isLastStep" 
                            @click.native="nextTabb(props.activeTabIndex)" 
                            class="wizard-footer-right" 
                            :style="props.fillButtonStyle">
                                Siguiente
                        </wizard-button>
                        
                        <wizard-button 
                            v-else 
                            @click.native="onComplete()" 
                            class="wizard-footer-right finish-button" 
                            :style="props.fillButtonStyle">
                                {{props.isLastStep ? 'Comprar' : 'Siguiente'}}
                        </wizard-button>
                    </div>
                    
                </template>

            </form-wizard>

        </div>
    </b-modal>
  </div>
</template>

<script>

// import correo from '../services/correos.js'
export default {
  name: 'register',
  props: ['modal'],
  mounted () {
      this.init()
  },
  methods: {
    async init () {
    },
    async onComplete () {
    },
    async nextTabb ( index ) {
        if ( index === 0 ) {
            this.$refs['wizard'].nextTab()
            console.log('Mandar Correo')
        } else {
            this.$refs['wizard'].nextTab()
        }
    }
  },
  data: function () {
      return {
          showModall: this.modal,
          usuario: {
            nombre: '',
            email: '',
            telephone: '',
          },
          selected: 'first',
          options: [
            { text: 'Pago Contado:         $1,987.08' , value: 'first' },
            { text: 'Pago Cargo 2 meses:   $1,092.85',  value: 'second' },
            { text: 'Pago Cargo 3 meses:   $808.58',    value: 'third' }
          ]
      }
  }
}
</script>

<style scoped>

.notFound {
  padding-top: 140px;
  padding-bottom: 40px;
}

.squareSeq {
    margin: 10px;
    font-weight: lighter;
    text-align: center;
    font-size: 13px;
    padding-top: 13px;
    padding-bottom: 13px;;
}
  
</style>
