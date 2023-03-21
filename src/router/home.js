import Empty from '@/views/Empty.vue';
import Brand from './brand';

export default {
  path: '/home',
	name: 'home',
  redirect: {
    name: 'brands',
  },
  component: Empty,
  children: [...Brand],
};
