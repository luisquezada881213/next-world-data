import React, { useEffect } from 'react'
import * as d3 from 'd3'

// import geo json
import mapInfo from '../data/data.countries.geo.json'
import mapLatlng from '../data/data.countries.latlng.json'

function showData(selectedCountry) {

    let body = d3.select(".map-body")
    let projection = d3.geoOrthographic().rotate([0, 0])
        .scale(230)
        .translate([235, 290])

    let path = d3.geoPath()
        .projection(projection);

    body.selectAll("path")
        .data(mapInfo.features)
        .enter().append("path")
        .attr("d", d => path(d))
        .attr("stroke", "black")
        .attr("className", "map-country")
        .attr("id", d => 'map-country-' + d.properties.name.split(' ').join(''))
        .attr('fill', '#008000')

    if (selectedCountry) {

        let country = mapLatlng.filter(element => element.name === selectedCountry.name)
        let longitude = country[0].longitude
        let latitude = country[0].latitude
        console.log(latitude)
        longitude = +longitude.substring(0, longitude.indexOf('.'))
        latitude = +latitude.substring(0, latitude.indexOf('.'))
        var feature = body.selectAll("path");
        projection.rotate([(longitude * -1), (latitude * -1)]);
        feature.attr("d", path).attr('fill', '#008000');

        d3.select(`#map-country-${selectedCountry.name.split(' ').join('')}`).attr('fill', '#B22222')

    }

}

function ComponentMap({ selectedCountry }) {

    useEffect(() => {
        showData(selectedCountry)
    }, [selectedCountry]);

    return (
        <React.Fragment>
            <svg id="map-container">
                <circle cx="235" cy="290" r="230" className="world-ocean" />
                <g className="map-body" transform="translate(0,0)"></g>
            </svg>
        </React.Fragment>
    )
}

export default ComponentMap