module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        implementation: require('node-sass'),
        additionalData: `@import "~@/assets/scss/main.scss";`,
      },
    },
  },

  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3080',
        changeOrigin: true,
      },
    },
  },
};
