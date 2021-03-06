import Vue from 'vue'
import App from './App.vue'

// Wizzard Vue 
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'vue2-animate/dist/vue2-animate.min.css'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import Vue-Router
import VueRouter from 'vue-router'
import router from './router'

// Import Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vee Validate
import VeeValidate from 'vee-validate'

// Firebase
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'

// Moment Vue
import moment from "moment";
import VueMomentJS from "vue-momentjs";

// Lodash
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

// CORS
import cors from 'cors'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueFormWizard)
Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
Vue.use(firebase)
Vue.use(cors)
Vue.use(firestorePlugin)
Vue.use(VueMomentJS, moment)
Vue.use(VueLodash, {lodash: lodash})

Vue.config.productionTip = false

let firebaseConfig = {
  apiKey: "AIzaSyDfWqGcyBNZYOfXZusWpTifwWvEGMau944",
  authDomain: "finanzaszen-e2129.firebaseapp.com",
  databaseURL: "https://finanzaszen-e2129-default-rtdb.firebaseio.com",
  projectId: "finanzaszen-e2129",
  storageBucket: "finanzaszen-e2129.appspot.com",
  messagingSenderId: "652871503783",
  appId: "1:652871503783:web:065da82fd754e352107082",
  measurementId: "G-MB6PK41ME8"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function (user){
    console.log('', user)
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
})
