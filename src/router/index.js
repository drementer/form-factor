import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './home';
import Login from './login';
import Error from './error';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login',
    },
  },
  Home,
  Login,
  Error,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
