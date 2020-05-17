const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    env: isProd ? {
        REACT_APP_API_COUNTRIES: 'https://steve-sanchez-world-data.herokuapp.com/api/world',
    } : {
        REACT_APP_API_COUNTRIES: 'http://localhost:3000/api/world',
    },
    assetPrefix: isProd ? '' : '',
}