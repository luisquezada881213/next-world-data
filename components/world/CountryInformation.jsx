import React, { useEffect, useState } from 'react'

function ComponentCountryInformation({ countryData, selectedCountry }) {

    useEffect(() => {
        if (selectedCountry) {
            setInformation({
                data: null,
                status: 'loading'
            })
            let data = countryData.data.filter(element => element.name === selectedCountry.name)
            setInformation({
                data: data[0],
                status: 'success'
            })
        }
    }, [selectedCountry]);

    const [information, setInformation] = useState({
        data: null,
        status: 'pending'
    });

    switch (information.status) {
        case 'pending':
            return (
                <React.Fragment>
                    <h1>Please select a country</h1>
                </React.Fragment>
            )
        case 'loading':
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                </React.Fragment>
            )
        case 'success':
            return (
                <>
                    <h1>{information.data.name}</h1>
                    <p>{information.data.information}</p>
                </>
            )
        case 'error':
            return (
                <React.Fragment>
                    <h1>Error</h1>
                </React.Fragment>
            )
        default:
            return (
                <React.Fragment>
                    <h1>Error</h1>
                </React.Fragment>
            )
    }
}

export default ComponentCountryInformation