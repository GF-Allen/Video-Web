// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import axios from "axios";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(MintUI);

//配置axios
axios.defaults.baseURL = "/api";
axios.interceptors.request.use(
    config => {
        store.dispatch("SHOWLOADING");
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
axios.interceptors.response.use(
    config => {
        store.dispatch("HIDELOADING");
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    store,
    router,
    template: "<App/>",
    components: { App }
});