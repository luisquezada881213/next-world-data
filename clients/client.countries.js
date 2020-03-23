import axios from 'axios'

export const fetchCountryData = () => {

    let axiosPromise = axios({
        url: process.env.REACT_APP_API_COUNTRIES,
        method: 'get'
      })

    axiosPromise = axiosPromise.then(serverData => serverData.data)

    return (axiosPromise)
}