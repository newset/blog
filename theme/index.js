module.exports = {
  home: '/',
  sitename: '梅出息',
  // tagline: 'The one theme for bisheng',
  // navigation: [{
  //   title: 'BiSheng',
  //   link: 'https://github.com/benjycui/bisheng',
  // }],
  // footer: 'Copyright and so on...',
  hideBisheng: true,
  routes: {
    '/': './template/Archive',
    '/posts/:post': './template/Post',
    '/tags': './template/TagCloud',
  },
};
