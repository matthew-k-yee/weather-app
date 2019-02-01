import React from 'react'

function WeatherData(props) {
  // console.log(props)
  return(
    <React.Fragment>
    <h1>Today's Weather</h1>
    <h2>{props.data.name}</h2>
    <h2>{props.data.currentTemp}</h2>
    <h2>{props.data.tempMax}</h2>
    <h2>{props.data.tempMin}</h2>
    </React.Fragment>
  )
}
export default WeatherData