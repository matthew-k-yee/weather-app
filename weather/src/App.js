import React, { Component } from 'react';
import axios from 'axios'
import Search from './components/Search'
import WeatherData from './components/WeatherData'
import './App.css';

// const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
console.log(process.env.REACT_APP_WEATHER_API_KEY)
class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      zipCode: '',
      name: '',
      currentTemp: '',
      tempMax: '',
      tempMin: '',
      description: '', 
      toggle: false
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }
 
  async getWeather() {
    const request = axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&units=imperial&APPID=ac5dcf5b7138ec9fb94b20fc551d75dd`)
    const response = await request;
    this.setState({
      name: response.data.name,
      currentTemp: response.data.main.temp,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      description: response.data.weather[0].description
    })
    console.log(response.data)
    return response.data
  }

  async componentDidMount() {
    await this.getWeather()
  }

  handleChange(e) {
    this.setState({
      zipCode: e.target.value
    })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.getWeather(this.state.zipCode)
    this.toggleVisibility()
  }

  toggleVisibility(e) {
    this.setState({
      toggle: true
    })
  }

  render() {
    return (
      <div className="App">
      {this.state.toggle === true ? <WeatherData data={this.state}/>  : 
        <Search  
              zipCode={this.state.zipCode}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              onClick={this.toggleVisibility}
      />}
      
      </div>
    );
  }
}

export default App;
