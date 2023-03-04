<template>
  <main class="home" main>
    <router-view />
  </main>
</template>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}
</style>

<script>
export default {
  name: 'HomeView',
};
</script>
