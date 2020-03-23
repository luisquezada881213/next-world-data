import { fetchCountryData } from '../../clients/api/client.api.countries'

export default (req, res) => {
    fetchCountryData().then(data => {
        res.json({
            data: data.data.countries,
            status: 'success',
        })
    }).catch(error => {
        res.json({
            data: null,
            status: 'error',
        })
    })
};
