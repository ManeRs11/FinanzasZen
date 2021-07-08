<template>
  <div class="eBook">
      
      <div class="container">

      </div>
      <b-modal 
        size="lg" id="modallbook"
        ref="modallbook" 
        v-model="showModallBook" 
        data-backdrop=”static” 
        data-keyboard=”false” 
        tabindex=”-1″ hide-footer hide-header>

        <div style="padding-top: 20px;">
            <form-wizard ref="wizard"
                :start-index="0"
                color="#11a199"
                title="¡Quiero Prosperar!"
                subtitle="Finanzas Zen">

                <tab-content title="eBook">
                    <div style="padding-bottom: 30px; font-weight: bold;">
                        Déjame tu nombre y correo a donde te enviaré el E-Book para su descarga gratuita. <br>
                        Asegúrate de revisar la bandeja de SPAM para recibir el E-Book gratuito. Te deseo un próspero y abundante día.
                    </div>
                        <form>

                            <div style="padding-bottom: 20px;">
                                <span v-show="errors.has('nombre')" class="is-invalid">El nombre es requerido *</span>
                                <input 
                                    name="nombre" 
                                    placeholder="Ingresa tu nombre completo" 
                                    v-model="form.nombre"
                                    v-validate="'required'" type="nombre"
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
                </tab-content>

                <tab-content title="Gracias">
                    <div class="msgEbook">
                        <h4>
                            <span style="color:#11a199; font-size: 33px;">¡ GRACIAS !</span><br><br> 
                            <a class="btn btn-sm btn-dark rounded-pill" style="padding:30px;" target="_blank" 
                            href="https://drive.google.com/file/d/1veqnlxbpG8bskvptr2v6wP6BzESBM64D/view?ts=60dcf182">
                                    Descarga tu E-Book
                            </a> 
                        </h4>
                    </div>
                </tab-content>


                <template :ref="props.reset()" slot="footer" slot-scope="props">
                    
                    <div class=wizard-footer-left>
                        <wizard-button 
                            @click.native="onComplete()" 
                            class="wizard-footer-left finish-button"
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
                            class="wizard-footer-right finish-button"
                            :style="props.fillButtonStyle">
                                <div v-if="props.isLastStep">
                                    Terminar
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
import firebase from 'firebase/app'
import VueRecaptcha from 'vue-recaptcha';
export default {
  name: 'eBook',
  props: ['modalbook'],
  data: function () {
    return {
      disabled: true,
      showModallBook: this.modalbook,
      form: {
          nombre: '',
          email: '',
          telephone: ''
      }
    }
  },
  components: {
    VueRecaptcha
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
        this.db = firebase.firestore()
    },
    async onComplete () {
        this.showModallBook = false
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
    async saveData () {
        this.db.collection('ebook').add({
            Nombre: this.form.nombre,
            Correo: this.form.email,
            Telefono: this.form.telephone,
            Registro: this.$moment().format('LLLL')
        })
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

.eBook {
    padding-top: 170px;
    padding-bottom:50px
}
.msgEbook {
    text-align: center !important;
    padding-bottom: 60px !important;
    padding-top: 30px !important;
}
.is-invalid {
    color: red;
}
.verifica {
  padding-left: 420px;
}
</style>
