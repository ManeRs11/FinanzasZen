<template>
  <div class="login">
      
      <div class="container">
          <b-row>
            <b-col>
              </b-col>
              <b-col>
                <b-card
                    title="Login Admins"
                    img-src="https://firebasestorage.googleapis.com/v0/b/finanzaszen-e2129.appspot.com/o/waves.jpeg?alt=media&token=ca602e9f-3454-4fcc-bf4c-b170c3bc7e4a"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 25rem;"
                    class="mb-2">
                    
                    <b-card-text>
                        <b-form inline>
                            <label class="sr-only" for="inline-form-input-username">Correo</label>
                            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0" style="width: 100%;">
                                <b-form-input v-model="email" id="inline-form-input-username" placeholder="Correo"></b-form-input>
                            </b-input-group>
                            <br>
                            <label class="sr-only" for="inline-form-input-username">Contraseña</label>
                            <b-input-group prepend="#!" class="mb-2 mr-sm-2 mb-sm-0" style="width: 100%;">
                                <b-form-input type="password" v-model="password" id="inline-form-input-username" placeholder="Contraseña"></b-form-input>
                            </b-input-group>
                        </b-form>    
                    </b-card-text>
                    <b-button @click="login()" variant="info">Acceder</b-button>
                    <p>{{error}}</p>
                </b-card>
              </b-col>
              <b-col>
              </b-col>
          </b-row>
        

      </div>
  </div>
</template>


<script>
import firebase from 'firebase/app'
export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  mounted () {
    this.init()
  }, 
  methods: {
    async init () {
      firebase.auth().onAuthStateChanged(function (user){
        if (user !== null) {
          window.location.href = '/admin'
        }
      })
    },
    async login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          if (!this._.isUndefined(user)) {
            this.$router.replace('admin')
          } else {
            this.error = 'El usuario o contraseña son incorrectos, verifica'
          }
        }
      )
    }
  }
}
</script>

<style scoped>  
.login {
    padding-top: 170px;
    padding-bottom:70px
}
</style>
