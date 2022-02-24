//Chris Bull - DC Equipment Signout Dynamic Site Assignment

//import settings for the Equipment Signout Vue app
import Vue from 'vue'
import EquipmentSignoutSite from './App.vue'
import router from './router'
import AxiosPlugin from 'vue-axios-cors';
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

//enable Axios for Vue to use
Vue.use(AxiosPlugin)

Vue.config.productionTip = false

//setup Vue to run the Equipment Signout Site Vue app and Vue Router
new Vue({
  router,
  render: h => h(EquipmentSignoutSite)
}).$mount('#equipmentSignoutSite')
