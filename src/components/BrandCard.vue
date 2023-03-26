<template>
  <div class="brand-card">
    <img
      v-if="image"
      :src="require('../../uploads/brands/' + image)"
      class="brand-card__logo"
			:alt="imageAlt"
			:title="imageTitle"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: () => {
    return {
      image: '',
			imageAlt: '',
			imageTitle: '',
    };
  },
  props: {
    brand: Object,
  },
  methods: {
    getImage: function () {
      let vm = this;

      let brand = vm.brand;
      let files = brand.files;
      let file = files.slice(-1)[0];

      vm.image = '';
      if (!file) return;
      vm.image = file.filename;
    },
  },
  mounted() {
    this.getImage();
  },
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
