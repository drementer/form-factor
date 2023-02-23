<template>
  <main class="home" main>
    <div class="brand-list">
      <BrandCard
        v-for="brand in brands"
        :key="brand.id"
        :image="brand.image"
        :image-alt="brand.imageAlt"
      />
    </div>
  </main>
</template>

<script>
import Input from '@/components/Input.vue';
import BrandCard from '@/components/BrandCard.vue';
import { getBrands } from '../service/index.js';

export default {
  name: 'HomeView',
  data: () => {
    return {
      brands: [],
    };
  },
  components: {
    Input,
    BrandCard,
  },
  methods: {
    getBrands() {
      getBrands().then((res) => (this.brands = res));
    },
  },
  mounted() {
    this.getBrands();
  },
};
</script>
