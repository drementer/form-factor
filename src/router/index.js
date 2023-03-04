import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './login';
import Home from './home';
import NotFound from './page-not-found';

Vue.use(VueRouter);

const routes = [...Login, ...Home, ...NotFound];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
