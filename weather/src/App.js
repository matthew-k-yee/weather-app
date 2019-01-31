import React, { Component } from 'react';
import Welcome from './components/Welcome'
import WeatherInput from './components/WeatherInput'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      zipcode: ''
    })
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <div className="App">
      <Welcome />
      <WeatherInput />
      </div>
    );
  }
}

export default App;
