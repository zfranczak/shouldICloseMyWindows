import Weather from './Weather';
import React from 'react';
import '../styles/current-weather.scss';

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>{weatherData.name}</p>
          <p className='weather-description'>Sunny</p>
        </div>
        <img alt='weather' className='weather-icon' src='icons/01d.png' />
      </div>
      <div className='bottom'>
        <p className='temperature'>
          {Math.round(weatherData.main.feels_like)}°F
        </p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label'>Details</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value'>
              {Math.round(weatherData.main.temp)}°F
            </span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>
              {Math.round(weatherData.wind.speed)} m/s
            </span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>
              {weatherData.main.humidity}%
            </span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>
              {weatherData.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
