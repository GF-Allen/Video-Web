import Vue from "vue";
import Router from "vue-router";
import TabBar from "@/components/common/TabBar";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "TabBar",
      component: TabBar
    }
  ]
});
