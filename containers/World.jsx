import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

// import material ui components
import Grid from '@material-ui/core/Grid';

// import components
import ComponentLoading from '../components/world/Loading'
import ComponentError from '../components/world/Error'
import ComponentCountryList from '../components/world/CountryList'
import ComponentMap from '../components/world/Map'
import ComponentCountryInformation from '../components/world/CountryInformation'
import ComponentCountryPopulation from '../components/world/CountryPopulation'

// import redux actions
import { reduxFetchWorldData, reduxSetCountry } from '../redux/worldDataActions'


function ContainerMain() {

    // const [selectedCountry, setSelectedCountry] = useState(null)
    const data = useSelector(state => state.worldData)
    const selectedCountry = useSelector(state => state.worldData.selectedCountry)

    /* ComponentDidMount */
    useEffect(() => {
        reduxFetchWorldData()
    }, []);

    switch (data.status) {
        case 'loading':
            return <ComponentLoading />
        case 'success':
            return (
                <div>
                    <Grid container className='world-main-container'>
                        <Grid item container xs={12} lg={6} direction='column' alignItems='center' justify='center' className='world-main-container-left'>
                            <ComponentMap
                                selectedCountry={selectedCountry}
                            />
                                                        <ComponentCountryInformation
                                selectedCountry={selectedCountry}
                                countryData={data}
                            />
                        </Grid>
                        <Grid item container xs={12} lg={6} direction='column' alignItems='center' justify='center' className='world-main-container-right'>
                            <Grid item container direction='column' alignItems='center' justify='center'>
                                <ComponentCountryPopulation
                                    selectedCountry={selectedCountry}
                                />
                            </Grid>
                            <Grid item container direction='row' alignItems='center' justify='center'>
                                <ComponentCountryList
                                    countryData={data}
                                    setSelectedCountry={reduxSetCountry}
                                    selectedCountry={selectedCountry}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            )
        case 'error':
            return <ComponentError />
        default:
            return <></>
    }
}

export default ContainerMain