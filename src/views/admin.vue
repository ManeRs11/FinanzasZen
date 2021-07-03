<template>
  <div class="login">
      
      <div class="container">

        <b-row style="padding-bottom: 30px;">
              <b-col>
                <h3>Administrador</h3>
              </b-col>

              <b-col>
              </b-col>

              <b-col>
              </b-col>

              <b-col>
                <div> 
                  <button style="width: 100%" @click="logout()" type="button" class="btn btn-info">Cerrar Session</button>
                </div>
              </b-col>            
          </b-row>

        
          <b-row>
              <b-col>
                <div> 
                  <div style="padding-bottom: 30px;">
                    <h2>Apartados</h2>
                    <th/>
                  </div>
                  
                    <b-table striped hover :items="registro"></b-table>
                </div>
              </b-col>            
          </b-row>
        
      </div>
  </div>
</template>


<script>
// 
import firebase from 'firebase/app'
const db = firebase.firestore()
export default {
  name: 'admin',
  data: function () {
    return {
      db: {},
      registro: {}
    }
  },
  firestore: {
      registro: db.collection('Registro')
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
    },
    async logout () {
        firebase.auth().signOut().then(function() {
            window.location.href = "/"
        }, function(error) {
            console.log('error: ', error)
        });
    }
  }
}
</script>

<style scoped>  
.login {
    padding-top: 170px;
    padding-bottom:50px
}
</style>
