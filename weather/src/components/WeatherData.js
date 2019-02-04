import React from 'react'
import moment from 'moment'

function WeatherData(props) {
  // console.log(props)
  return(
    <div className='weatherdata'>
    <h1>Today's Weather</h1>
    <h2>{moment().format("MMM Do YY")}</h2>
    <h2>{props.data.name}</h2>
    <h2>{props.data.currentTemp}&#176;</h2>
    <h3>High/Low</h3>
    <h4>{props.data.tempMax}&#176; / {props.data.tempMin}&#176; </h4>
    <p>{props.data.description}</p>
    </div>
  )
}
export default WeatherData