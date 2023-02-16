module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        implementation: require('node-sass'),
        additionalData: `@import "~@/assets/scss/_include.scss";`,
      },
    },
  },
};
