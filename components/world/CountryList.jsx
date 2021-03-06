import React from 'react'

function ComponentCountryList({ countryData, setSelectedCountry, selectedCountry }) {

    let selectedFlag = selectedCountry ? selectedCountry.name : ''

    return(
        <>
            {Object.values(countryData.data).map(element => (
                <img 
                    src={element.flag.url}
                    key={element.name + 'flag'}
                    className={ `world-flag ${selectedFlag === element.name ? 'selected-flag' : ''}` }
                    onClick={()=>{setSelectedCountry(element)}}
                />
            ))}
        </>
    )
}

export default ComponentCountryList