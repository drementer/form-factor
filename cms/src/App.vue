<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~@/assets/scss/main.scss';

main {
  margin: auto;
}

#app {
  display: flex;

  width: 100%;
  min-height: 100vh;
}
</style>
