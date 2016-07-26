module.exports = {
  source: './posts',
  output: './_site',
  lazyLoad: true,
  theme: './_theme',
  port: 8000,
  plugins: ['bisheng-plugin-description']
};