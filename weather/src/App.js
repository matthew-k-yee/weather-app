import React, { Component } from 'react';
import axios from 'axios'
import Main from './components/Main'
import Search from './components/Search'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      zipCode: ''
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  async getWeather() {
    const request = axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&units=imperial&APPID=ac5dcf5b7138ec9fb94b20fc551d75dd`)
    const response = await request;
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
  }
  
  render() {
    return (
      <div className="App">
      <Main />
      <Search zipCode={this.state.zipCode}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
      />
      </div>
    );
  }
}

export default App;
