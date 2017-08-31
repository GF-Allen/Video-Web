import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/page/Home";
import Video from "@/components/page/Video";
import Player from "@/components/page/Player";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home/1",
      alias: "/",
      component: Home
    },
    {
      path: "/home/:type",
      component: Home
    },
    {
      path: "/video/:id",
      component: Video,
      children: [{ path: "player", component: Player }]
    }
  ]
});
