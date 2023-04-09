<template>
  <main class="brand">
    {{ brandId }}
  </main>
</template>

<script>
export default {
  name: 'Brand',
  data: function () {
    return {
      brandId: this.$route.params.id,
    };
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss"></style>
