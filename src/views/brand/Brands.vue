<template>
  <main class="brands">
    <h1 class="brands__heading">Markalar</h1>

    <div class="brands__cards">
      <h3 v-if="brands == null">{{ loadingText }}</h3>
      <h3 v-if="brands == false">{{ brandsNotFound }}</h3>

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
  </main>
</template>

<script>
import Input from '@/components/Input.vue';
import BrandCard from '@/components/BrandCard.vue';
import { getBrands } from '@/service/index.js';

export default {
  name: 'Brands',
  data: () => {
    return {
      brands: null,
      loadingText: 'Yükleniyor...',
      brandsNotFound: 'Henüz hiç marka yok.',
    };
  },
  components: {
    Input,
    BrandCard,
  },
  methods: {
    getBrands: function () {
      getBrands()
        .then((res) => (this.brands = res))
        .catch((err) => (this.brands = false));
    },
  },
  mounted() {
    this.getBrands();
  },
};
</script>

<style lang="scss">
.brands {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  gap: 1em;

  width: fit-content;

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
