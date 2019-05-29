import React from 'react';
import './weather.css';

function Weather (props) {

  const weatherClass = `weather-container ${props.weather.toLowerCase()}`;

  return (
    <div className={weatherClass}>
      <div className='city-display'>
        {props.city}
      </div>
      <div className='weather-desc'>
        {props.weather}
      </div>
      <div className='temp'>
        {props.temp} °C
      </div>
      <div className='humidity'>
        {props.humidity}% humidity
      </div>
    </div>
  )
};

export default Weather;
