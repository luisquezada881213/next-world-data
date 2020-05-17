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
                <div className="world-main-container">
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="stretch"
                    >
                        {/* country list */}
                        <Grid
                            item
                            container
                            direction="column"
                            justify="space-evenly"
                            alignItems="center"
                            xs={1}
                            className="world-main-container-flags"
                        >
                            <ComponentCountryList
                                countryData={data}
                                setSelectedCountry={reduxSetCountry}
                                selectedCountry={selectedCountry}
                            />
                        </Grid>
                        {/* map */}
                        <Grid
                            item
                            container
                            direction="column"
                            justify="space-evenly"
                            alignItems="center"
                            xs={1} className="world-main-container-map" item xs={5}>
                            <ComponentMap
                                selectedCountry={selectedCountry}
                            />
                        </Grid>
                        <Grid item xs={6} className="world-main-container-right">
                            {/* Country Information */}
                            <Grid>
                                <ComponentCountryInformation
                                    selectedCountry={selectedCountry}
                                    countryData={data}
                                />
                            </Grid>
                            <Grid>
                                <div>
                                    <ComponentCountryPopulation
                                        selectedCountry={selectedCountry}
                                    />
                                </div>
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