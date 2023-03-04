<template>
  <div class="brands">
    <h1 class="brands__heading">Markalar</h1>
    <div class="brands__cards">
      <BrandCard
        v-for="brand in brands"
        class="brands__card"
        :key="brand.id"
        :image="brand.image"
        :image-alt="brand.imageAlt"
      />
    </div>
    <div class="brands__button">
      <router-link to="/brands/add-brand" class="brand__button button">
        Yeni Marka Ekle
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.brands {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  gap: 1em;

  color: $white;
  font-size: 1rem;

  &__heading {
    text-align: center;
  }

  &__cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1em;

    max-width: 20em;
  }

  &__card {
    flex-basis: calc(50% - (1em / 2));
  }
}
</style>

<script>
import Input from '@/components/Input.vue';
import BrandCard from '@/components/BrandCard.vue';
import { getBrands } from '@/service/index.js';

export default {
  name: 'Brands',
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
