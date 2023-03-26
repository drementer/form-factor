<template>
  <div class="brand-card">
    <img
      v-if="image"
      :src="require('../../uploads/brands/' + image)"
      :alt="imageAlt"
      :title="imageAlt"
      class="brand-card__logo"
    />
  </div>
</template>

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

<style lang="scss">
.brand-card {
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 10em;
  height: 10em;

  border: 1px solid $green;
  border-radius: $border-radius;

  font-size: 1rem;

  cursor: pointer;

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
