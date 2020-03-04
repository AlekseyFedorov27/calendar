import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Holiday from "../views/Holiday.vue";
import HolidayItem from "../views/HolidayItem.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/list/:id",
    name: "Holiday",
    component: Holiday,
    props: true
  },
  {
    path: "/item/:id/:index",
    name: "HolidayItem",
    component: HolidayItem,
    props: true
  },
  {
    path: "*", //'/index.html',
    beforeEnter: (to, from, next) => {
      next("/");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
