import React, { Component } from "react"
import * as d3 from "d3"

const nycOpenDataLookup = {
  population: "https://data.cityofnewyork.us/resource/y7yy-gq65.json",
  housing: "https://data.cityofnewyork.us/resource/wwhg-3wy7.json",
  census: "https://data.cityofnewyork.us/resource/w5g7-dwbx.json"
}

// const nyc = "/data/nyc.json"

class MapVisual extends Component {
  componentDidMount() {
    // console.log("nycTopo", nycTopo)
    // this.loadData()
    this.drawBasicMap()
    // this.drawExampleMap()
    // this.drawChart()
  }

  drawBasicMap() {
    const width = 800
    const height = 750

    const svgMap = d3
      .select(".dataviz")
      .append("svg")
      .attr("width", width)
      .attr("height", height)

    // var context = d3.select("#content canvas").node()

    let mapSize = 0

    // let projection = d3
    //   .geoConicConformal()
    //   .parallels([33, 45])
    //   .rotate([96, -39])
    //   .fitSize([width, height], d)

    // let geoGenerator = d3.geoPath().projection(projection).context(svgMap)

    const mapGenerator = (w, h, d) => {
      const mapGenerator = d3
        .geoPath()
        .projection(
          d3
            .geoConicConformal()
            .parallels([33, 45])
            .rotate([96, -39])
            .fitSize([w, h], d)
        )

      return mapGenerator
    }

    var projection = d3
      .geoConicConformal()
      .parallels([33, 45])
      .rotate([96, -39])
      .fitSize([width, height])

    var geoGenerator = d3.geoPath().projection(projection).context(context)

    const svgPoint = [-73.97604935591414, 40.631275905646646]

    // const mapGenerator = d3
    //   .geoPath()
    //   .projection(
    //     d3
    //       .geoConicConformal()
    //       .parallels([33, 45])
    //       .rotate([96, -39])
    //       .fitSize([width, height], nycMapData)
    //   )

    // svgMap
    //   .append("g")
    //   .selectAll("path")
    //   .data(nycMapData.features)
    //   .enter()
    //   .append("path")
    //   .attr("fill", "#242424")
    //   .attr("d", mapGenerator)
    //   .style("stroke", "#fff")
    //   .style("stroke-width", 0.5)
    //   .attr("id", "nycPath")

    // Load map of NYC geojson and generate path
    d3.json(
      "https://raw.githubusercontent.com/danoszz/cornell-info5410-urban-systems_dv239/main/public/data/nyc.geojson"
    )
      .then(function (data) {
        svgMap
          .append("g")
          .selectAll("path")
          .data(data.features)
          .enter()
          .append("path")
          .attr("fill", "#242424")
          .attr("d", mapGenerator(width, height, data))
          .style("stroke", "#fff")
          .style("stroke-width", 0.5)
          .attr("id", "nycPath")

        //console.log(point, d3.geoContains(feature, testPoint))
        var circle1 = d3.geoCircle().center([-73.957397, 40.752892]).radius(2)

        var circle = d3.geoCircle().center(svgPoint).radius(5)

        svgMap.beginPath()
        svgMap.strokeStyle = "red"
        geoGenerator(circle())
        svgMap.stroke()

        // context.beginPath()
        // context.strokeStyle = "red"
        // geoGenerator(circle())
        // context.stroke()

        // svgMap.beginPath()
        // svgMap.strokeStyle = "red"
        // mapGenerator(circle())
        // svgMap.stroke()

        // svgMap
        //   .append("g")
        //   .style("stroke", "#fff")
        //   .attr("fill", "#0000ed")
      })
      .catch((error) => {
        console.error(error)
      })

    // Get data from
    d3.json("https://data.cityofnewyork.us/resource/s4kf-3yrf.json").then(
      function (data) {
        console.log("link", data)

        // let generator = d3.geoPath().projection(projection);

        // const generator = d3
        //   .geoPath()
        //   .projection(
        //     d3
        //       .geoConicConformal()
        //       .parallels([33, 45])
        //       .rotate([96, -39])
        //       .fitSize([width, height], mapSize)
        //   )

        for (let index = 0; index < data.length; index++) {
          const point = data[index]
          const pointLocation = data[index]["location"]
          let pointCoordinates = Object.values(pointLocation) // convert Object to Array

          // Preprocessing: swap location longitude and latitude for d3.geoCircle() and to float
          let floatCoordinates = [
            parseFloat(pointCoordinates[1]),
            parseFloat(pointCoordinates[0])
          ]
          // let swappedCoordinates = (pointCoordinates[x] =
          //   pointCoordinates.splice(y, 1, A[x])[0])

          const testPoint = ["40.77426628", "-73.98094971"]

          // svgMap
          //   .append("circle")
          //   .attr("cx", 1 + index * 10)
          //   .attr("cy", 1 + index * 10)
          //   .attr("r", 1 + index)
          //   .attr("fill-opacity", "0.1")
          //   .style("fill", "#40FF00")
          //   .attr("stroke", "#40FF00")
          //   .style("stroke-width", 1)
          //   .attr("class", "nycLinkPoint")

          // let pointCoordinatesSwapped = swapLongLat(pointCoordinates)

          //  console.log(pointCoordinates, floatCoordinates)

          //  let circle = d3.geoCircle().center(floatCoordinates).radius(20)

          //console.log(point, d3.geoContains(feature, testPoint))

          // svgMap
          //   .append("g")
          //   .attr("fill", "#0000ed")
          //   .attr("d", circle)
          //   .style("stroke", "#fff")
          //   .attr("class", "nycLinkPoint")
        }

        let circle = d3.geoCircle().center(svgPoint).radius(20)
      }
    )
  }

  render() {
    return (
      <div id="content">{/* <canvas width="800" height="400"></canvas> */}</div>
    )
  }
}

export default MapVisual
