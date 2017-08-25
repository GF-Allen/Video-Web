import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/page/Home";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/home/1",
            alias: "/",
            component: Home
        },
        {
            path: '/home/:type',
            component: Home
        }
    ]
});