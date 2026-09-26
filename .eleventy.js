module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"assets": "assets"});
  eleventyConfig.addPassthroughCopy({"laudos": "laudos"});
  eleventyConfig.addPassthroughCopy({"admin": "admin"});
  if (process.env.TARGET_HOST !== 'cloudflare') {
    eleventyConfig.addPassthroughCopy({"acesso": "acesso"});
    eleventyConfig.addPassthroughCopy({"grupo": "grupo"});
  }
  eleventyConfig.addCollection('publicPosts', collection => collection.getFilteredByGlob('src/posts/*.md')
    .filter(item => item.data.visibility === 'public')
    .sort((a,b) => (a.data.order ?? 999) - (b.data.order ?? 999) || a.data.title.localeCompare(b.data.title, 'pt-BR')));
  eleventyConfig.addFilter('bySection', (posts, section) => posts.filter(p => p.data.section === section));
  eleventyConfig.addFilter('take', (posts, count) => posts.slice(0, count));
  return {dir: {input:'src', includes:'_includes', output:'_site'}, markdownTemplateEngine:'njk', htmlTemplateEngine:'njk'};
};
