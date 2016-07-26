module.exports = {
  source: './posts',
  output: './_site',
  lazyLoad: true,
  theme: './theme',
  port: 8000,
  plugins: ['bisheng-plugin-description']
};