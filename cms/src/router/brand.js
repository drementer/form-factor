import Empty from '@/views/Empty.vue';
import brands from '@/views/brand/Brands.vue';
import brand from '@/views/brand/Brand.vue';
import addBrand from '@/views/brand/AddBrand.vue';

export default {
  path: '/brands',
  component: Empty,
  children: [
    {
      path: '',
      name: 'brands',
      component: brands,
    },
    {
      path: 'add-brand',
      name: 'add-brand',
      component: addBrand,
    },
    {
      path: ':id',
      name: 'brand',
      component: brand,
    },
  ],
};
