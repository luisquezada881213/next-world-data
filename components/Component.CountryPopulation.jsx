import React, { useEffect } from 'react'
import * as d3 from 'd3'

function showData(selectedCountry) {

    if (selectedCountry) {
        
        let normPopData = []

        Object.keys(selectedCountry.population).map(element => {
            if(+element){
                normPopData.push({
                    "year" : element,
                    "population": Number(selectedCountry.population[element].replace(/,/g, ''))
                })
            }
        })

        console.log(normPopData)

        let body = d3.select(".country-population-body")

        let max = d3.max(normPopData, d => d.population)

        console.log(max)
    }
}

function ComponentCountryPopulation({ selectedCountry }) {

    useEffect(() => {
        showData(selectedCountry)
    }, [selectedCountry])

    return (
        <React.Fragment>
            <svg id="country-population-body" height="500" width="500"></svg>
        </React.Fragment>
    )
}
export default ComponentCountryPopulation 