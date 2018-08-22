import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/global.scss'
import axios from 'axios'

Vue.use(iView);

Vue.prototype.$axios= axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
