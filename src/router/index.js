import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Empty from '@/views/Empty.vue';
import Login from './login';
import Brand from './brand';
import Error from './error';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login',
    },
  },
  {
    path: '/home',
    redirect: {
      name: 'brands',
    },
    component: Empty,
    children: [...Brand],
  },
  ...Login,
  ...Error,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
