'use strict';

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/robots.txt');

  return {
    dir: {
      input:    'src',
      output:   '_site',
      layouts:  '_layouts',
      includes: '_includes',
      data:     '_data',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: '/',
  };
};
