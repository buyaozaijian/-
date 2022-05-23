import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI);

axios.defaults.baseURL = 'http://123.12.123.12:8000\'';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
