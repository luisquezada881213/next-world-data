const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withSass({
    env: {
        REACT_APP_API_COUNTRIES: 'https://api.myjson.com/bins/1fomjs',
    }
})