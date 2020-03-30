const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const isProd = process.env.NODE_ENV === 'production'

module.exports = withSass({
    env: {
        REACT_APP_API_COUNTRIES: 'https://api.myjson.com/bins/ldij8',
    },
    assetPrefix: isProd ? 'https://luisquezada881213.github.io/world-data/' : '',
})