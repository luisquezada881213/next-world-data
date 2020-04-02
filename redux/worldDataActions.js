import store from './store'

// import clients
import { fetchCountryData } from '../clients/client.countries'

export const reduxFetchWorldData = () => {
    store.dispatch((dispatch) => {
        dispatch({type:"WORLD_DATA_LOADING"})
        fetchCountryData().then(response => {
            setTimeout(()=>{dispatch({type:"WORLD_DATA_SUCCESS", payload:response.data})},1000)
        }).catch(error => {
            dispatch({type:"WORLD_DATA_ERROR"})
        })
    })
}

export const reduxSetCountry = (country) => {
    store.dispatch({type:"WORLD_DATA_SET_COUNTRY", payload:country})
}