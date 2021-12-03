import React, { useState, useEffect } from "react"
import { csv } from "d3-fetch"
import { ascending } from "d3-array"
import BarChart from "./BarChartData"
// import data from "/data/barchart.csv"

const parseNA = (string) => (string === "NA" ? undefined : string)

function type(d) {
  return {
    genre: parseNA(d.genre),
    revenue: +d.revenue
  }
}

function filterData(data) {
  return data.filter((d) => {
    return d.revenue > 0
  })
}

function prepareBarChartData(data) {
  // usually more wrangling is required but the example data is simple
  return data
}

const BarChartData = () => {
  const [barChartData, setBarChartData] = useState(null)

  setBarChartData = [2, 4, 5, 6, 12, 2]
  // useEffect(() => {
  //   csv("/data/barchart.csv", type).then((data) => {
  //     const dataClean = filterData(data)
  //     setBarChartData(
  //       prepareBarChartData(dataClean).sort((a, b) => {
  //         return ascending(a.genre, b.genre)
  //       })
  //     )
  //   })
  // }, [])

  // if (barChartData === null) {
  //   return <p>Loading...</p>
  // }

  return <BarChart data={barChartData} />
}

export default BarChartData
