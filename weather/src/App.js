import React, { Component } from 'react';
import axios from 'axios'
import Main from './components/Main'
import Search from './components/Search'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      city: '',
      zipCode: '',
      currentTemp: '',
      tempMax: '',
      tempMin: '',
      description: ''
    })
  }
 
  async getWeather() {
    const request = axios.get('http://api.openweathermap.org/data/2.5/weather?zip=11207,us&units=imperial&APPID=ac5dcf5b7138ec9fb94b20fc551d75dd')
    const response = await request;
    console.log(response.data)
    return response.data
  }

  async componentDidMount() {
    await this.getWeather()
  }

  render() {
    return (
      <div className="App">
      <Main />
      <Search />
      </div>
    );
  }
}

export default App;
