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

        // console.log(normPopData)

        let body = d3.select("#country-population-body")

        let xAxisBody = d3.select("#country-population-xAxis")
        let yAxisBody = d3.select("#country-population-yAxis")

        let max = d3.max(normPopData, d => d.population)

        // console.log(max)

        let widthScale = d3.scaleLinear()
            .range([0, 330])
            .domain([0, max])

        let domain = normPopData.map(d => d.year)

        // console.log(domain)

        let positionScale = d3.scaleBand()
            .range([0, 200])
            .domain(domain)
            .padding(0.3)

        let join = body
            .selectAll("rect")
            .data(normPopData)

        let newElements = join.enter()
            .append("rect")
            .attr("fill", "#FFE000")
            .attr("width", d => widthScale(d.population))
            .attr("height", positionScale.bandwidth())
            .attr("y", d => positionScale(d.year))
            .style("transform", "translate(20px, 0px)")

        join.merge(newElements).transition()
            .attr("fill", "#FFE000")
            .attr("width", d => widthScale(d.population))
            .attr("height", positionScale.bandwidth())
            .attr("y", d => positionScale(d.year))
            .style("transform", "translate(45px, 0px)")

        join.exit().remove()


        let xAxis = d3.axisBottom()
            .scale(widthScale)
            .ticks(7)

        let yAxis = d3.axisLeft()
            .scale(positionScale)

        xAxisBody.transition()
            .call(xAxis)
            .style("transform", "translate(45px, 200px)")

        yAxisBody.transition()
            .call(yAxis)
            .style("transform", "translate(40px, 0px)")

    }
}

function ComponentCountryPopulation({ selectedCountry }) {

    useEffect(() => {
        showData(selectedCountry)
    }, [selectedCountry])

    return (
        <>
            <h3>Population projection</h3>
            <svg id="country-population-body">
                <g id="country-population-xAxis"></g>
                <g id="country-population-yAxis"></g>
            </svg>
        </>
    )
}
export default ComponentCountryPopulation 