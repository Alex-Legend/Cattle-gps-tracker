import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps"

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyC4lSwF6euePLLVNFgCGfOAjngaCJpN36Y",
	},
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
