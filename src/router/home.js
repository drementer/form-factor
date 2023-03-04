import view from '../views/HomeView.vue';
import addBrand from '../views/brand/AddBrand.vue';
import brands from '../views/brand/Brands.vue';

export default [
  {
    path: '/home',
    name: 'home',
    component: view,
    redirect: '/brands',
    children: [
      {
        path: '/brands',
        component: brands,
      },
      {
        path: '/brands/add-brand',
        component: addBrand,
      },
    ],
  },
];
