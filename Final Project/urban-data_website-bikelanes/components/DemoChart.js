import React, { Component } from "react"
import * as d3 from "d3"

class DemoChart extends Component {
  componentDidMount() {
    this.drawChart()
  }

  drawChart() {
    let w = this.props.width
    let h = this.props.height
    let barWidth = 36

    const data = this.props.data

    const svg = d3
      .select(".dataviz")
      .append("svg")
      .attr("width", w)
      .attr("height", h)

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * barWidth * 1.1)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", barWidth)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "blue")
  }

  render() {
    return <div id={"#" + this.props.id}></div>
  }
}

export default DemoChart
