import React from 'react'

function ComponentCountryList({ countryData, setSelectedCountry }) {

    return(
        <React.Fragment>
            {Object.values(countryData.data).map(element => (
                <img 
                    src={element.flag.url}
                    key={element.name + 'flag'}
                    className="world-flag"
                    onClick={()=>{setSelectedCountry(element)}}
                />
            ))}
        </React.Fragment>
    )
}

export default ComponentCountryList