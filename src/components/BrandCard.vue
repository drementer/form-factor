<template>
  <div class="brand-card">
    <img
      v-if="image"
      :src="require('@/assets/image/' + image)"
      :alt="imageAlt"
      class="brand-card__logo"
    />
  </div>
</template>

<style lang="scss">
.brand-card {
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 10em;
  height: 10em;

  border: 3px solid $green;
  border-radius: $border-radius;

  font-size: 1rem;

  &:hover &__logo {
    transform: scale(1.05);
  }

  &__logo {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: all 150ms ease-out;
  }
}
</style>

<script>
export default {
  name: 'Input',
  data: () => {
    return {};
  },
  props: {
    image: String,
    imageAlt: String,
  },
  methods: {},
};
</script>
