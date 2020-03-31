import React, { useState, useEffect } from 'react'

// import material ui components
import Grid from '@material-ui/core/Grid';

// import components
import ComponentLoading from '../components/Component.Loading'
import ComponentError from '../components/Component.Error'
import ComponentCountryList from '../components/Component.CountryList'
import ComponentMap from '../components/Component.Map'
import ComponentCountryInformation from '../components/Component.CountryInformation'
import ComponentCountryPopulation from '../components/Component.CountryPopulation'

// import clients
import { fetchCountryData } from '../clients/client.countries'

function ContainerMain() {

    const [countryData, setCountryData] = useState({
        data: {},
        status: 'loading',
    })

    const [selectedCountry, setSelectedCountry] = useState(null)

    /* ComponentDidMount */
    useEffect(() => {
        fetchCountryData().then(response => {
            setCountryData({
                data: response.data,
                status: 'success',
            })
        }).catch(error => {
            setCountryData({
                data: null,
                status: 'error'
            })
        })
    }, []);

    switch (countryData.status) {
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
                                countryData={countryData}
                                setSelectedCountry={setSelectedCountry}
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
                                    countryData={countryData}
                                />
                            </Grid>
                            <Grid>
                                <h3>Population projection</h3>
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
            return <ComponentError />
    }
}

export default ContainerMain