import React, { useEffect } from 'react'
import * as d3 from 'd3'

function showData(selectedCountry) {

    if (selectedCountry) {

        let normPopData = []

        Object.keys(selectedCountry.population).map(element => {
            if (+element) {
                normPopData.push({
                    "year": element,
                    "population": Number(selectedCountry.population[element].replace(/,/g, ''))
                })
            }
        })

        console.log(normPopData)

        let body = d3.select("#country-population-body")

        let xAxisBody = d3.select("#country-population-xAxis")

        let max = d3.max(normPopData, d => d.population)

        console.log(max)

        let widthScale = d3.scaleLinear()
            .range([0, 650])
            .domain([0, max])

        let domain = normPopData.map(d => d.year)

        console.log(domain)

        let positionScale = d3.scaleBand()
            .range([0, 400])
            .domain(domain)
            .padding(0.3)

        let join = body
            .selectAll("rect")
            .data(normPopData)

        let newElements = join.enter()
            .append("rect")
            .attr("fill", "blue")
            .attr("width", d => widthScale(d.population))
            .attr("height", positionScale.bandwidth())
            .attr("y", d => positionScale(d.year))
            .style("transform", "translate(20px, 0px)")
        
        join.merge(newElements)
            .attr("fill", "blue")
            .attr("width", d => widthScale(d.population))
            .attr("height", positionScale.bandwidth())
            .attr("y", d => positionScale(d.year))
            .style("transform", "translate(20px, 5px)")

        join.exit().remove()

        // Add scales to axis
            var x_axis = d3.axisBottom()
                .scale(widthScale);
    
        //Append group and insert axis
            xAxisBody
                .call(x_axis)
                .style("transform", "translate(20px, 0px)")
        
    }
}

function ComponentCountryPopulation({ selectedCountry }) {

    useEffect(() => {
        showData(selectedCountry)
    }, [selectedCountry])

    return (
        <React.Fragment>
            <svg id="country-population-body">
                <g id="country-population-xAxis"></g>
            </svg>
        </React.Fragment>
    )
}
export default ComponentCountryPopulation 