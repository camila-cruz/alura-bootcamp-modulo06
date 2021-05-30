const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@camila-cruz/ui']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});