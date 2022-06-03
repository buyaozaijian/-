import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import user from "@/store/user";
//import user from "@/store/user";


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI);

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// add token into headers

axios.interceptors.request.use(
    config => {
        const userInfo = user.getters.getUser(user.state());
        console.log(userInfo);
        if (userInfo) {
            config.headers.Authorization = userInfo.user.Authorization;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
