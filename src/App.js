import React from 'react';
import './App.css';
import Input from './components/Input/input.js';
import Weather from './components/Weather/weather.js';

const API_KEY = '82521e4904695ab32cb51cf3da735484';

class App extends React.Component {

  state= {
    city: '',
    weather: '',
    temp: '',
    pressure: '',
    humidity: '',
    icon: '',
  }

  getWeather = async (e) => {
    e.preventDefault();

    const CITY = document.getElementById('cityInput').value;
    const COUNTRY = document.getElementById('countryInput').value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    this.setState({
      city: data.name,
      weather: data.weather[0].main,
      temp: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
    });
    console.log(this.state);
  }


  render() {
  return (
    <div className="App">
      <Input
        onClick={this.getWeather}/>
      <div className='app-body'>
        {this.state.city ?
          <Weather
            city={this.state.city}
            weather={this.state.weather}
            temp={this.state.temp}
            humidity={this.state.humidity}
            icon={this.state.icon} />
            : null}
      </div>
    </div>
    );
  }
}

export default App;
