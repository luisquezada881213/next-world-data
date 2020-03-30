const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    env: {
        REACT_APP_API_COUNTRIES: 'https://api.myjson.com/bins/1fomjs',
    }
})