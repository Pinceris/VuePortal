import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

import 'firebase/firestore'

Vue.config.productionTip = false;

//Vue.use(VueFire);

var firebaseConfig = {
  apiKey: "AIzaSyCx1C-PxAICQH4aOs3C7BdoGurJgJO2p9w",
  authDomain: "vuetube-1c427.firebaseapp.com",
  databaseURL: "https://vuetube-1c427.firebaseio.com",
  projectId: "vuetube-1c427",
  storageBucket: "",
  messagingSenderId: "790748277804",
  appId: "1:790748277804:web:1327ce23e0744d64"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
