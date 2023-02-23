import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './login';
import Home from './home';

Vue.use(VueRouter);

const routes = [...Login, ...Home];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
