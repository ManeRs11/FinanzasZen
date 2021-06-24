<template>
  <div class="payment">

      <div class="container">

      <div style="padding: 20px;">
        <h1><strong>Pago del Curso</strong></h1>
        <hr>
      </div>

      <div style="padding: 20px;">

        <b-jumbotron :header="user.Nombre" :lead="user.Email">
            <p>WhatsApp: <strong>{{user.Telephone}}</strong></p><br>
            
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
                        2 pagos <code>$942.12</code> IVA 16% = <code>$1092.8592</code> x 2 MSI <br>
                        3 Pagos <code>$697.05</code> IVA 16% = <code>$808.58</code> x 3 MSI <br>
                    </div>
                </div>
            </div>
            

            <b-button variant="dark" href="#">Quiero Prosperar</b-button>
        </b-jumbotron>

        
      </div>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  name: 'payment',
  mounted: function () {
      this.init()
  },
  firestore: {
      registro: db.collection('Registro')
  },
  methods: {
      async init () {
          db.collection('Registro')
            .doc(this.id)
            .get()
            .then(snapshot => {
                this.user = snapshot.data()
                if (this._.isEmpty(this.user)) {
                    window.location.href = '/404'
                }
            })
      }
  },
  data: function () {
      return {
          id: this.$route.params.id,
          user: {},
          selected: 'first',
          options: [
            { text: 'Pago Contado:         $1,987.08' , value: 'first' },
            { text: 'Pago Cargo 2 MSI:   $1,092.85',  value: 'second' },
            { text: 'Pago Cargo 3 MSI:   $808.58',    value: 'third' }
          ]
      }
  }
}
</script>

<style scoped>

.payment {
  padding-top: 140px;
  padding-bottom: 40px;
}

  
</style>
