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

export default {
  name: 'HomeView',
  data: () => {
    return {
      brands: [
        {
					id: 1,
          name: 'Katılımemeklilik',
          image: 'katilimemeklilik-logo.png',
          imageAlt: 'Katılımemeklilik logo',
        },
      ],
    };
  },
  components: {
    Input,
    BrandCard,
  },
};
</script>
