import axios from 'axios'

// import query
import { getCountries } from './graphql/country.js'

export const fetchCountryData = () => {

    let axiosPromise = axios({
        url: process.env.GRAPHCMS_ENDPOINT,
        headers: {
            'Accept': '*/*',
            'Authorization': 'Bearer ' + process.env.GRAPHCMS_TOKEN,
        },
        method: 'post',
        data: {
          query: getCountries
        }
      })

    axiosPromise = axiosPromise.then(serverData => {
      return (serverData.data)
    })

    return (axiosPromise)
}