import { fetchCountryData } from '../../clients/api/client.api.countries'

export default async (req, res) => {

    let data
    
    try {
        data = await fetchCountryData()
        data = {
            data: data.data.countries,
            status: 'success',
        }
    } catch (error) {
        data = {
            data: null,
            status: 'error',
        }
    }

    res.send(data)
};
