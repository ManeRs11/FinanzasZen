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
                                <span v-show="errors.has('nombre')" class="is-invalid">El nombre es requerido *</span>
                                <input 
                                    name="nombre" 
                                    placeholder="Ingresa tu nombre completo" 
                                    v-model="form.nombre"
                                    v-validate="'required'" type="text"
                                    class="form-control form-control-sm"
                                    :class="{
                                        'is-invalid': errors.has('nombre')
                                    }">
                                    
                                <div class="mt-2"><span style="color: red;">*</span> Nombre: <span style="color: #e83e8c">{{ form.nombre }}</span> </div>
                            </div>
                            
                            <div style="padding-bottom: 20px;">
                                <span v-show="errors.has('email')" class="is-invalid">El email es requerido *</span>
                                <input 
                                    name="email" 
                                    placeholder="Ingresa tu correo electronico" 
                                    v-model="form.email"
                                    v-validate="'required'" type="email"
                                    class="form-control form-control-sm"
                                    :class="{
                                        'is-invalid': errors.has('email')
                                    }">
                                <div class="mt-2"><span style="color: red;">*</span> Correo: <span style="color: #e83e8c">{{ form.email }}</span> </div>
                            </div>

                            <div style="padding-bottom: 20px;">
                                <span v-show="errors.has('whats')" class="is-invalid">El WhatsApp es requerido *</span>
                                <input 
                                    name="whats" 
                                    placeholder="Ingresa tu número de WhatsApp" 
                                    v-model="form.telephone"
                                    v-validate="'required'" type="number" 
                                    class="form-control form-control-sm"
                                    :class="{
                                        'is-invalid': errors.has('whats')
                                    }">
                                <div class="mt-2"><span style="color: red;">*</span> WhatsApp: <span style="color: #e83e8c">{{ form.telephone }}</span> </div>
                            </div>

                            <div style="padding-bottom: 20px;">
                                <span v-show="errors.has('verifica')" class="is-invalid">El captcha es requerido *</span>
                                <vue-recaptcha name="verifica" class="verifica"
                                    ref="recaptcha"
                                    @verify="onVerify()"
                                    sitekey="6LeuZVEbAAAAABOx-FxWVJj_utfd1H0iJhUQPW4M" 
                                    :loadRecaptchaScript="true">
                                </vue-recaptcha>
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
                                    2 pagos <code>$942.12</code> IVA 16% = <code>$1092.85</code> x 2 MSI <br>
                                    <!-- 3 Pagos <code>$697.05</code> IVA 16% = <code>$808.58</code> x 3 MSI <br> -->
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

                <template :ref="props.reset()" slot="footer" slot-scope="props">
                    <div class=wizard-footer-left>
                        <wizard-button
                            @click.native="onComplete()"
                            :style="props.fillButtonStyle">
                                Cerrar
                        </wizard-button>
                    </div>

                    <div class="wizard-footer-right">
            
                        <wizard-button 
                            v-if="!props.isLastStep" 
                            @click.native="validateForm(props)"
                            class="wizard-footer-right" 
                            :disabled="disabled"
                            :style="props.fillButtonStyle">
                                Siguiente
                        </wizard-button>
                        
                        <wizard-button 
                            v-else 
                            @click.native="onComplete()" 
                            class="wizard-footer-right finish-button" >

                                <div v-if="props.isLastStep">
                                    <!-- Este pago es para hacer los test -->
                                    <div v-show="selected==='pago1'">
                                        Pendings
                                    </div>
                                    <div v-show="selected==='pago2'">
                                        <form @click="updateData(2)" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick">
                                            <input type="hidden" name="hosted_button_id" value="MCNZPVWRS4QD2">
                                            <input type="image" 
                                                src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_subscribeCC_LG.gif" 
                                                border="0" 
                                                name="submit" 
                                                alt="PayPal, la forma mÃ¡s segura y rÃ¡pida de pagar en lÃ&shy;nea.">    
                                            <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
                                        </form>
                                    </div>
                                    
                                </div>
                                
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
import VueRecaptcha from 'vue-recaptcha';
import firebase from 'firebase/app'

export default {
  name: 'register',
  props: ['modal'],
  mounted () {
      this.init()
  },
  components: {
    VueRecaptcha
  },
  methods: {
    async onSubmit () {
      this.$refs.invisibleRecaptcha.execute()
    },
    async onVerify () {
        this.$validator.validateAll().then((result) => {
            if(result) {
                this.disabled = false
                return
            } else {
                this.$refs.recaptcha.reset();
            }
        })
    },
    async init () {
        this.db = firebase.firestore()
    },
    async onComplete () {
        // this.showModall = false
    },
    async back (prop) {
        prop.prevTab()
    },
    async next (prop) {
        prop.nextTab()
    },
    async validateForm (prop) {
        this.$validator.validateAll().then((result) => {
            if(result) {
                this.saveData() // Firebase
                // var sendMail = correo.apartado() // SendGrid
                prop.nextTab()
                return
            }
        })
    },
    async updateData ( opcPago ) {
        var docRef =  this.db.collection("Registro").doc(this.idRegister)
        docRef.update({
            OpcionPago: opcPago
        });
    },
    async saveData () {
        this.db.collection('Registro').add({
            Nombre: this.form.nombre,
            Email: this.form.email,
            Telefono: this.form.telephone,
            Registro: this.$moment().format('LLLL'),
            OpcionPago: -1
        }).then((result) => {
            this.idRegister = result.id
        })
    }
  },
  data: function () {
      return {
          idRegister: '',
          disabled: true,
          db: {},
          showModall: this.modal,
          form: {
            nombre: null,
            email: null,
            telephone: null,
          },
          selected: 'pago1',
          options: [
            { text: 'Pago Contado:       $1,987.08' , value: 'pago1' },
            { text: 'Pago Cargo 2 MSI:   $1,092.85',  value: 'pago2' },
            // { text: 'Pago Cargo 3 MSI:   $808.58',    value: 'pago3' }
          ]
      }
  }
}
</script>

<style scoped>

@media (max-width:991px) and (orientation : landscape) {
    .verifica {
        padding-left: 0px !important;
    }
}
@media (max-width:768px) and (orientation : portrait) {
    .verifica {
        padding-left: 0px !important;
    }
}

.notFound {
  padding-top: 140px;
  padding-bottom: 40px;
}
.verifica {
  padding-left: 420px;
}
.squareSeq {
    margin: 10px;
    font-weight: lighter;
    text-align: center;
    font-size: 13px;
    padding-top: 13px;
    padding-bottom: 13px;;
}

.is-invalid {
    color: red;
}
  
</style>
