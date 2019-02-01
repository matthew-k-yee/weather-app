import React from 'react'
import moment from 'moment'

function WeatherData(props) {
  // console.log(props)
  return(
    <React.Fragment>
    <h1>Today's Weather</h1>
    <h2>{moment().format("MMM Do YY")}</h2>
    <h2>{props.data.name}</h2>
    <h2>{props.data.currentTemp}&#176;</h2>
    <h3>High</h3>
    <h4>{props.data.tempMax}&#176;</h4>
    <h3>Low</h3>
    <h4>{props.data.tempMin}&#176;</h4>
    </React.Fragment>
  )

export default WeatherData