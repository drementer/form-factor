import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Brand from './brand';
import Login from './login';
import Error from './error';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login',
    },
  },
  Brand,
  Login,
  Error,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
