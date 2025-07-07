module.exports = {
  transpileDependencies: [],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-github-pages-spa/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'static'
}
