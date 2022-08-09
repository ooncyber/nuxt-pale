import Vue from "vue";
import VueRouter from "vue-router";
import PersonagemView from "../views/PersonagemView.vue";
import AboutView from "../views/AboutView.vue";
import MainView from "../views/MainView.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;